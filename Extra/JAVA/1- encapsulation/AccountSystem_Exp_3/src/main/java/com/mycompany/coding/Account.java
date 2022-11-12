/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.coding;

/**
 * @author Ifcodey
 */
public class Account {
    private int accountNo;
    private String name;
    private float amount;


    public void insert(int accountNo, String name, float amount) {
        this.accountNo = accountNo;
        this.name = name;
        this.amount = amount;
    }

    public void deposite(float addAmount) {
        this.amount = this.amount + addAmount;
        System.out.println(addAmount + " deposited");
    }

    public void withDraw(float pullAmount) {

        if (pullAmount > amount) {
            System.out.println("Insufficient Balance");
        } else {
            this.amount = this.amount - pullAmount;
            System.out.println(pullAmount + " withdrawn");
        }

    }

    public void checkBalance() {
        System.out.println("Balance is a :" + this.amount);
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNo= " + accountNo +
                ", name=' " + name + '\'' +
                ", amount= " + amount +
                '}';
    }

    public String getName() {
        return this.name;
    }

}
