#include <iostream>
#include <vector>
#include <tuple>
#include <queue>
using namespace std;

void getInput();
void initData();

int A, B, N;
vector<vector<tuple<long long, int, int>>> edges;
vector<long long> dists;
vector<long long> times;
priority_queue<tuple<long long, int, int>> pq;

int main() {
    getInput();
    initData();

    while(!pq.empty()) {
        long long dist;
        int start, bus;
        tie(dist, start, bus) = pq.top();
        pq.pop();

        if (-dist != dists[start]) continue;

        // cout << start << " " << -dist << " " << bus << endl;

        for (int i = 0; i < edges[start].size(); i++) {
            long long dist2;
            int end, bus2;
            tie(dist2, end, bus2) = edges[start][i];
            
            bool isSameBus = bus == bus2;
            
            int newDist = dists[start];
            if (!isSameBus) newDist += dist2;

            // cout << end << " " << dist2 << " " << bus2 << endl;
        
            if (newDist < dists[end] || (newDist == dists[end] && times[start] + 1 < times[end])) {
                dists[end] = newDist;
                times[end] = times[start] + 1;
                pq.push(make_tuple(-newDist, end, bus2));
            }
        }

        // cout << endl;
    }

    // for (int i = 0; i < N; i++) {
    //     cout << i << " " << dists[i] << "\n";
    // }
    // cout << "\n";
    
    if (dists[B - 1] == 1e18) cout << "-1 -1 \n";
    else cout << dists[B - 1] << " " << times[B - 1] << "\n";

    return 0;
}

void initData() {
    for (int i = 0; i < 1000; i++) {
        dists.push_back(1e18);
        times.push_back(1e18);
    }
    dists[A - 1] = 0;
    times[A - 1] = 0;
    pq.push(make_tuple(-0, A - 1, -1));
    return;
}

void getInput() {
    edges.resize(1000);
    cin >> A >> B >> N;
    int price, cnt, start, end;

    for (int i = 0; i < N; i++) {
        start = -1;
        cin >> price >> cnt;
    
        for (int j = 0; j < cnt; j++) {
            cin >> end;
            if (start != -1) edges[start].push_back(make_tuple(price, end - 1, i));
            start = end - 1;
        }
    }

    return;
}