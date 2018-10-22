package com.appsmobiles.utn.tp4.Model;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.List;

public class ProductosDb extends SQLiteOpenHelper {

    public ProductosDb(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }


    @Override
    public void onCreate(SQLiteDatabase db) {

        db.execSQL("create table productos(id int primary key, nombre text, details text, categoria text,calorias real, hc real, proteinas real, grasas real )");

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }

    public Cursor getAllProducts(){
        return this.getReadableDatabase().rawQuery("select * from productos",null);


    }
}
