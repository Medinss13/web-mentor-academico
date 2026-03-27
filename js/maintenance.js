// ============================================
// MODO MANTENIMIENTO
// Cambia a false para desactivar la pantalla
// ============================================
const MAINTENANCE_MODE = false;

if (MAINTENANCE_MODE) {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1A1A1A;font-family:Montserrat,sans-serif;';

    const box = document.createElement('div');
    box.style.cssText = 'text-align:center;padding:40px;max-width:500px;';
    box.innerHTML = `
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:24px">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
      <h1 style="color:#FFA500;font-size:2rem;margin:0 0 16px">En construcción</h1>
      <p style="color:#ccc;font-size:1.1rem;line-height:1.6">Estamos preparando algo increíble. Vuelve pronto.</p>
    `;
    document.body.appendChild(box);
  });
}
