#include <iostream>
#include <vector>
using namespace std;

void findCoin(int y, int x);

int ans = 0;
vector<vector<int>> map;

int main() {
    int N;
    cin >> N;

    map.resize(N);

    int tmp;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cin >> tmp;
            map[i].push_back(tmp);
        }
    }

    for (int i = 0; i < N - 2; i++) {
        for (int j = 0; j < N - 2; j++) {
            findCoin(i, j);
        }
    }

    cout << ans;

    return 0;
}

void findCoin(int y, int x) {
    int cnt = 0;

    for (int i = y; i < y + 3; i++) {
        for (int j = x; j < x + 3; j++) {
            cnt += map[i][j];
        }
    }

    ans = max(ans, cnt);
}