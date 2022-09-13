
class Users:

    def __init__(self, name, email,balance = 0):
        self.balance = 0
        self.name = name
        self.email = email
        self.balance = balance

    def make_deposit(self, amount):
        self.balance += amount
        return self

    def make_withdrawal(self, amount):
        self.balance -= amount
        return self

    def display_user(self):
        print(f"Name:({self.name}) , \
balance:({self.balance}) , Email:({self.email})")
        return self

    def transfer_money(self, User_2, amount):
        self.balance -= amount
        User_2.balance += amount
        return self


U1 = Users("Marah","Marah@gmail.com",150)
U2 = Users("Mohammad","Mohammad1990s@gmail.com",3000)
U3 = Users("Semoin","Semoinba1990s@gmail.com",5000)

U1.make_deposit(100).make_deposit(200).make_deposit(150).make_withdrawal(500).display_user()
U2.make_deposit(100).make_deposit(200).make_withdrawal(500).make_withdrawal(500).display_user()
U3.make_deposit(1000).make_withdrawal(500).make_withdrawal(500).make_withdrawal(500).display_user().transfer_money(U1, 150).display_user()

