// Used Knapsack algorithm
const numberOfGiftOptions = (x, y, z, w) => {
    let cache = new Array(w + 1).fill(0);
    
    cache[0] = 1;
    let p = [x, y, z];
    for(let i = 0; i < 3; i++) {
        for(let j = 1; j <= w; j++) {
            if(j >= p[i]) {
                cache[j] += cache[j - p[i]];
            }
        }
    }
    return cache[w];
}

console.log(numberOfGiftOptions(10, 25, 15, 40));


