import java.util.*;
import java.io.*;

public class Main {

    static int[] dp = new int[1001];

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Arrays.fill(dp, -1);

        System.out.println(step(N));
    }

    // public static int step(int N) {
    //     if (dp[N] != -1) return dp[N];
    //     if (N == 1) return dp[N] = 1;
    //     if (N == 2) return dp[N] = 2;

    //     return dp[N] = (step(N - 1) + step(N - 2)) % 10007;
    // }

    public static int step(int N) {
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= N; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
        }

        return dp[N];
    }
}