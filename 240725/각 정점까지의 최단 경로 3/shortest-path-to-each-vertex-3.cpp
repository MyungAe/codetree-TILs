#include <iostream>
#include <vector>
#include <limits>
#include <queue>
using namespace std;

void getInput();
void initData();

int N, M;
priority_queue<int, vector<int>, greater<int>> pq;
vector<vector<vector<int>>> edges;
vector<int> dists;


const int MAX_VALUE = numeric_limits<int>::max();

int main() {
    getInput();
    initData();

    while(!pq.empty()) {
        int s = pq.top();
        pq.pop();

        for (int i = 0; i < edges[s].size(); i++) {
            vector<int> tmp = edges[s][i];
            int next = tmp[0], value = tmp[1];
            
            if (dists[s] + value < dists[next]) {
                dists[next] = dists[s] + value;
                pq.push(next);
            }
        }
    }


    for (int i = 1; i < N; i++) {
        if (dists[i] == MAX_VALUE) cout << -1 << "\n";
        else cout << dists[i] << "\n";
    }
    
    return 0;
}

void initData() {
    dists.resize(N);
    for (int i = 0; i < N; i++) 
        dists[i] = MAX_VALUE;

    dists[0] = 0;
    pq.push(0);
    
    return;
}

void getInput() {
    cin >> N >> M;
    edges.resize(N);

    int start, end, value;
    for (int i = 0; i < M; i++) {
        cin >> start >> end >> value;
        edges[start - 1].push_back({end - 1, value});
    }

    return;
}