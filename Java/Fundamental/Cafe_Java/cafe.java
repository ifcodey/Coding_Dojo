public class cafe {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)

        double mochaPrice = 3.5;
        double drip_coffee = 10;
        double latte = 15;
        double cappuccino = 20;

        // Customer name variables (add yours below)

        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;

        System.out.println("----------------------------");
        System.out.println(generalGreeting + customer1 + pendingMessage + " " +
                displayTotalMessage + drip_coffee);

        if (isReadyOrder1 == true) {
            System.out.println(generalGreeting + customer4 + readyMessage + " " +
                    displayTotalMessage + cappuccino);
        } else {
            System.out.println(generalGreeting + customer4 + pendingMessage + " " +
                    displayTotalMessage + cappuccino);
        }

        if (isReadyOrder2 == true) {
            System.out.println(generalGreeting + customer2 + readyMessage + " " +
                    displayTotalMessage + latte * 2 + " - 2 order Latte ");
        } else {
            System.out.println(generalGreeting + customer2 + pendingMessage + " " +
                    displayTotalMessage + latte * 2 + " - 2 order Latte ");
        }

        if (isReadyOrder1 == true) {
            System.out.println(generalGreeting + customer3 + readyMessage + " " +
                    displayTotalMessage + drip_coffee + " New Price  ");
        } else {
            System.out.println(generalGreeting + customer3 + pendingMessage + " " +
                    displayTotalMessage + drip_coffee + " New Price  ");
        }

        if (isReadyOrder2 == false) {
            System.out.println(generalGreeting + customer3 + readyMessage + " " +
                    displayTotalMessage + drip_coffee);
        } else {
            System.out.println(generalGreeting + customer3 + pendingMessage + " " +
                    displayTotalMessage + drip_coffee);
        }
        System.out.println("----------------------------");
    }
}
