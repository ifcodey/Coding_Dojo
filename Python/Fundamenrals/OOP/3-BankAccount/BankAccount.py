
class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):

        if self.balance - amount > 0:  # if still there money in account after get some amount of money from it
            # substracting a money amount from account beacuse still have a money in wallet
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            if self.balance > 5:
                self.balance -= 5  # substracting a 5$ from
        return self

        # ------------------------
        # Solve by other way
        # self.balance -=amount
        # if self.balance <= amount:
        #     self.balance-=5
        #     print("Insufficient funds: Charging a $5 fee")
        # return self
        # ------------------------

    def display_account_info(self):
        print("Account", self.balance)
        return self

    def yield_interest(self):
        if self.balance >= 1:
            self.balance -= self.balance*self.int_rat  # (-) for substraction a interest of money from my account balance
            return self


Acc_1 = BankAccount(0.05, 0)
Acc_2 = BankAccount(0.04, 200)

Acc_1.deposit(20).deposit(10).deposit(20).withdraw(100).display_account_info()
Acc_2.deposit(30).deposit(40).withdraw(10).withdraw(20).withdraw(15).withdraw(15).display_account_info()
