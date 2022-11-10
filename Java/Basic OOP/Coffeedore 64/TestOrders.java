import java.util.*;

public class TestOrders {
    /**
     * @param args
     */
    public static void main(String[] args) {

        System.out.println("**************************");
        CoffeeKiosk kiosk = new CoffeeKiosk();
        kiosk.addMenuItem("Tea", 5.9);
        kiosk.addMenuItem("Milk", 7.2);
        kiosk.addMenuItem("XL", 8.9);
        kiosk.addMenuItem("Blue", 15.9);
        kiosk.addMenuItem("latte", 25.9);
        kiosk.newOrder();

    }

}
