package com.appsmobiles.utn.tp4;

import android.database.Cursor;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ListView;

import com.appsmobiles.utn.tp4.Model.Producto;
import com.appsmobiles.utn.tp4.Model.ProductoRecord;
import com.appsmobiles.utn.tp4.Model.ProductoRecordAdapter;
import com.appsmobiles.utn.tp4.Model.ProductosDb;
import com.appsmobiles.utn.tp4.utils.ProductoUtils;

import java.util.ArrayList;
import java.util.List;

public class TableActivity extends AppCompatActivity {

    private ProductoRecordAdapter recordAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_table);
        ProductoUtils productoUtils = new ProductoUtils(this);
        List<ProductoRecord> productos = productoUtils.getProductos();

        recordAdapter= new ProductoRecordAdapter(this, productos);
        final ListView recordsView = (ListView) findViewById(R.id.records_view);
        recordsView.setAdapter(recordAdapter);
    }


}
