package dev.iagorodrigues.salesapi.repository;

import dev.iagorodrigues.salesapi.dto.SaleSuccessDTO;
import dev.iagorodrigues.salesapi.dto.SaleSumDTO;
import dev.iagorodrigues.salesapi.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query(value = "SELECT new dev.iagorodrigues.salesapi.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupedBySeller();

    @Query(value = "SELECT new dev.iagorodrigues.salesapi.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupedBySeller();
}
