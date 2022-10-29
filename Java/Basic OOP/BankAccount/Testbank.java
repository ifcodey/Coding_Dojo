import java.util.*;

public class Testbank {
    public static void main(String[] args) {

        System.out.println("*********** Your Acount Number is ***********");
        bankAccount bank = new bankAccount(50, 120);

        System.out.println("*********** Your Acount Number is ***********");
        bankAccount bank1 = new bankAccount(152, 165.5);

        System.out.println("*********** Your Balnce After Deposit ***********");
        bank.deposity("saving", 965.2);

        System.out.println("*********** Your Balnce After Deposit ***********");
        bank1.deposity("saving", 965.2);

        System.out.println("*********** Your Balnce After DrawMoney ***********");
        bank.withDrawMoney("saving", 655);
        bank.totalMoneyFunction();
    }
}
