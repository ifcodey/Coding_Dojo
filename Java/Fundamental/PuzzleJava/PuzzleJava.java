import java.util.*;

public class PuzzleJava {

    // --------------------------------------
    // ---------- first Task 1 --------------
    // --------------------------------------
    public ArrayList<Integer> getTenRolls(ArrayList<Integer> arr) {
    // create random object
    Random random = new Random();
    for (int x = 0; x < 10; x++) {
    // return generated number between 0 to 21
    arr.add(random.nextInt(21));
    }
    return arr;
    }

    // --------------------------------------
    // ---------- first Task 2 --------------
    // --------------------------------------
    public String getRandomLetter() {
    String alph = "q,w,e,r,t,y,u,i,o,p,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m";
    String[] arrAlph = alph.split("[,]");

    Random rand = new Random();
    int num = rand.nextInt(arrAlph.length);
    return arrAlph[num];

    }

    // --------------------------------------
    // ---------- first Task 3 --------------
    // --------------------------------------
    public String generatePassword() {
    String pass = "q,w,e,r,t,y,u,i,o,p,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m";
    String[] arrAlph = pass.split("[,]");
    String pw = "";
    Random rand = new Random();

    for (int x = 0; x < 8; x += 1) {

    int num = rand.nextInt(arrAlph.length);
    pw += arrAlph[num];
    }
    return pw;
    }







    // -------------------------------------------------------
    // ----------Other Way Solve a first Task 1 --------------
    // -------------------------------------------------------
    // public void sumArray(int[] arr, ArrayList<Integer> newArray) {
    // int sum = 0;
    // for (int i = 0; i < arr.length; i++) {
    // // clac a parameter data in array
    // sum += arr[i];
    // // find if there number more then 10 and then add to other array
    // if (arr[i] > 10) {
    // newArray.add(arr[i]);
    // }
    // }
    // // display clac a parameter data in array.
    // System.out.println(sum);
    // System.out.println(newArray);
    // }

}
