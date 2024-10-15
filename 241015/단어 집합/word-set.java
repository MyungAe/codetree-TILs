import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        boolean[] flag = new boolean[26];
        String str = br.readLine();

        while(!str.equals("end")) {
            st = new StringTokenizer(str);
            int size = st.countTokens();

            for (int i = 0; i < size; i++) {
                char c = st.nextToken().charAt(0);
                flag[c - 97] = true;
            }

            for (int i = 0; i < 26; i++) {
                if (flag[i]) sb.append((char) (i + 97) + " ");
            }

            sb.append("\n");
            str = br.readLine();
        }

        System.out.println(sb.toString());
    }
}