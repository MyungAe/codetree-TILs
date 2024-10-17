import java.util.*;
import java.io.*;

public class Main {
    static int N, M, ans = 0;
    static int[] parents;
    static ArrayList<Edge> edges = new ArrayList<Edge>();

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        make();

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int f = Integer.parseInt(st.nextToken()) - 1;
            int t = Integer.parseInt(st.nextToken()) - 1;
            int w = Integer.parseInt(st.nextToken());
            edges.add(new Edge(f, t, w));
        }

        Collections.sort(edges);

        for (int i = 0; i < edges.size(); i++) {
            Edge e = edges.get(i);

            if (find(e.f) != find(e.t)) {
                union(e.f, e.t);
                ans += e.w;
            }
        }

        System.out.println(ans);

    }

    static class Edge implements Comparable<Edge> {
        int f, t, w;

        public Edge(int f, int t, int w) {
            this.f = f;
            this.t = t;
            this.w = w;
        }

        @Override
        public int compareTo(Edge e) {
            return Integer.compare(this.w, e.w);
        }
    }

    public static void make() {
        parents = new int[N];
        for (int i = 0; i < N; i++) {
            parents[i] = i;
        }
    }

    public static int find(int a){
        if (a == parents[a]) return a;
        return parents[a] = find(parents[a]);
    }

    public static boolean union(int a, int b) {
        int aRoot = find(a);
        int bRoot = find(b);

        if (aRoot == bRoot) return false;

        parents[bRoot] = aRoot;
        return true;
    }
}