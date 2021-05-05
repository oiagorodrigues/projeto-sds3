package dev.iagorodrigues.salesapi.repository;

import dev.iagorodrigues.salesapi.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
