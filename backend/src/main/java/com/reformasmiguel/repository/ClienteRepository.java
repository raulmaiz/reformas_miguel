package com.reformasmiguel.repository;

import com.reformasmiguel.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    @Query("SELECT c FROM Cliente c WHERE " +
           "LOWER(c.nombre) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.apellidos) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "c.telefono LIKE CONCAT('%', :busqueda, '%') OR " +
           "LOWER(COALESCE(c.email, '')) LIKE LOWER(CONCAT('%', :busqueda, '%'))")
    List<Cliente> buscar(@Param("busqueda") String busqueda);
}
