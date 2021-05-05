package dev.iagorodrigues.salesapi.dto;

import dev.iagorodrigues.salesapi.entities.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {
    // implements Serializable interface to assure SellerDTO can be converted to bytes
    private static final long serialVersionUID = 1l;

    private Long id;
    private String name;

    public SellerDTO() {
    }

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller entity) {
        id = entity.getId();
        name = entity.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
