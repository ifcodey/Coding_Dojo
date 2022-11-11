/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.coding;

/**
 * @author Ifcodey
 */
public class Student {

    private int no;
    private String name;
    private String password;
    private static int minimalPass = 6;
    private boolean loggedIn;
    //at each object will start from 1.
    private int count_Without_Static = 1;

    //at each object will start from last value beacuse it is independent on object.
    private static int count = 1;
    private static String college = "IT";

    public Student(String name) {
        this.no = count;
        this.name = name;

        count++;
        count_Without_Static++;
    }


    @Override
    public String toString() {
        return "Student{" +
                "no= " + no +
                ", name=' " + name + '\'' +
                ", count_Without_Static= " + count_Without_Static +
                '}';
    }

    public static double triple(double x) {
        return x * x * x;
    }

    public Student(String name, String password) {
        this.no = count;
        this.name = name;
        this.password = password;
        count++;

    }

    public boolean logIn(int enteredNo, String enteredPass) {
        if (validatePassword(enteredPass) == true) {
            if (enteredNo == no && enteredPass.equals(password)) {
                System.out.printf("------------------------------------------------- \n");
                loggedIn = true;
                return true;
            } else {
                System.out.printf("------------------------------------------------- \n");
                System.out.printf("Error expect : The number or a password not match \n");
                return false;
            }
        } else {
            return false;
        }
    }

    public static boolean validatePassword(String password) {
        if (password.length() >= minimalPass) {
            return true;
        } else {
            System.out.printf("------------------------------------------------- \n");
            System.out.printf("Error expect : The lenght of password maybe < 6 \n");
            return false;
        }
    }

    //    @Override
    public String toString2() {
        return "Student{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", loggedIn=" + loggedIn +
                '}';
    }

}
