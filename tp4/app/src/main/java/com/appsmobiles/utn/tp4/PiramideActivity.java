package com.appsmobiles.utn.tp4;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import com.appsmobiles.utn.tp4.Model.ProductoRecord;
import com.appsmobiles.utn.tp4.Model.ProductoRecordAdapter;
import com.appsmobiles.utn.tp4.Model.ProductoRecordAdapterName;
import com.appsmobiles.utn.tp4.utils.ProductoUtils;

import java.util.List;

public class PiramideActivity extends AppCompatActivity {

    private ProductoRecordAdapterName recordAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_piramide);
        ProductoUtils productoUtils = new ProductoUtils(this);
        List<ProductoRecord> productos = productoUtils.getProductos();

        recordAdapter= new ProductoRecordAdapterName(this, productos);
        final ListView recordsView = (ListView) findViewById(R.id.records_view);
        recordsView.setAdapter(recordAdapter);
        recordsView.setOnItemClickListener(new AdapterView.OnItemClickListener(){
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                ProductoRecord prod = recordAdapter.getItem(position);
                Toast.makeText(PiramideActivity.this,prod.categoria,Toast.LENGTH_SHORT).show();
            }
        });



    }




}
