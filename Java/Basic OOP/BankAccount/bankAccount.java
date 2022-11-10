import java.util.*;

public class bankAccount {

    private double checkBalance;
    private double saveBalance;

    private static int numberOfAccounts = 0;
    private static double totalMoney = 0.0;
    private String accountNumber = "";

    public bankAccount(double checkBalance, double saveBalance) {
        this.checkBalance = checkBalance;
        this.saveBalance = saveBalance;
        numberOfAccounts++;
        System.out.println("This Account number is " + numberOfAccounts);
        System.out.println("Your Account number is " + accountNumber);
    }

    public double getCheckBalance() {
        return checkBalance;
    }

    public double getSaveBalance() {
        return saveBalance;
    }

    // put money in my account
    public void deposity(String typeOfBalance, double deposityBalanceMoney) {

        if (typeOfBalance == "saving") {
            double savingDesposity = getSaveBalance() + deposityBalanceMoney;
            totalMoney = totalMoney + deposityBalanceMoney;
            System.out.println("The Total Money is after Saving : " + totalMoney);

        } else if (typeOfBalance == "checking") {

            double checkingDesposity = getCheckBalance() + deposityBalanceMoney;
            totalMoney = totalMoney + deposityBalanceMoney;
            System.out.println("The Total Money is after Checking : " + totalMoney);
        }

    }

    // pull money in my account
    public void withDrawMoney(String typeOfBalance, double deposityBalanceMoney) {
        if (typeOfBalance == "checking") {
            if (totalMoney > deposityBalanceMoney) {
                double checkingDesposity = getCheckBalance() - deposityBalanceMoney;
                totalMoney -= deposityBalanceMoney;
                // print a totalMoney for check it.
                System.out.println("The Total Money is a :" + totalMoney);
            } else {
                System.out.println("Your Money is not enough :" + totalMoney);
            }
        }

        if (typeOfBalance == "saving") {
            if (totalMoney > deposityBalanceMoney) {
                double checkingDesposity = getCheckBalance() + deposityBalanceMoney;
                totalMoney -= deposityBalanceMoney;
                // print a totalMoney for check it.
                System.out.println("The Total Money is a :" + totalMoney);
            } else {
                System.out.println("Your Money is not enough :" + totalMoney);
            }
        }

    }

    public void totalMoneyFunction() {
        System.out.println(" Your Total Balance is equal :" + totalMoney);
    }

    private String accountNumber() {
        String num = "0123456789";
        String randNumber = "";
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            char number = num.charAt(rand.nextInt(10));
            randNumber += number;
        }
        accountNumber = randNumber;
        return randNumber;
    }

}
