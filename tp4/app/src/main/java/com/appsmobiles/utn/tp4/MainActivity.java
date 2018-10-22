package com.appsmobiles.utn.tp4;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void punto1(View view){


        Intent intent = new Intent(this,TableActivity.class);
        startActivity(intent);
    }


    public void punto2(View view){

        Intent intent = new Intent(this,PiramideActivity.class);
        startActivity(intent);
    }



    public void punto3(View view){


        Intent intent = new Intent(this,InformacionActivity.class);
        startActivity(intent);
    }
}
