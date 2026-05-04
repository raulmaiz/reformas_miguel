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
          <p class="lead text-white">Información legal sobre el titular del sitio web reformasmiguel.cat.</p>
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
                <strong>Aviso legal en preparación.</strong>
                Algunos datos identificativos del titular están pendientes de actualizar.
                Si necesitas información concreta antes de la publicación definitiva,
                escríbenos a <a href="mailto:info@reformasmiguel.cat">info&#64;reformasmiguel.cat</a>.
              </div>
            </div>

            <h2 class="h4 fw-bold mt-4">1. Identidad del titular</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
              y de Comercio Electrónico (LSSI-CE), se ofrece la siguiente información:
            </p>
            <ul>
              <li><strong>Titular:</strong> [PENDIENTE — nombre legal completo o razón social]</li>
              <li><strong>NIF / CIF:</strong> [PENDIENTE]</li>
              <li><strong>Domicilio fiscal:</strong> [PENDIENTE — calle, código postal, localidad]</li>
              <li><strong>Email:</strong> info&#64;reformasmiguel.cat</li>
              <li><strong>Teléfono:</strong> +34 646 450 767</li>
              <li><strong>Actividad:</strong> Servicios de reformas, albañilería e instalaciones para vivienda.</li>
            </ul>

            <h2 class="h4 fw-bold mt-5">2. Objeto</h2>
            <p>
              El presente sitio web tiene como finalidad ofrecer información sobre los servicios de reformas
              prestados por el titular en Barcelona y su área metropolitana, así como facilitar el contacto
              de personas interesadas en solicitar presupuesto.
            </p>

            <h2 class="h4 fw-bold mt-5">3. Condiciones de uso</h2>
            <p>
              El acceso a este sitio web es gratuito. La utilización del mismo implica la aceptación plena
              de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos
              y servicios que el titular ofrece y a no emplearlos para incurrir en actividades ilícitas.
            </p>

            <h2 class="h4 fw-bold mt-5">4. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, marcas, logotipos y código) son propiedad del
              titular o de terceros que han autorizado su uso. Queda prohibida su reproducción total o parcial
              sin autorización expresa.
            </p>

            <h2 class="h4 fw-bold mt-5">5. Responsabilidad</h2>
            <p>
              El titular no se responsabiliza de errores tipográficos puntuales en el contenido informativo
              del sitio. Los precios indicados son orientativos: el precio definitivo de cualquier obra se
              fija mediante presupuesto cerrado por escrito tras la visita técnica.
            </p>

            <h2 class="h4 fw-bold mt-5">6. Legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia
              relacionada con el sitio web serán competentes los juzgados y tribunales de la ciudad del
              domicilio del titular, salvo que la legislación aplicable disponga lo contrario.
            </p>

            <p class="text-muted small mt-5">Última actualización: [PENDIENTE — fecha]</p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class AvisoLegalComponent {}
