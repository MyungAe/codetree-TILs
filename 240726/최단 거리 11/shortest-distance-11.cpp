#include <iostream>
#include <tuple>
#include <vector>
#include <queue>
using namespace std;

void getInput();
void initData();

int N, M, A, B;
priority_queue<pair<int, int>> pq;
vector<vector<int>> edges;
vector<int> dists;
vector<int> paths;

int main() {
    getInput();
    initData();

    while(!pq.empty()) {
        int dist, start;
        tie(dist, start) = pq.top();
        pq.pop();

        if (-dist != dists[start]) continue;

        for (int i = 0; i < edges[start].size(); i++) {
            int end = i, dist2 = edges[start][end];
            int newDist = dists[start] + dist2;

            if (newDist < dists[end]) {
                dists[end] = newDist;
                paths[end] = start;
                pq.push(make_pair(-newDist, end));
            }
        }
    }

    cout << dists[A - 1] << "\n";

    int idx = A - 1;
    cout << idx + 1 << " ";

    while (idx != B - 1) {
        for (int i = 0; i < N; i++) {
            if (edges[i][idx] == 0) continue;
            if (dists[i] + edges[i][idx] == dists[idx]) {
                idx = i;
                break;
            }
        }

        cout << idx + 1 << " ";
    }

    return 0;
}

void initData() {
    for (int i = 0; i < N; i++) {
        dists.push_back(1e9);
        paths.push_back(-1);
    }
    dists[B - 1] = 0;
    pq.push(make_pair(-0, B - 1));
    return;
}

void getInput() {
    cin >> N >> M;
    vector<int> tmp(N, 1e9);
    for (int i = 0; i < N; i++) {
        edges.push_back(tmp);
    }
    
    int start, end, value;
    for (int i = 0; i < M; i++) {
        cin >> start >> end >> value;
        edges[start - 1][end - 1] = value;
        edges[end - 1][start - 1] = value;
    }
    cin >> A >> B;
    return;
}