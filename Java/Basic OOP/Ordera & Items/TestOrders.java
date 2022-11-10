import java.util.*;

public class TestOrders {
    /**
     * @param args
     */
    public static void main(String[] args) {

        // Menu items
        Item item_1 = new Item();
        Item item_2 = new Item();
        Item item_3 = new Item();
        Item item_4 = new Item();

        item_1.name = "mocha";
        item_2.name = "latte";
        item_3.name = "drip coffee";
        item_4.name = "capuccino";

        item_1.price = 10;
        item_2.price = 12;
        item_3.price = 14;
        item_4.price = 8;

        // Order variables -- order1, order2 etc.
        Order order_1 = new Order();
        Order order_2 = new Order();
        Order order_3 = new Order();
        Order order_4 = new Order();

        order_1.name = "Cindhuri";
        order_2.name = "Jimmy";
        order_3.name = "Noah";
        order_4.name = "Sam";

        // Application Simulations
        // order 1
        // System.out.printf("The order 1 is a : %s", order_1.name);
        // System.out.printf("\nThe order 1 is total : %s\n", order_1.total);

        // order 2
        order_2.items.add(item_1);
        order_2.total += item_1.price;

        // order 3
        order_3.items.add(item_4);
        order_3.total += item_4.price;

        // order 4
        order_4.items.add(item_2);
        order_4.total += item_2.price;
        order_4.ready = true;

        order_1.ready = true;

        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order_1.name);
        System.out.printf("Total: %s\n", order_1.total);

        System.out.printf("\nName: %s\n", order_2.name);
        System.out.printf("Total: %s\n", order_2.total);
        System.out.printf("Ready: %s\n", order_2.ready);

        System.out.printf("\nName: %s\n", order_3.name);
        System.out.printf("Total: %s\n", order_3.total);
        System.out.printf("Ready: %s\n", order_3.ready);

        System.out.printf("\nName: %s\n", order_4.name);
        System.out.printf("Total: %s\n", order_4.total);
        System.out.printf("Ready: %s\n", order_4.ready);

        System.out.printf("Name: %s\n", order_1.name);
        System.out.printf("Total: %s\n", order_1.ready);

        order_4.items.add(item_2);
        order_4.items.add(item_2);
        order_4.total += item_2.price * 2;
        order_2.ready = true;

        System.out.println("New Price For Order4 so total is: " + order_4.total + " Order4 is 2 " + item_2.name);
        System.out.println("Order2 for: " + order_2.name + " and the order is ready ? " + order_2.ready);
    }

}
