import java.util.*;

public class CoffeeKiosk {
    public ArrayList<Order> orders = new ArrayList<Order>();
    public ArrayList<Item> menu = new ArrayList<Item>();

    public CoffeeKiosk() {
        this.orders = new ArrayList<Order>();
        this.menu = new ArrayList<Item>();
    }

    public void addMenuItem(String name, double price) {
        // The addMenuItem method should create a new item object with the given name
        // and price.
        Item objItem = new Item(name, price);

        // Add the new Item object to the menu items array.
        this.menu.add(objItem);

        // The new menu item itself will also need to be assigned an index property. The
        // value should be its position, its index, in the menu array.
        objItem.setIndex(menu.indexOf(objItem));
    }

    public void displayMenu() {
        for (Item x : this.menu) {
            System.out.println("The index is :" + x.getIndex() + " The name is a : " + x.getName()
                    + " The price is a : " + x.getPrice());
        }
    }

    public void newOrder() {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        // Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
        Order order_1 = new Order(name);
        this.orders.add(order_1);
        this.displayMenu();

        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items
        while (!itemNumber.equals("q")) {
            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
            int itemIdex = Integer.parseInt(itemNumber);
            Item yoursOrderInput = this.menu.get(itemIdex);

            order_1.addItem(yoursOrderInput);
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        order_1.dispaly();

        // After you have collected their order, print the order details
        // as the example below. You may use the order's display method.

    }

}