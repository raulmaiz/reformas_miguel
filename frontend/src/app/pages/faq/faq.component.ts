import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

const FAQ_ENTRIES: { q: string; a: string }[] = [
  {
    q: '¿Cuánto cuesta reformar un piso en Barcelona?',
    a: 'Depende del estado del piso, el tamaño y el alcance de la reforma. Como referencia: una reforma básica puede estar entre 350–500€/m², una completa entre 600–900€/m² y una premium puede superar los 1.000€/m². El precio exacto requiere visita previa.'
  },
  {
    q: '¿El presupuesto es gratuito?',
    a: 'Sí, totalmente gratuito y sin compromiso. Visitamos la obra, evaluamos el trabajo y te entregamos un presupuesto detallado por escrito. Si decides no continuar, no hay ningún coste.'
  },
  {
    q: '¿El precio puede subir una vez empezada la obra?',
    a: 'El presupuesto que firmamos es cerrado. Solo puede cambiar si tú pides cambios adicionales durante la obra. Cualquier cambio se presupuesta antes de ejecutarlo, nunca sorpresas al final.'
  },
  {
    q: '¿Cómo se calcula el presupuesto de una reforma?',
    a: 'Hacemos una visita, tomamos medidas y evaluamos el estado actual. El presupuesto incluye materiales, mano de obra, gestión de residuos y todos los trabajos necesarios para entregar la obra terminada. No hay conceptos ocultos.'
  },
  {
    q: '¿Cuánto tarda una reforma de baño?',
    a: 'Un baño estándar de 5–8m² tarda entre 7 y 10 días laborables. Un baño más grande o con más complejidad puede necesitar hasta 2 semanas.'
  },
  {
    q: '¿Cuánto tarda una reforma integral de un piso?',
    a: 'Un piso de 60–80m² suele necesitar entre 4 y 8 semanas, dependiendo del alcance y los materiales elegidos. Antes de empezar te entregamos un calendario detallado con cada fase de la obra.'
  },
  {
    q: '¿Puedo seguir viviendo en el piso durante la reforma?',
    a: 'En reformas integrales no es recomendable por el polvo y el ruido continuo. Para reformas parciales (solo baño o cocina) sí suele ser posible si el resto del piso permanece operativo. Lo valoramos caso a caso en la visita previa.'
  },
  {
    q: '¿Hace falta licencia para reformar en Barcelona?',
    a: 'Para obras que no afectan a elementos estructurales ni comunes del edificio (baños, cocinas, pintura, suelos) generalmente es suficiente con una comunicación previa al Ayuntamiento. Para obras más importantes puede necesitarse licencia de obras menores. Te orientamos en todo el proceso.'
  },
  {
    q: '¿Necesito avisar a la comunidad de propietarios?',
    a: 'Para obras que generen ruido o usen zonas comunes es recomendable notificarlo a la comunidad. En algunos edificios lo exigen. Miguel te ayuda a gestionar este proceso correctamente.'
  },
  {
    q: '¿Los materiales están incluidos en el presupuesto?',
    a: 'Sí. El presupuesto incluye materiales estándar de buena calidad y mano de obra. Si quieres materiales específicos o de mayor gama, se añaden al presupuesto con su coste exacto antes de comprarlos.'
  },
  {
    q: '¿Puedo elegir yo los materiales y acabados?',
    a: 'Por supuesto. Te orientamos sobre opciones dentro de tu presupuesto y luego decides tú. Para azulejos, suelos o sanitarios podemos acompañarte a tiendas o asesorarte en la selección online.'
  }
];

const SCHEMA_ID = 'page-schema-faq';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ENTRIES.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    });
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
