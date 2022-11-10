import java.util.Random;
import java.util.*;

public class PuzzleTest {

    public static void main(String[] args) {
        // --------------------------------------
        // ---------- first Task 1 --------------
        // --------------------------------------

        PuzzleJava obj = new PuzzleJava();
        // // define Arraylist to be a (Parameter).
        ArrayList<Integer> arr = new ArrayList<Integer>();
        // // create random object and can send a (arrSender) as parameter.

        // // Random randMachine = new Random();
        // // int[] arrSender = { randMachine.nextInt(21) };
        // // randMachine.setSeed(1234567890);
        
        // // sort in Arraylist <= Objects.
        ArrayList<Integer> number = obj.getTenRolls(arr);

        System.out.printf("The Random Letter is equal a : %s", number);

        // --------------------------------------
        // ---------- first Task 2 --------------
        // --------------------------------------
        String rand = obj.getRandomLetter();
        System.out.println("\nThe Random Letter is : "+ rand);

        // --------------------------------------
        // ---------- first Task 3 --------------
        // --------------------------------------
        String password = obj.generatePassword();
        System.out.println("The Generate Password is : "+password);


        // -------------------------------------------------------
        // ----------Other Way Solve a first Task 1 --------------
        // -------------------------------------------------------
        // generating integer
        // int[] Arr = {randMachine.nextInt(21)};
        // obj.sumArray(Arr, arr);
    }
}
