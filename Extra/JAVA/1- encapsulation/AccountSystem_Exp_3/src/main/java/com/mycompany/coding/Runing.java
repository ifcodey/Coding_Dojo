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
        Account obj = new Account();
        //User one
        obj.insert(2568, "Ahmed", 3600);
        obj.deposite(100);
        obj.withDraw(200);
        System.out.println(obj.getName());
        obj.checkBalance();
        System.out.println("------------------");

        //User Two
        obj.insert(2526, "Zaki", 15200);
        obj.deposite(100);
        obj.withDraw(200);
        System.out.println(obj.getName());
        obj.checkBalance();
    }
}
