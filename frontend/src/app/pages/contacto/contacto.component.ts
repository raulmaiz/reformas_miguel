import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  form = {
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    zona: '',
    tipo: '',
    detalles: '',
    rgpd: false
  };

  enviar(formRef: NgForm): void {
    if (!formRef.valid || !this.form.rgpd) {
      formRef.control.markAllAsTouched();
      return;
    }

    const lineas = [
      `Hola Miguel, soy ${this.form.nombre}${this.form.apellidos ? ' ' + this.form.apellidos : ''}.`,
      ``,
      `*Tipo de reforma:* ${this.form.tipo}`,
      `*Zona:* ${this.form.zona}`,
      `*Teléfono:* ${this.form.telefono}`
    ];
    if (this.form.email) lineas.push(`*Email:* ${this.form.email}`);
    if (this.form.detalles) {
      lineas.push(``, `*Detalles:*`, this.form.detalles);
    }
    lineas.push(``, `(Enviado desde reformasmiguel.cat)`);

    const mensaje = encodeURIComponent(lineas.join('\n'));
    window.open(`https://wa.me/34646450767?text=${mensaje}`, '_blank', 'noopener');
  }
}
