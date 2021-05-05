package dev.iagorodrigues.salesapi.service;

import dev.iagorodrigues.salesapi.dto.SellerDTO;
import dev.iagorodrigues.salesapi.entities.Seller;
import dev.iagorodrigues.salesapi.repository.SellerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    private final SellerRepository sellerRepository;

    public SellerService(SellerRepository sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    public List<SellerDTO> findAll() {
        List<Seller> sellers = sellerRepository.findAll();
        return sellers
                .stream()
                .map(SellerDTO::new)
                .collect(Collectors.toList());
    }
}
