package com.appsmobiles.utn.tp4.Model;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.appsmobiles.utn.tp4.R;

import java.util.List;

public class ProductoRecordAdapterName extends BaseAdapter {

    private Context recordContext;
    private List<ProductoRecord> recordList;

    public ProductoRecordAdapterName(Context context, List<ProductoRecord> records) {
        recordList = records;
        recordContext = context;
    }


    @Override
    public int getCount() {
        return recordList.size();
    }
    @Override
    public ProductoRecord getItem(int i) {
        return recordList.get(i);
    }
    @Override
    public long getItemId(int i) {
        return i;
    }

    private static class RecordViewHolder {

        public TextView nameView;

    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        RecordViewHolder holder;

        if (view ==null){
            LayoutInflater recordInflater = (LayoutInflater)
                    recordContext.getSystemService(Activity.LAYOUT_INFLATER_SERVICE);
            view = recordInflater.inflate(R.layout.product_record_name, null);

            holder = new RecordViewHolder();
            holder.nameView = (TextView) view.findViewById(R.id.record_name);
            view.setTag(holder);

        }else {
            holder = (RecordViewHolder) view.getTag();
        }

        ProductoRecord record = (ProductoRecord) getItem(i);
        holder.nameView.setText(record.nombre);
        return view;
    }

}