/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.coding;

import java.sql.SQLOutput;

/**
 * @author Ifcodey
 */
public class Runing {

    public static void main(String[] args) {
//        Student news1 = new Student("Ahmed");
//        Student news2 = new Student("Ali");
//        Student news3 = new Student("Mohammad");

        //Without Static get many of space in momery if there many object.
//        System.out.println(news.college);

        //With Static get less space in momery just get one time in momery space.
//        System.out.println(news1.toString());
//        System.out.println(news2.toString());
//        System.out.println(news3.toString());


//        ------------------------------------
//        System.out.println("The Triple is :" + Student.triple(5));
        Student news1 = new Student("Ahmed", "123456");
        Student news2 = new Student("Ali", "12345");
        Student news3 = new Student("Mohammad", "123456");

        System.out.println(news1.logIn(1, "123456"));
        System.out.println(news1.toString2() + "\n");

        System.out.println(news2.logIn(2, "12345"));
        System.out.println(news2.toString2() + "\n");

        System.out.println(news3.logIn(3, "123450"));
        System.out.println(news3.toString2() + "\n");


    }
}