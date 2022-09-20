class BankAccount:
    def init(self, int_rate, balance):
        self.int_rate=int_rate
        self.balance=balance

    def deposit(self, amount):
        self.balance+=amount
        return self
    def withdraw(self,amount):
        if self.balance - amount > 0:
            self.balance -= amount
        else:
            print(f'Insufficient funds: Charging a $5 fee {self.balance}')
        return self
    def display_account_info(self):
        print("int_rate",self.int_rate,"balnce is",self.balance)
        return self

    def yield_interest(self):
        self.balance +=self.int_rate * self.balance
        return self

class User:
    def init(self,name,email,balnce):
        self.name=name
        self.email=email
        self.account_balnce=balnce

    def make_withdrawal(self):
        self.account= BankAccount(int_rate=0.02, balance=self.account_balnce)
        return self

    def make_deposits(self):
        self.account1 = BankAccount(int_rate=0.02, balance=self.account_balnce)
        return self

    def display_user_balance(self):
        self.account.deposit(200)
        self.account1.withdraw(50)
        self.account.yield_interest()
        print("name",self.name,"email",self.email,"AcountBalnceAfterDeposit",self.account.balance,"AcountBalanceAfterWithdraw",self.account1.balance)
        return self

u1= User('ahmad','ahmad@example.com',250)



u1.make_deposits().make_withdrawal().display_user_balance()