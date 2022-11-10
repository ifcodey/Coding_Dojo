import java.util.HashMap;
import java.util.Set;

public class Hashing {

    public void Hashers() {

        HashMap<String, String> maper = new HashMap<String, String>();
        maper.put("Alnsar_Song", "baby");
        maper.put("Aswarm_Song", "war");
        maper.put("Azdeen_Song", "child");
        maper.put("shoof_Song", "shoof");

        System.out.println(maper.get("Alnsar_Song"));
        
        Set<String> keys = maper.keySet();
        for (String key : keys) {
            System.out.print(key + " - ");
            System.out.print(maper.get(key) + " | ");
        }

        // other way to display a items:
        // for(String key : maper.keySet()){
        //     System.out.print( maper.values() + " " + maper.get(key));
        // }

    }

}


// String i:song.keySet())
// {
// System.out.println("Track: " + i + " Lyrics: " + song.get(i));