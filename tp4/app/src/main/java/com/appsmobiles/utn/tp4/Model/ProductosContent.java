package com.appsmobiles.utn.tp4.Model;

import android.content.Context;
import android.database.Cursor;
import android.util.Log;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductosContent {


    public static final List<Producto> ITEMS = new ArrayList<Producto>();

    private Context context;

    public static final Map<String, Producto> ITEM_MAP = new HashMap<String, Producto>();

    private static final int COUNT = 25;

    public ProductosContent(Context context) {
        this.context = context;
    }

    static {
        // Agrega los productos.
        for (int i = 1; i <= COUNT; i++) {
            addItem(createDummyItem(i));
        }
    }

    private static void addItem(Producto item) {
        ITEMS.add(item);
        ITEM_MAP.put(item.id, item);
    }

    private static Producto createDummyItem(int position) {
        return new Producto();
    }

    private ArrayList<Producto> getProdutos() {

        ProductosDb db = new ProductosDb(context,"Productos",null,1);
        db.getReadableDatabase();

        ArrayList<Producto> resultList = new ArrayList<>();

        Cursor c = db.getAllProducts();
        while (c.moveToNext())
        {
            String nombre = c.getString(c.getColumnIndex("nombre"));
            String categoria = c.getString(c.getColumnIndex("categoria"));
            String calorias = c.getString(c.getColumnIndex("calorias"));
            String hc = c.getString(c.getColumnIndex("hc"));
            String proteinas = c.getString(c.getColumnIndex("proteinas"));
            String grasas = c.getString(c.getColumnIndex("grasas"));
            String details = c.getString(c.getColumnIndex("details"));

            try
            {
                Producto ob = new Producto();
                ob.setNombre(nombre);
                resultList.add(ob);
            }
            catch (Exception e) {
                Log.e("DBERROR", "Error " + e.toString());
            }

        }

        c.close();

        db.close();
        return resultList;
    }

    private static String makeDetails(int position) {
        StringBuilder builder = new StringBuilder();
        builder.append("Details about Item: ").append(position);
        for (int i = 0; i < position; i++) {
            builder.append("\nMore details information here.");
        }
        return builder.toString();
    }


    public static class Producto {
        private String id;
        private String nombre;
        private String categoria;
        private float calorias;
        private float hc;
        private float proteinas;
        private float grasas;
        private String details;

        public Producto(String id, String categoria, String nombre, String details,float calorias, float hc, float proteinas,float grasas ) {
            this.id = id;
            this.details = details;
            this.nombre = nombre;
            this.categoria = categoria;
            this.calorias = calorias;
            this.hc = hc;
            this.proteinas = proteinas;
            this.grasas = grasas;
        }

        public Producto() {
        }

        public String getId() {
            return id;
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

        public float getCalorias() {
            return calorias;
        }

        public void setCalorias(float calorias) {
            this.calorias = calorias;
        }

        public float getHc() {
            return hc;
        }

        public void setHc(float hc) {
            this.hc = hc;
        }

        public float getProteinas() {
            return proteinas;
        }

        public void setProteinas(float proteinas) {
            this.proteinas = proteinas;
        }

        public float getGrasas() {
            return grasas;
        }

        public void setGrasas(float grasas) {
            this.grasas = grasas;
        }

        public String getDetails() {
            return details;
        }

    }
}
