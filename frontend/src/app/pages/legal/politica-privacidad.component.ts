import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">Inicio</a></li>
            <li class="breadcrumb-item active text-white">Política de privacidad</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">Política de privacidad</h1>
          <p class="lead text-white">Cómo tratamos tus datos cuando contactas con nosotros.</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <div class="alert alert-warning border-warning d-flex align-items-start gap-3 mb-5">
              <i class="bi bi-exclamation-triangle-fill fs-4"></i>
              <div>
                <strong>Política en preparación.</strong>
                Algunos datos identificativos del responsable están pendientes de actualizar.
              </div>
            </div>

            <p class="lead">
              Tu privacidad nos importa. Esta política explica qué datos recogemos cuando rellenas el
              formulario de contacto o nos escribes por WhatsApp, para qué los usamos y cuáles son tus derechos.
            </p>

            <h2 class="h4 fw-bold mt-5">1. Responsable del tratamiento</h2>
            <ul>
              <li><strong>Titular:</strong> [PENDIENTE — nombre legal o razón social]</li>
              <li><strong>NIF / CIF:</strong> [PENDIENTE]</li>
              <li><strong>Domicilio:</strong> [PENDIENTE]</li>
              <li><strong>Email de contacto RGPD:</strong> info&#64;reformasmiguel.cat</li>
            </ul>

            <h2 class="h4 fw-bold mt-5">2. Qué datos recogemos</h2>
            <p>
              Solo recogemos los datos que tú nos facilitas voluntariamente al rellenar el formulario de
              contacto: nombre, apellidos, teléfono, email (opcional), zona geográfica, tipo de reforma
              que te interesa y los detalles libres que quieras añadir.
            </p>
            <p>
              No recogemos datos sensibles ni utilizamos cookies de seguimiento.
              Consulta la <a routerLink="/politica-de-cookies">política de cookies</a> para más información.
            </p>

            <h2 class="h4 fw-bold mt-5">3. Finalidad y base jurídica</h2>
            <ul>
              <li>
                <strong>Finalidad:</strong> gestionar tu solicitud de presupuesto, contactar contigo
                para recopilar la información técnica necesaria, presentarte un presupuesto y, en caso
                de aceptación, ejecutar la obra.
              </li>
              <li>
                <strong>Base jurídica:</strong> tu consentimiento expreso al marcar la casilla de aceptación
                del formulario (art. 6.1.a RGPD), y la ejecución de medidas precontractuales solicitadas
                por ti (art. 6.1.b RGPD).
              </li>
            </ul>

            <h2 class="h4 fw-bold mt-5">4. Plazo de conservación</h2>
            <p>
              Tus datos se conservan durante el tiempo necesario para gestionar tu solicitud y, si finalmente
              contratas con nosotros, durante los plazos legales aplicables a la relación comercial
              (mínimo 6 años para obligaciones contables y fiscales). Si no contratas, los datos se eliminan
              en un plazo razonable tras finalizar el contacto.
            </p>

            <h2 class="h4 fw-bold mt-5">5. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros, salvo cuando exista obligación legal.
              Cuando envías el formulario, este se transmite a través de la aplicación WhatsApp, propiedad
              de Meta Platforms Ireland Ltd., que actúa como medio de comunicación entre tú y nosotros.
              El servicio de hosting del sitio (Vercel Inc., EE. UU.) puede tratar logs técnicos con datos
              como tu dirección IP, en virtud de las cláusulas contractuales tipo aprobadas por la
              Comisión Europea para transferencias internacionales.
            </p>

            <h2 class="h4 fw-bold mt-5">6. Tus derechos</h2>
            <p>Como interesado, tienes derecho a:</p>
            <ul>
              <li>Acceder a tus datos.</li>
              <li>Solicitar su rectificación o supresión.</li>
              <li>Oponerte al tratamiento o solicitar su limitación.</li>
              <li>Solicitar la portabilidad de tus datos.</li>
              <li>Retirar el consentimiento prestado en cualquier momento.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escríbenos a
              <a href="mailto:info@reformasmiguel.cat">info&#64;reformasmiguel.cat</a> indicando claramente
              qué derecho deseas ejercer. También puedes presentar una reclamación ante la Agencia Española
              de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>)
              si consideras que tus derechos no han sido atendidos.
            </p>

            <h2 class="h4 fw-bold mt-5">7. Seguridad</h2>
            <p>
              Aplicamos las medidas técnicas y organizativas razonables para proteger tus datos frente
              a accesos no autorizados, pérdida o alteración.
            </p>

            <p class="text-muted small mt-5">Última actualización: [PENDIENTE — fecha]</p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PoliticaPrivacidadComponent {}
