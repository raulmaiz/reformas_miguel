import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  busqueda = '';

  mostrarModal = false;
  mostrarConfirmacion = false;

  clienteForm: Partial<Cliente> = {};
  clienteAEliminar: Cliente | null = null;
  modoEdicion = false;

  cargando = false;
  guardando = false;
  error = '';
  errorModal = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.cargando = true;
    this.error = '';
    this.clienteService.getAll(this.busqueda).subscribe({
      next: (data) => {
        this.clientes = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al cargar los clientes. Comprueba que el servidor está activo.';
        this.cargando = false;
      }
    });
  }

  buscar(): void {
    this.cargarClientes();
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
    this.cargarClientes();
  }

  nuevoCliente(): void {
    this.clienteForm = {};
    this.modoEdicion = false;
    this.errorModal = '';
    this.mostrarModal = true;
  }

  editarCliente(cliente: Cliente): void {
    this.clienteForm = { ...cliente };
    this.modoEdicion = true;
    this.errorModal = '';
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.clienteForm = {};
    this.errorModal = '';
  }

  guardar(): void {
    if (!this.clienteForm.nombre?.trim() || !this.clienteForm.apellidos?.trim() || !this.clienteForm.telefono?.trim()) {
      this.errorModal = 'Por favor, completa todos los campos obligatorios.';
      return;
    }

    this.guardando = true;
    this.errorModal = '';

    const operacion = this.modoEdicion && this.clienteForm.id
      ? this.clienteService.update(this.clienteForm.id, this.clienteForm as Cliente)
      : this.clienteService.create(this.clienteForm as Cliente);

    operacion.subscribe({
      next: () => {
        this.guardando = false;
        this.mostrarModal = false;
        this.clienteForm = {};
        this.cargarClientes();
      },
      error: () => {
        this.guardando = false;
        this.errorModal = 'Error al guardar el cliente. Inténtalo de nuevo.';
      }
    });
  }

  confirmarEliminar(cliente: Cliente): void {
    this.clienteAEliminar = cliente;
    this.mostrarConfirmacion = true;
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
    this.clienteAEliminar = null;
  }

  eliminar(): void {
    if (!this.clienteAEliminar?.id) return;
    this.clienteService.delete(this.clienteAEliminar.id).subscribe({
      next: () => {
        this.mostrarConfirmacion = false;
        this.clienteAEliminar = null;
        this.cargarClientes();
      },
      error: () => {
        this.error = 'Error al eliminar el cliente.';
        this.mostrarConfirmacion = false;
      }
    });
  }

  get formularioValido(): boolean {
    return !!(this.clienteForm.nombre?.trim() && this.clienteForm.apellidos?.trim() && this.clienteForm.telefono?.trim());
  }
}
