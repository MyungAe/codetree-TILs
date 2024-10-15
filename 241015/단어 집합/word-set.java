import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        HashSet<String> set = new HashSet<String>();
        String str = br.readLine();

        while(!str.equals("end")) {
            st = new StringTokenizer(str);
            int size = st.countTokens();

            for (int i = 0; i < size; i++) {
                String s = st.nextToken();
                set.add(s);
            }

            for (String s : set) {
                sb.append(s + " ");
            }

            sb.append("\n");
            str = br.readLine();
        }

        System.out.println(sb.toString());
    }
}