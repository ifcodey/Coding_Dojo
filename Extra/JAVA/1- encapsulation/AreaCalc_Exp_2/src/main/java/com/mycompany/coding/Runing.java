/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.coding;

/**
 *
 * @author Ifcodey
 */
public class Runing {

    public static void main(String[] args) {
        Operations obj = new Operations(), obj2 = new Operations();
        
        obj.setRadius(3);
        obj.setColor("White");
        
        System.out.printf("The Raduis is : %s and The Area is : %s \n",obj.getRadius(),obj.getArea());
        System.out.printf("The Raduis is : %s and The Circumference is : %s\n",obj.getRadius(),obj.getCircumference());
        System.out.printf("The Color of Area is : %s\n",obj.getColor());
        
    }
}
