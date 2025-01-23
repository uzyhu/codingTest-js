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