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
    //     if (N == 0 || N == 2 || N == 3) return dp[N] = 1;
    //     if (N == 1) return dp[N] = 0;

    //     return dp[N] = (step(N - 2) + step(N - 3)) % 10007;
    // }

    public static int step(int N) {
        dp[0] = dp[2] = dp[3] = 1;
        dp[1] = 0;

        for (int i = 4; i <= N; i++) {
            dp[i] = (dp[i - 2] + dp[i - 3]) % 10007;
        }

        return dp[N];
    }
}