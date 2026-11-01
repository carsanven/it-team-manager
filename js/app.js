const dataUrl = new URL('./data/incidencias.json', document.baseURI);
const rows = document.querySelector('#ticket-rows');
const statusFilter = document.querySelector('#status-filter');
const priorityFilter = document.querySelector('#priority-filter');
const searchInput = document.querySelector('#search');
let tickets = [];

const statusClass = {
  'Nueva': 'status-new',
  'En progreso': 'status-progreso',
  'En Waiting': 'status-waiting',
  'Resuelta': 'status-resuelta'
};
const priorityClass = {
  'Crítica': 'priority-crítica',
  'Alta': 'priority-alta',
  'Media': 'priority-media',
  'Baja': 'priority-baja'
};
const statuses = ['Nueva', 'En progreso', 'En Waiting', 'Resuelta'];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function formatDate(value) {
  return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    .format(new Date(`${value}T12:00:00`));
}

function renderMetrics() {
  const counts = tickets.reduce((totals, ticket) => {
    if (Object.hasOwn(totals, ticket.status)) totals[ticket.status] += 1;
    return totals;
  }, Object.fromEntries(statuses.map(status => [status, 0])));
  document.querySelector('#metric-new').textContent = counts['Nueva'];
  document.querySelector('#metric-progress').textContent = counts['En progreso'];
  document.querySelector('#metric-waiting').textContent = counts['En Waiting'];
  document.querySelector('#metric-resolved').textContent = counts['Resuelta'];
  document.querySelector('#nav-count').textContent = tickets.length;
}

function renderTickets() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  const visible = tickets.filter(ticket => {
    const searchable = `${ticket.id} ${ticket.title} ${ticket.description} ${ticket.status} ${ticket.priority} ${ticket.assignee}`.toLocaleLowerCase('es');
    return (statusFilter.value === 'all' || ticket.status === statusFilter.value)
      && (priorityFilter.value === 'all' || ticket.priority === priorityFilter.value)
      && searchable.includes(query);
  });

  if (!visible.length) {
    rows.innerHTML = '<tr><td colspan="6" class="empty-cell">No se encontraron incidencias con estos filtros.</td></tr>';
  } else {
    rows.innerHTML = visible.map(ticket => {
      const priorityCssClass = priorityClass[ticket.priority] || '';
      return `<tr>
        <td class="incident-cell">
          <div class="ticket-title"><span class="field-label">Título</span><span>${escapeHtml(ticket.title)}</span></div>
          <div class="ticket-id"><span class="field-label">Identificador</span><span>${escapeHtml(ticket.id)}</span></div>
          <div class="ticket-description"><span class="field-label">Descripción</span><span>${escapeHtml(ticket.description)}</span></div>
        </td>
        <td data-label="Estado"><span class="field-label">Estado</span><span class="pill ${statusClass[ticket.status] || ''}">${escapeHtml(ticket.status)}</span></td>
        <td data-label="Prioridad"><span class="field-label">Prioridad</span><span class="priority ${priorityCssClass}">${escapeHtml(ticket.priority)}</span></td>
        <td data-label="Responsable"><span class="field-label">Responsable</span><div class="assignee"><span class="assignee-avatar"><span class="field-label">Iniciales</span><span>${escapeHtml(ticket.initials)}</span></span><span class="assignee-name">${escapeHtml(ticket.assignee)}</span></div></td>
        <td data-label="Fecha"><span class="field-label">Fecha</span><span>${formatDate(ticket.date)}</span></td>
        <td data-label="Acciones"><span class="field-label">Acciones</span><button class="row-action" aria-label="Más opciones para ${escapeHtml(ticket.id)}">⋯</button></td>
      </tr>`;
    }).join('');
  }
  document.querySelector('#results-count').textContent = `Mostrando ${visible.length} de ${tickets.length} incidencias`;
}

async function loadTickets() {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) throw new Error(`Respuesta HTTP ${response.status}`);
    tickets = (await response.json()).map(ticket => ({
      ...ticket,
      status: ({ 'Abierta': 'Nueva', 'Pendiente': 'En Waiting' })[ticket.status] || ticket.status
    }));
    renderMetrics();
    renderTickets();
  } catch (error) {
    rows.innerHTML = '<tr><td colspan="6" class="empty-cell">No se pudieron cargar los datos. Ejecuta la aplicación con un servidor local.</td></tr>';
    document.querySelector('#results-count').textContent = 'Error al cargar incidencias';
    console.error('Error cargando incidencias:', error);
  }
}

statusFilter.addEventListener('change', renderTickets);
priorityFilter.addEventListener('change', renderTickets);
searchInput.addEventListener('input', renderTickets);
document.querySelector('#today').textContent = new Intl.DateTimeFormat('es-ES', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date());
document.querySelector('#new-ticket').addEventListener('click', () => document.querySelector('#ticket-dialog').showModal());
document.querySelector('#export-button').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(tickets, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'incidencias.json';
  link.click();
  URL.revokeObjectURL(link.href);
});

loadTickets();
