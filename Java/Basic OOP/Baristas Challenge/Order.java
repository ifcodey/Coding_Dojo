import java.util.*;

public class Order {
    private String name;
    public double total;
    private boolean ready;
    private ArrayList<Item> array = new ArrayList<Item>();

    public Order() {
        this.name = "Guest";
        this.array = new ArrayList<Item>();
    }

    public Order(String name) {
        this.name = name;

    }

    public String getNameOrder() {
        return name;
    }

    public void setNameOrder(String name) {
        this.name = name;
    }

    public boolean getReady() {
        return ready;
    }

    public void setReady(Boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getArray() {
        return array;
    }

    public void setArray(ArrayList<Item> arrayParameter) {
        this.array = arrayParameter;
    }

    public void addItem(Item param) {
        this.array.add(param);
    }

    public String getStatusMessage(boolean ready) {
        if (this.ready) {
            return "Your order is ready";
        } else {
            return "Thank you for waiting. Your order will be ready soon .";
        }
    }

    public void dispaly() {
        System.out.printf("Customers is Name %s\n", this.name);
        double total = 0.0;

        for (Item count : array) {
            total += count.getPrice();
            System.out.printf("\nThe name is :%s and the price equal to :$ %s\n", count.getName(), count.getPrice());
        }
        System.out.println("Your Total : $" + total);
    }

}
