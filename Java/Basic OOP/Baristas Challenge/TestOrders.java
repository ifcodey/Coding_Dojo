import java.util.*;

public class TestOrders {
    /**
     * @param args
     */
    public static void main(String[] args) {

        // Order Objects
        Order order_1 = new Order();
        Order order_2 = new Order();

        Order orders_1 = new Order("Ahmed");
        Order orders_2 = new Order("Omar");
        Order orders_3 = new Order("Mojahid");

        // Items Objects
        Item item1 = new Item("latte", 2.6);
        Item item2 = new Item("coffe", 5);

        System.out.println(order_1.getNameOrder());
        System.out.println(order_2.getNameOrder());

        orders_1.addItem(item1);
        orders_1.addItem(item2);

        orders_2.addItem(item1);
        orders_2.addItem(item2);

        orders_3.addItem(item1);
        orders_3.addItem(item2);

        orders_3.dispaly();

        System.out.println(orders_2.getStatusMessage(true));
        System.out.println("---------------------");
        System.out.println(orders_2.getStatusMessage(orders_2.getReady()));

    }

}
