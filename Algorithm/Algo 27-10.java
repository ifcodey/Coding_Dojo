import java.util.ArrayList;
import java.util.Arrays;

public class test {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 1, 3, 4, 2 };
        ArrayList<Integer> newarr = new ArrayList<Integer>();
        boolean flag = false;
        newarr.add(arr[0]);
        for (int i = 0; i < arr.length; i++) {
            for (int x = 0; x < newarr.size(); x++) {
                if (arr[i] == newarr.get(x)) {
                    flag = true;
                }
            }
            if (!flag) {
                newarr.add(arr[i]);

            }
            flag = false;
        }

        for (int item : newarr) {
            System.out.println(item);
        }
    }
}
