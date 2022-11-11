/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.coding_t1;

/**
 *
 * @author Ifcodey
 */
public class Coding_T1 {

    public static void main(String[] args) {
        implement obj = new implement();
        obj.setName("Tesla");
//        obj.name = "Tesla";

        obj.setName("KIA");
        obj.setModel(2005);
//        System.out.println(obj.name );

        System.out.println(obj.getModel());
        System.out.println(obj.getName());
    }
}
