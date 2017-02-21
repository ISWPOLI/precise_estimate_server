/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.entities;

import com.google.gson.Gson;

/**
 *
 * @author felipe
 */
public class Test {

    public String a;
    public boolean b;
    public String[] c;

    public Test() {
        this.c = new String[10];
    }

    public String toJSON() {
        Gson gson = new Gson();
        String json = gson.toJson(this);
        return json;
    }

}
