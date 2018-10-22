package com.appsmobiles.utn.tp4;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewActivity extends AppCompatActivity {

    WebView wv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        wv = (WebView)findViewById(R.id.wv);

        String URL = getIntent().getStringExtra("web");
        wv.setWebViewClient(new WebViewClient());
        wv.loadUrl(URL);
    }

}
