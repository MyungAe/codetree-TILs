import java.util.*;
import java.io.*;

public class Main {
    static int N, M;
    static int[] coin, dp;
    static StringTokenizer st;
    static BufferedReader br;

    public static void main(String[] args) throws Exception {
        init();

        for (int i = 1; i <= M; i++) {
            for (int j = 1; j <= N; j++) {
                if (i >= coin[j]) {
                    dp[i] = Math.min(dp[i], dp[i - coin[j]] + 1);
                }
            }
        }

        // System.out.println(Arrays.toString(dp));

        int ans = dp[M];
        if (ans == Integer.MAX_VALUE) System.out.println(-1);
        else System.out.println(ans);
    }

    public static void init() throws Exception {
        br = new BufferedReader(new InputStreamReader(System.in));
        st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        coin = new int[] {0, 1, 4, 5};
        dp = new int[M + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
    }
}