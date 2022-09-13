class Users:

    def __init__(self, balance, name):
        self.balance = balance
        self.name = name

    def make_deposit(self, amount):
        self.balance += amount

    def make_withdrawal(self, amount):
        self.balance -= amount

    def display_user(self):
        print(f"The Name of User:{self.name} and \
balance is :{self.balance}")

    def transfer_money(self, User_2, amount):
        self.balance -= amount
        self.User_2 += amount


U1 = Users(150, "Marah")
U2 = Users(3000, "Mohammad")
U3 = Users(50000, "Semoin")

U1.make_deposit(100)
U1.make_deposit(200)
U1.make_deposit(150)
U1.make_withdrawal(500)
U1.display_user()

U2.make_deposit(100)
U2.make_deposit(200)
U2.make_withdrawal(500)
U2.make_withdrawal(500)
U2.display_user()


U3.make_deposit(1000)
U3.make_withdrawal(500)
U3.make_withdrawal(500)
U3.make_withdrawal(500)
U3.display_user()

U1.transfer_money(U3, 150)
