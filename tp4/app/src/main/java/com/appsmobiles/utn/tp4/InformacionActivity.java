package com.appsmobiles.utn.tp4;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class InformacionActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_informacion);
    }

    public void info1(View view){
        Intent i = new Intent(this,WebViewActivity.class);
        i.putExtra("web","https://www.foodspring.es/tabla-calorica");
        startActivity(i);
    }

    public void info2(View view){
        Intent i = new Intent(this,WebViewActivity.class);
        i.putExtra("web","https://www.northshore.org/healthresources/encyclopedia/encyclopedia.aspx?DocumentHwid=ta3868&Lang=es-us");
        startActivity(i);
    }

    public void info3(View view){
        Intent i = new Intent(this,WebViewActivity.class);
        i.putExtra("web","https://www.tuasaude.com/es/alimentos-ricos-en-proteinas/");
        startActivity(i);
    }

    public void info4(View view){
        Intent i = new Intent(this,WebViewActivity.class);
        i.putExtra("web","https://www.tuasaude.com/es/alimentos-ricos-en-carbohidratos/");
        startActivity(i);
    }
}
