import java.util.*;
import java.io.*;

public class Main {

    static int N, A, D, max = 0;
    static int[] num, chooseNum;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        A = Integer.parseInt(st.nextToken());
        D = Integer.parseInt(st.nextToken());

        num = new int[N];
        chooseNum = new int[N];

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            num[i] = Integer.parseInt(st.nextToken());
        }

        int before = 0, size = 0;
        for (int i = 0; i < N; i++) {
            if (num[i] == A) {
                size++;
                before += A;
            }

            if (num[i] == before + D) {
                size++;
                before += D;
            }
        }

        System.out.println(size);
    }
}