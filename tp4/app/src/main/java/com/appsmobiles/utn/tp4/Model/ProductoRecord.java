package com.appsmobiles.utn.tp4.Model;

public class ProductoRecord {

    public String nombre;
    public String calorias;
    public String hc;
    public String proteinas;
    public String grasas;
    public String categoria;

    public ProductoRecord() {

    }

    public ProductoRecord(String nombre, String calorias, String hc, String proteinas, String grasas, String categoria) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.hc = hc;
        this.proteinas = proteinas;
        this.grasas = grasas;
        this.categoria = categoria;
    }
}
