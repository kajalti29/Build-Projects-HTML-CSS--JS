function charFrequency(str){
  let freq = {};
  for(let ch of str){
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("apple")); // {a:1, p:2, l:1, e:1}
