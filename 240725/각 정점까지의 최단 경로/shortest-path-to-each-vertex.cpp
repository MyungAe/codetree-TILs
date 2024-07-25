#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

void getInput();
void initData();

int N, M, K;
priority_queue<pair<int,int>> pq;
vector<vector<pair<int, int>>> edge;
vector<int> dists;

int main() {
    getInput();
    initData();

    while(!pq.empty()) {
        int dist, start;
        tie(dist, start) = pq.top();
        pq.pop();

        if (-dist != dists[start]) continue;

        for (int i = 0; i < edge[start].size(); i++) {
            int dist2, end;
            tie(dist2, end) = edge[start][i];
            int new_dist = dists[start] + dist2;

            if (new_dist < dists[end]) {
                dists[end] = new_dist;
                pq.push(make_pair(-new_dist, end));
            }
        }
    }

    for (int i = 0; i < N; i++) {
        if (dists[i] == 1e9) cout << -1 << "\n";
        else cout << dists[i] << "\n";
    }
    
    return 0;
}

void initData() {
    for (int i = 0; i < N; i++) {
        dists.push_back(1e9);
    }
    dists[K - 1] = 0;
    pq.push(make_pair(-0, K - 1));
}

void getInput() {
    cin >> N >> M >> K;
    edge.resize(N);

    int start, end, value;
    for (int i = 0; i < M; i++) {
        cin >> start >> end >> value;
        edge[start - 1].push_back(make_pair(value, end - 1));
    }

    return;
}