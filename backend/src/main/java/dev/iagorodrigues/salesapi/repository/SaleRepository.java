package dev.iagorodrigues.salesapi.repository;

import dev.iagorodrigues.salesapi.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
