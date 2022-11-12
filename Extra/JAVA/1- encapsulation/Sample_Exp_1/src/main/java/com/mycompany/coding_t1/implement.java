/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.coding_t1;

/**
 *
 * @author Ifcodey
 */
public class implement {

    private String name;
    private int maxSpeed;
    private float price;
    private int model;

    public int getModel() {
        return model;
    }

    public void setModel(int m) {
        if (m >= 2005) {
            model = m;
        } else {
            model = 0;
        }

    }

    public String getName() {
        return name;
    }

    public void setName(String n) {

    }

}
