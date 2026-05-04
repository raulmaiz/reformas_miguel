import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  form = {
    nombre: '',
    telefono: '',
    tipo: '',
    rgpd: false
  };

  enviar(formRef: NgForm): void {
    if (!formRef.valid || !this.form.rgpd) {
      formRef.control.markAllAsTouched();
      return;
    }
    const lineas = [
      `Hola Miguel, soy ${this.form.nombre}.`,
      ``,
      this.form.tipo ? `*Quiero reformar:* ${this.form.tipo}` : '',
      `*Teléfono:* ${this.form.telefono}`,
      ``,
      `(Enviado desde reformasmiguel.cat)`
    ].filter(Boolean);
    const mensaje = encodeURIComponent(lineas.join('\n'));
    window.open(`https://wa.me/34646450767?text=${mensaje}`, '_blank', 'noopener');
  }
}
