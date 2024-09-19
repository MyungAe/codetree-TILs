import java.util.*;
import java.io.*;

public class Main {
    static long[] dp = new long[1001];
    static final int mod = 1000000007;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        System.out.println(step(N));
    }

    public static long step(int N) {
        dp[0] = 1; dp[1] = 2;
        
        for (int i = 2; i <= N; i++) {
            dp[i] = (2 * dp[i - 1] + 3 * dp[i - 2]) % mod;
            for (int j = i - 3; j >= 0; j--) {
                dp[i] = (dp[i] + 2 * dp[j]) % mod;
            }
        }

        return dp[N];
    }
}