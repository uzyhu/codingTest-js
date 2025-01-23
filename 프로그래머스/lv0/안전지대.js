function solution(board) {
    var answer = 0;
    if(board.length==1) {
       return board[0][0] == 0 ? 1 : 0;
    }
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if(board[i][j] == 1) {
                if(i-1 < 0 && j-1 < 0) {
                    board[i][j+1] = board[i][j+1] == 1 ? 1 : '*';
                    board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                    board[i+1][j+1] = board[i+1][j+1] == 1 ? 1 : '*';
                }
                else if(i-1 < 0 && j+1 >= board.length) {
                    board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                    board[i+1][j-1] = board[i+1][j-1] == 1 ? 1 : '*';
                    board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                    
                }
                else if(j-1 < 0 && i+1 >= board.length) {
                    board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                    board[i-1][j+1] = board[i-1][j+1] == 1 ? 1 : '*';
                    board[i][j+1] = board[i][j+1] == 1 ? 1 : '*';
                }
                else if(j+1 >= board.length && i+1 >= board.length) {
                    board[i-1][j-1] = board[i-1][j-1] == 1 ? 1 : '*';
                    board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                    board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                }
                else if(i-1 < 0) {
                    board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                    board[i][j+1] = board[i][j+1] == 1 ? 1 : '*';
                    board[i+1][j-1] = board[i+1][j-1] == 1 ? 1 : '*';
                    board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                    board[i+1][j+1] = board[i+1][j+1] == 1 ? 1 : '*';
                }
                else if(i+1 >= board.length) {
                    board[i-1][j-1] = board[i-1][j-1] == 1 ? 1 : '*';
                    board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                    board[i-1][j+1] = board[i-1][j+1] == 1 ? 1 : '*';
                    board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                    board[i][j+1] = board[i][j+1] == 1 ? 1 : '*';
                }
                else if(j-1 < 0) {
                    board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                    board[i-1][j+1] = board[i-1][j+1] == 1 ? 1 : '*';
                    board[i][j+1] = board[i][j+1] == 1 ? 1 : '*';
                    board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                    board[i+1][j+1] = board[i+1][j+1] == 1 ? 1 : '*';
                }
                else if(j+1 >= board.length) {
                    board[i-1][j-1] = board[i-1][j-1] == 1 ? 1 : '*';
                    board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                    board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                    board[i+1][j-1] = board[i+1][j-1] == 1 ? 1 : '*';
                    board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                }
                else {
                 board[i-1][j-1] = board[i-1][j-1] == 1 ? 1 : '*';
                board[i-1][j] = board[i-1][j] == 1 ? 1 : '*';
                board[i-1][j+1] = board[i-1][j+1] == 1 ? 1 : '*'; //첫째줄
                board[i][j-1] = board[i][j-1] == 1 ? 1 : '*';
                board[i][j+1] = board[i][j+1] == 1 ? 1 : '*'; //둘째줄
                board[i+1][j-1] = board[i+1][j-1] == 1 ? 1 : '*';
                board[i+1][j] = board[i+1][j] == 1 ? 1 : '*';
                board[i+1][j+1] = board[i+1][j+1] == 1 ? 1 : '*'; //셋째줄   
                }
            }
        }
    }
    board.forEach((a) => a.forEach((b) => answer += b == 0 ? 1 : 0));
    return answer;
}

//다른 사람의 풀이1

function solution(b) {
    const directions = [[0,0],[0,1],[0,-1],[1,1],[1,0],[1,-1],[-1,-1],[-1,0],[-1,1]]
    let bombSet = new Set();

    for(let i = 0; i < b.length; i++) {
        for(let j = 0; j < b[i].length; j++) {
            if(b[i][j] == 1) {
                directions.forEach(el => {
                    let [nextX, nextY] = el;
                    [nextX, nextY] = [i+nextX, j+nextY];
                    if(nextX >= 0 && nextX < b.length && nextY >= 0 && nextY < b[i].length) {
                        bombSet.add(nextX+' '+nextY);
                    }
                })
            }
        }
    }
    return b.length * b[0].length - bombSet.size;
}

//다른 사람의 풀이2
function solution(board) {

    for (let y = 0; y < board.length; y++)
        for (let x = 0; x < board[0].length; x++) {

            if (board[y][x] == 1) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (board[y + i]?.[x + j] === 0) 
                            board[y + i][x + j] = 2
                    }
                }
            }

        }

    return [...board.join()].filter(v => v == '0').length;

}