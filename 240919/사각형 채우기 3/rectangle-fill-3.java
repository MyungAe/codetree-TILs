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

    public static int step(int N) {
        dp[0] = 1; dp[1] = 2;
        
        for (int i = 2; i <= N; i++) {
            dp[i] = 2 * dp[i - 1] + 3 * dp[i - 2];
            for (int j = i - 3; j >= 0; j--) {
                dp[i] += 2 * dp[j];
            }
            dp[i] %= 1000000007;
        }

        return dp[N];
    }
}