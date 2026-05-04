import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politica-cookies',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">Inicio</a></li>
            <li class="breadcrumb-item active text-white">Política de cookies</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">Política de cookies</h1>
          <p class="lead text-white">Qué guarda este sitio en tu navegador y por qué.</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <p class="lead">
              Este sitio web <strong>no utiliza cookies de seguimiento</strong>, ni de publicidad,
              ni de análisis. Tampoco integra herramientas de terceros (como Google Analytics o píxeles
              de Meta) que pudieran recoger datos sobre tu navegación.
            </p>

            <h2 class="h4 fw-bold mt-5">1. Qué es una cookie</h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web guarda en tu navegador. Sirve
              tanto para que el sitio funcione (cookies técnicas) como para recordar preferencias o
              recopilar información sobre tu uso del sitio (cookies de análisis o publicidad).
            </p>

            <h2 class="h4 fw-bold mt-5">2. Qué cookies usa este sitio</h2>
            <p>
              Actualmente este sitio web solo puede crear cookies o entradas de almacenamiento estrictamente
              necesarias para su funcionamiento básico:
            </p>
            <div class="table-responsive my-4">
              <table class="table table-bordered align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Tipo</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                    <th>Consentimiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Técnicas / preferencias</td>
                    <td>Recordar acciones del usuario en la sesión actual</td>
                    <td>Sesión</td>
                    <td>Exentas (art. 22.2 LSSI-CE)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Al no instalar cookies de análisis ni de terceros, este sitio no requiere mostrar un banner
              de consentimiento previo. Si en el futuro se incorporan herramientas de análisis o publicidad,
              esta política se actualizará y se solicitará tu consentimiento expreso antes de su activación.
            </p>

            <h2 class="h4 fw-bold mt-5">3. Cookies de servicios externos</h2>
            <p>
              Cuando pulsas un botón para abrir WhatsApp o realizar una llamada telefónica, sales de este
              sitio y entras en aplicaciones de terceros (Meta, tu marcador telefónico, tu cliente de
              correo). Esos servicios tienen sus propias políticas de cookies y privacidad, ajenas
              al titular de este sitio.
            </p>

            <h2 class="h4 fw-bold mt-5">4. Cómo controlar las cookies</h2>
            <p>
              Puedes configurar tu navegador para bloquear o eliminar todas las cookies de cualquier sitio.
              Te dejamos los enlaces a las guías oficiales:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener">Microsoft Edge</a></li>
            </ul>

            <p class="text-muted small mt-5">Última actualización: [PENDIENTE — fecha]</p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PoliticaCookiesComponent {}
