import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">Inicio</a></li>
            <li class="breadcrumb-item active text-white">Aviso legal</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">Aviso legal</h1>
          <p class="lead text-white">Información sobre el titular del sitio web reformasmiguel.cat.</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <h2 class="h4 fw-bold mt-4">1. Titular del sitio</h2>
            <p>
              Este sitio web se publica bajo el nombre comercial <strong>Reformas Miguel</strong>,
              dedicado a servicios de reformas, albañilería e instalaciones para vivienda en
              Barcelona y su área metropolitana.
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@reformasmiguel.cat">info&#64;reformasmiguel.cat</a></li>
              <li><strong>Teléfono:</strong> <a href="tel:+34646450767">+34 646 450 767</a></li>
              <li><strong>Ámbito de actuación:</strong> Barcelona ciudad y área metropolitana</li>
            </ul>
            <p class="text-muted">
              Para obtener los datos identificativos completos del titular (denominación legal,
              NIF y domicilio fiscal) en virtud del artículo 10 de la LSSI-CE, puedes solicitarlos
              por escrito al email indicado y se te facilitarán a la mayor brevedad.
            </p>

            <h2 class="h4 fw-bold mt-5">2. Objeto del sitio</h2>
            <p>
              Este sitio web tiene una finalidad puramente <strong>informativa</strong>:
              describir los servicios ofrecidos y poner a disposición de las personas interesadas
              un canal de contacto. El sitio <strong>no comercializa productos en línea</strong>,
              no procesa pagos y no almacena datos personales de los visitantes en servidores propios.
            </p>

            <h2 class="h4 fw-bold mt-5">3. Condiciones de uso</h2>
            <p>
              El acceso a este sitio web es libre y gratuito. La utilización del mismo implica la
              aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado
              de los contenidos y a no emplearlos para incurrir en actividades ilícitas, contrarias
              a la buena fe o lesivas de derechos de terceros.
            </p>

            <h2 class="h4 fw-bold mt-5">4. Propiedad intelectual</h2>
            <p>
              Los textos, imágenes, marcas, logotipos y código del sitio son propiedad del titular
              o de terceros que han autorizado su uso. Queda prohibida su reproducción total o parcial
              sin autorización expresa.
            </p>

            <h2 class="h4 fw-bold mt-5">5. Información de los servicios y precios</h2>
            <p>
              Las descripciones de servicios y precios mostrados son <strong>orientativos</strong>.
              El precio definitivo de cualquier obra se determina mediante presupuesto cerrado
              por escrito, emitido tras visita técnica al inmueble.
              Ningún contenido de este sitio constituye oferta vinculante.
            </p>

            <h2 class="h4 fw-bold mt-5">6. Responsabilidad</h2>
            <p>
              El titular procura que la información publicada sea correcta y esté actualizada,
              pero no se responsabiliza de errores tipográficos puntuales ni de eventuales
              interrupciones técnicas del sitio.
            </p>

            <h2 class="h4 fw-bold mt-5">7. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier
              controversia relacionada con el sitio web serán competentes los juzgados y tribunales
              correspondientes al domicilio del titular, salvo que la legislación aplicable
              disponga otra cosa.
            </p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class AvisoLegalComponent {}
