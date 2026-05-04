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
          <p class="lead text-white">Cómo se tratan tus datos cuando contactas con nosotros.</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <p class="lead">
              Resumen rápido: <strong>este sitio web no almacena ni procesa datos personales en
              servidores propios.</strong> El formulario de contacto es una utilidad que prepara
              un mensaje de WhatsApp con los datos que tú escribes; nada de lo que tecleas se envía
              a un backend ni queda registrado en este sitio.
            </p>

            <h2 class="h4 fw-bold mt-5">1. Quién es el responsable</h2>
            <p>
              Reformas Miguel, prestador de servicios de reformas en Barcelona y su área metropolitana.
              Puedes consultar la información completa en el <a routerLink="/aviso-legal">aviso legal</a>.
              Para cualquier consulta sobre privacidad escribe a
              <a href="mailto:info@reformasmiguel.cat">info&#64;reformasmiguel.cat</a>.
            </p>

            <h2 class="h4 fw-bold mt-5">2. Qué datos se recogen y dónde van</h2>
            <p>
              Cuando rellenas el formulario de contacto del sitio (nombre, teléfono, email opcional,
              zona, tipo de reforma y comentarios), <strong>esos datos no abandonan tu navegador
              hasta que tú decides enviarlos</strong>. Al pulsar el botón de envío:
            </p>
            <ul>
              <li>Tu navegador construye un mensaje de WhatsApp con esos campos.</li>
              <li>Se abre la aplicación WhatsApp en tu dispositivo, con el mensaje ya preparado.</li>
              <li><strong>Eres tú quien envía el mensaje</strong> desde tu cuenta de WhatsApp.</li>
            </ul>
            <p>
              Una vez tú envías el mensaje, su contenido llega a Reformas Miguel a través de
              WhatsApp. La gestión posterior de esa conversación (contestar, agendar visita,
              enviar presupuesto) se realiza fuera de este sitio web por los canales habituales
              de mensajería, llamada y email.
            </p>

            <h2 class="h4 fw-bold mt-5">3. Finalidad y base jurídica del tratamiento posterior</h2>
            <p>
              Los datos que tú nos envías por WhatsApp, llamada o email se utilizan únicamente para
              atender tu solicitud (contactarte, recopilar información técnica, presentar presupuesto
              y, si lo aceptas, ejecutar la obra contratada).
            </p>
            <p>
              La base jurídica es tu consentimiento al iniciar el contacto y, en su caso, la
              ejecución de medidas precontractuales solicitadas por ti (artículos 6.1.a y 6.1.b
              del Reglamento General de Protección de Datos).
            </p>

            <h2 class="h4 fw-bold mt-5">4. Plazo de conservación</h2>
            <p>
              Si finalmente no contratas con nosotros, los datos derivados del contacto se eliminan
              en un plazo razonable. Si contratas, se conservan durante los plazos legales aplicables
              a la relación comercial (contables y fiscales, mínimo seis años).
            </p>

            <h2 class="h4 fw-bold mt-5">5. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros, salvo obligación legal. Los proveedores tecnológicos
              que intervienen son:
            </p>
            <ul>
              <li>
                <strong>Vercel Inc.</strong> (EE. UU.): hosting del sitio. Puede tratar logs técnicos
                con datos como tu dirección IP. Se ampara en las cláusulas contractuales tipo aprobadas
                por la Comisión Europea.
              </li>
              <li>
                <strong>Meta Platforms Ireland Ltd.</strong>: el botón de envío abre WhatsApp,
                propiedad de Meta. La conversación posterior se rige por las
                políticas de WhatsApp.
              </li>
            </ul>

            <h2 class="h4 fw-bold mt-5">6. Tus derechos</h2>
            <p>Como interesado, puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul>
              <li>Acceso, rectificación o supresión de tus datos.</li>
              <li>Oposición al tratamiento o limitación del mismo.</li>
              <li>Portabilidad de los datos.</li>
              <li>Retirada del consentimiento prestado.</li>
            </ul>
            <p>
              Para ejercerlos, escríbenos a
              <a href="mailto:info@reformasmiguel.cat">info&#64;reformasmiguel.cat</a> indicando
              claramente qué derecho deseas ejercer. También puedes presentar una reclamación
              ante la Agencia Española de Protección de Datos
              (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>)
              si consideras que tus derechos no han sido atendidos.
            </p>

            <h2 class="h4 fw-bold mt-5">7. Seguridad</h2>
            <p>
              Aplicamos las medidas técnicas y organizativas razonables para proteger los datos
              que recibimos por nuestros canales de contacto frente a accesos no autorizados,
              pérdida o alteración.
            </p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PoliticaPrivacidadComponent {}
