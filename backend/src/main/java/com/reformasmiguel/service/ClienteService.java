package com.reformasmiguel.service;

import com.reformasmiguel.model.Cliente;
import com.reformasmiguel.repository.ClienteRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public List<Cliente> buscar(String termino) {
        if (termino == null || termino.isBlank()) {
            return findAll();
        }
        return clienteRepository.buscar(termino);
    }

    public Cliente findById(Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cliente no encontrado con id: " + id));
    }

    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente update(Long id, Cliente clienteActualizado) {
        Cliente cliente = findById(id);
        cliente.setNombre(clienteActualizado.getNombre());
        cliente.setApellidos(clienteActualizado.getApellidos());
        cliente.setTelefono(clienteActualizado.getTelefono());
        cliente.setEmail(clienteActualizado.getEmail());
        cliente.setDireccion(clienteActualizado.getDireccion());
        return clienteRepository.save(cliente);
    }

    public void delete(Long id) {
        findById(id);
        clienteRepository.deleteById(id);
    }
}
