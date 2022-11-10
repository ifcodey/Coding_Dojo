import java.util.*;

public class CafeUtil {
    
    public int getStreakGoal(int number) {
        int sum_drink = 0;
        for (int x = 0; x <= number;x++){
            sum_drink += 1 ;
        }
        return sum_drink;
    }

    public double getOrderTotal(double[] arr){
        float temp = 0;
        for (int xx = 0; xx < arr.length;xx++){
            temp += arr[xx];  
        }
        return temp;
    }

    public void displayMenu(ArrayList<String> menuList){
        for(int count = 0; count < menuList.size();count++){
            System.out.println(menuList.get(count));
        }
    }

    public String addCustomer(ArrayList<String> nameConsumer){
        System.out.println("Please Enter Your Name");
        String userName = System.console().readLine();
        System.out.printf("Hello , %s  There are %s" , userName , nameConsumer.size() + " people in ahead of you.");


        
        nameConsumer.add(userName);
        System.out.println(nameConsumer);
        return userName ;
    }
}
