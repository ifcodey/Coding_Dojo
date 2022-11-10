import java.util.*;

public class functionTry {
    public void trycheck() {
        ArrayList<Object> myList = new ArrayList<Object>();
        try {
            myList.add("13");
            myList.add("hello world");
            myList.add(48);
            myList.add("Goodbye World");
            System.out.print(myList.size());
        } catch (Exception e) {
            for (int i = 0; i < myList.size(); i++) {
                Integer castedValue = (Integer) myList.get(i);
            }
        }
    }
}
