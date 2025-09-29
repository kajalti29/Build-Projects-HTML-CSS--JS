function maxMin(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return {max, min};
}

console.log(maxMin([4,9,1,7]));
