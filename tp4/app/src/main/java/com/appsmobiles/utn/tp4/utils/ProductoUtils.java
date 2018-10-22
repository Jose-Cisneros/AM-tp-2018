package com.appsmobiles.utn.tp4.utils;

import android.content.Context;
import android.database.Cursor;
import android.util.Log;

import com.appsmobiles.utn.tp4.Model.Producto;
import com.appsmobiles.utn.tp4.Model.ProductoRecord;
import com.appsmobiles.utn.tp4.Model.ProductosDb;

import java.util.ArrayList;

public class ProductoUtils {

    private Context context;

    public ProductoUtils(Context context) {
        this.context = context;
    }


    public ArrayList<ProductoRecord> getProductos() {

        ProductosDb db = new ProductosDb(this.context,"Productos",null,1);
        db.getReadableDatabase();

        ArrayList<ProductoRecord> resultList = new ArrayList<>();

        Cursor c = db.getAllProducts();
        while (c.moveToNext())
        {
            String id = c.getString(c.getColumnIndex("id"));
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
                ob.setId(id);
                ob.setNombre(nombre);
                ob.setCalorias(calorias);
                ob.setCategoria(categoria);
                ob.setDetails(details);
                ob.setGrasas(grasas);
                ob.setProteinas(proteinas);
                ob.setHc(hc);


                resultList.add(ob.toProductoRecord());
            }
            catch (Exception e) {
                Log.e("DBERROR", "Error " + e.toString());
            }

        }

        c.close();

        db.close();
        return resultList;
    }
}
