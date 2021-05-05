package dev.iagorodrigues.salesapi.service;

import dev.iagorodrigues.salesapi.dto.SaleDTO;
import dev.iagorodrigues.salesapi.dto.SaleSuccessDTO;
import dev.iagorodrigues.salesapi.dto.SaleSumDTO;
import dev.iagorodrigues.salesapi.entities.Sale;
import dev.iagorodrigues.salesapi.repository.SaleRepository;
import dev.iagorodrigues.salesapi.repository.SellerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    private final SaleRepository saleRepository;
    private final SellerRepository sellerRepository;

    public SaleService(SaleRepository saleRepository, SellerRepository sellerRepository) {
        this.saleRepository = saleRepository;
        this.sellerRepository = sellerRepository;
    }

    // TODO: scale solution for N+1 requests
    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();

        Page<Sale> sales = saleRepository.findAll(pageable);
        return sales.map(SaleDTO::new);
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller() {
        sellerRepository.findAll();
        return saleRepository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller() {
        sellerRepository.findAll();
        return saleRepository.successGroupedBySeller();
    }
}
