function countVowels(str){
    let count = 0;

    for(let ch of str){
        if("auiou".includes(ch))
            count++;
    }
    return count;
}

console.log(countVowels("javascript"));
