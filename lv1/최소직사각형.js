function solution(sizes) {
    let maxW, maxH = 0;
    for(let i of sizes) {
        maxW = maxW >= Math.max(i[0],i[1]) ? maxW : Math.max(i[0],i[1]);
        maxH = maxH >= Math.min(i[0],i[1]) ? maxH : Math.min(i[0],i[1]);
    }
    return maxW*maxH;
}