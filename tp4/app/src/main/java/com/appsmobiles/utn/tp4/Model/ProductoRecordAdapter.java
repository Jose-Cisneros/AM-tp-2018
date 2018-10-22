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

public class ProductoRecordAdapter extends BaseAdapter {

    private Context recordContext;
    private List<ProductoRecord> recordList;

    public ProductoRecordAdapter(Context context, List<ProductoRecord> records) {
        recordList = records;
        recordContext = context;
    }


    @Override
    public int getCount() {
        return recordList.size();
    }
    @Override
    public Object getItem(int i) {
        return recordList.get(i);
    }
    @Override
    public long getItemId(int i) {
        return i;
    }

    private static class RecordViewHolder {

        public TextView nameView;
        public TextView calView;
        public TextView hcView;
        public TextView protView;
        public TextView cgView;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        RecordViewHolder holder;

        if (view ==null){
            LayoutInflater recordInflater = (LayoutInflater)
                    recordContext.getSystemService(Activity.LAYOUT_INFLATER_SERVICE);
            view = recordInflater.inflate(R.layout.product_record, null);

            holder = new RecordViewHolder();
            holder.nameView = (TextView) view.findViewById(R.id.record_name);
            holder.calView = (TextView) view.findViewById(R.id.record_cal);
            holder.hcView = (TextView) view.findViewById(R.id.record_hc);
            holder.protView = (TextView) view.findViewById(R.id.record_prot);
            holder.cgView = (TextView) view.findViewById(R.id.record_cg);
            view.setTag(holder);

        }else {
            holder = (RecordViewHolder) view.getTag();
        }

        ProductoRecord record = (ProductoRecord) getItem(i);
        holder.nameView.setText(record.nombre);
        holder.calView.setText(record.calorias);
        holder.hcView.setText(record.hc+"%");
        holder.protView.setText(record.proteinas+"%");
        holder.cgView.setText(record.grasas+"%");
        return view;
    }
}