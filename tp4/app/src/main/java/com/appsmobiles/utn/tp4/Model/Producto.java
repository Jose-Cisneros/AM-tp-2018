package com.appsmobiles.utn.tp4.Model;

public class Producto {
    private String id;
    private String nombre;
    private String categoria;
    private String calorias;
    private String hc;
    private String proteinas;
    private String grasas;
    private String details;

    public Producto(String id, String categoria, String nombre, String details, String calorias, String hc, String proteinas, String grasas) {
        this.id = id;
        this.details = details;
        this.nombre = nombre;
        this.categoria = categoria;
        this.calorias = calorias;
        this.hc = hc;
        this.proteinas = proteinas;
        this.grasas = grasas;
    }

    public ProductoRecord toProductoRecord(){

        return new ProductoRecord(this.nombre,this.calorias,this.hc,this.proteinas,this.grasas,this.categoria);


    }

    public Producto() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getCalorias() {
        return calorias;
    }

    public void setCalorias(String calorias) {
        this.calorias = calorias;
    }

    public String getHc() {
        return hc;
    }

    public void setHc(String hc) {
        this.hc = hc;
    }

    public String getProteinas() {
        return proteinas;
    }

    public void setProteinas(String proteinas) {
        this.proteinas = proteinas;
    }

    public String getGrasas() {
        return grasas;
    }

    public void setGrasas(String grasas) {
        this.grasas = grasas;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}