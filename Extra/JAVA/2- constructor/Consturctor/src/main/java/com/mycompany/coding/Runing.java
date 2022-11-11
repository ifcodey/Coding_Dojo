/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.coding;

/**
 * @author Ifcodey
 */
public class Runing {

    public static void main(String[] args) {
        Product obj = new Product();
        obj.display();

        Product objNew = new Product("PC","Gaming",4500,1,15);
        objNew.display();

        Product objAdv = new Product("PC","Gaming",5500,1,15,"red");
        objAdv.display();

        objAdv.setPrice(6500);
        Product objCopy = new Product(objAdv,"blue");
        objCopy.display();

    }
}