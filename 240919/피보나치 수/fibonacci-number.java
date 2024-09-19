import java.io.*;
import java.util.*;

public class Main {

    static int[] dp = new int[46];

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        Arrays.fill(dp, -1);

        // memoization
        // System.out.println(febo1(N));    

        // tabulation
        System.out.println(febo2(N));

        return;
    }

    public static int febo1(int N) {
        if (dp[N] != -1) return dp[N];
        if (N == 1 || N == 2) return 1;

        return febo1(N - 1) + febo1(N - 2);
    }

    public static int febo2(int N) {
        int[] dp = new int[46];
        dp[1] = 1;
        dp[2] = 1;

        for (int i = 3; i <= N; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[N];
    }

}