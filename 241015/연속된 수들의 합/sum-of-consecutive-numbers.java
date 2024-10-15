import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int start = 1, end = 1;
        int ans = 0;

        while(start <= N) {
            int cnt = sum(start, end);
            if (cnt == N) ans++;

            if (cnt > N) start++;
            else end++;
        }

        System.out.println(ans);
    }

    public static int sum(int start, int end){ 
        int tmp = 0;
        for (int i = start; i <= end; i++) {
            tmp += i;
        }
        return tmp;
    }
}