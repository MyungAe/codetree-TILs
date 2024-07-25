#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

void getInput();
void initData();

int N, M;
vector<int> dists;
vector<vector<pair<int, int>>> edges;
priority_queue<pair<int, int>> pq;

int main() {
    getInput();
    initData();

    while(!pq.empty()) {
        int dist, start;
        tie(dist, start) = pq.top();
        pq.pop();
        
        if (-dist != dists[start]) continue;

        for (int i = 0; i < edges[start].size(); i++) {
            int dist2, end;
            tie(dist2, end) = edges[start][i];
            int newDist = dists[start] + dist2;

            if (newDist < dists[end]) {
                dists[end] = newDist;
                pq.push(make_pair(-newDist, end));
            }
        }
    }

    int time = 0;
    for (int i = 0; i < N; i++) {
        if (dists[i] != 1e9) time = max(time, dists[i]);
    }   

    cout << time << "\n";

    return 0;
}

void getInput() {
    cin >> N >> M;
    edges.resize(N);

    int start, end, value;
    for (int i = 0; i < M; i++) {
        cin >> start >> end >> value;
        edges[end - 1].push_back(make_pair(value, start - 1));
    }

    return;
}

void initData() {
    for (int i = 0; i < N; i++) {
        dists.push_back(1e9);
    }
    dists[N - 1] = 0;

    pq.push(make_pair(-0, N - 1));
}