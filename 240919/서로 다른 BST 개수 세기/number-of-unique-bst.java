import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        System.out.println(step(N));
    }

    public static int step(int N) {
        int[] dp = new int[20];
        dp[1] = 1; dp[2] = 2; dp[3] = 5;

        for (int i = 4; i <= N; i++) {
            dp[i] = 2 * (dp[i - 1] + dp[i - 2]);
        }

        return dp[N];
    }
}