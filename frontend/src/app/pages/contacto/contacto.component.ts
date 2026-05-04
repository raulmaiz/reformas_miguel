import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  constructor(private translate: TranslateService) {}

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

    const isEs = this.translate.currentLang === 'es';
    const labels = isEs
      ? { greet: 'soy', tipo: '*Tipo de reforma:*', zona: '*Zona:*', tel: '*Teléfono:*', email: '*Email:*', det: '*Detalles:*', sent: '(Enviado desde reformasmiguel.cat)' }
      : { greet: 'soc', tipo: '*Tipus de reforma:*', zona: '*Zona:*', tel: '*Telèfon:*', email: '*Email:*', det: '*Detalls:*', sent: '(Enviat des de reformasmiguel.cat)' };

    const lineas = [
      `Hola Miguel, ${labels.greet} ${this.form.nombre}${this.form.apellidos ? ' ' + this.form.apellidos : ''}.`,
      ``,
      `${labels.tipo} ${this.form.tipo}`,
      `${labels.zona} ${this.form.zona}`,
      `${labels.tel} ${this.form.telefono}`
    ];
    if (this.form.email) lineas.push(`${labels.email} ${this.form.email}`);
    if (this.form.detalles) {
      lineas.push(``, `${labels.det}`, this.form.detalles);
    }
    lineas.push(``, labels.sent);

    const mensaje = encodeURIComponent(lineas.join('\n'));
    window.open(`https://wa.me/34646450767?text=${mensaje}`, '_blank', 'noopener');
  }
}
