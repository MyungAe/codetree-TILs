import java.util.*;
import java.io.*;

public class Main {
    static int N;
    static StringBuilder sb = new StringBuilder();
    static int[] nums;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        nums = new int[N];
        
        Permutation(0, 1);

        System.out.println(sb.toString());
    }

    public static void Permutation(int idx, int t) {
        if (idx == N) {
            sb.append(nums[0] + "-" + nums[1] + "-" + nums[2] + "\n");
            return;
        }

        for (int i = t; i <= 6; i++) {
            nums[idx] = i;
            Permutation(idx + 1, i);
        }
    }
}