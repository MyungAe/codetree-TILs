#include <iostream>
#include <queue>
#include <vector>
#include <tuple>
using namespace std;

void getInput();
void initData();

int N, M, A, B;
vector<vector<pair<int,int>>> edges;
vector<int> dists, paths;
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
                paths[end] = start;
                pq.push(make_pair(-newDist, end));
            }
        }
    }

    cout << dists[B - 1] << "\n";

    int idx = B - 1;
    
    vector<int> route;
    route.push_back(idx + 1);

    while(idx != A - 1){
        idx = paths[idx];
        route.push_back(idx + 1);
    }
    
    for (int i = route.size() - 1; i > -1; i--) {
        cout << route[i]<< " ";
    }
    cout << "\n";

    return 0;
}

void initData() {
    for (int i = 0; i < N; i++) {
        dists.push_back(1e9);
        paths.push_back(-1);
    }
    dists[A - 1] = 0;
    pq.push(make_pair(-0, A - 1));
    return;
}

void getInput() {
    cin >> N >> M;
    edges.resize(N);
    int start, end, value;
    for (int i = 0; i < M; i++) {
        cin >> start >> end >> value;
        edges[start - 1].push_back(make_pair(value, end - 1));
        edges[end - 1].push_back(make_pair(value, start - 1));
    }
    cin >> A >> B;
    return;
}