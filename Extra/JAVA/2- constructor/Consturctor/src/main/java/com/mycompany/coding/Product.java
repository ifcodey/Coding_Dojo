/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.coding;

/**
 * @author Ifcodey
 */
public class Product {
    private String name;
    private String desc;
    private float price;
    private int quantity;
    private int discount;

    private String color;

    /*
    defualt Constructor - used when there no any constructor in class otherwise will give error in it not define.

    public Product() {

    }
    */

    //No-Arg Constructor
    public Product() {
        this.name = "No name";
        this.desc = "No description";
        this.price = 0.0f;
        this.quantity = 0;
        this.discount = 0;
    }

    //Parameterized Constructor
    public Product(String name, String desc, float price, int quantity, int discount) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }

    //Parameterized Constructor 2
    public Product(String name, String desc, float price, int quantity, int discount, String color) {
        //Add above constructor to reduce a code (call constructor inside other constructor)
        this(name, desc, price, quantity, discount);
        this.color = color;
    }



    //Parameterized Constructor 3
    public Product(String color) {
        this.color = color;
    }


    //Copy Constructor
    public Product(Product objSend) {
        this.name = objSend.name;
        this.desc = objSend.desc;
        this.price = objSend.price;
        this.quantity = objSend.quantity;
        this.discount = objSend.discount;
        color = objSend.color;
    }

    //Copy Constructor 2
    public Product(Product objSend, String color) {
        this(objSend.name , objSend.desc , objSend.price , objSend.quantity,objSend.discount);
        this.color = color;
    }

    //Getter and Setter
    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void display() {
        if (this.color != null) {
            System.out.printf(" Name : %s \n Description : %s \n Price : %s \n Quantity : %s \n Discount : %s\n Color : %s\n\n", name, desc, price, quantity, discount,color);
        } else {
            System.out.printf(" Name : %s \n Description : %s \n Price : %s \n Quantity : %s \n Discount : %s\n\n", name, desc, price, quantity, discount);
        }
    }


}
