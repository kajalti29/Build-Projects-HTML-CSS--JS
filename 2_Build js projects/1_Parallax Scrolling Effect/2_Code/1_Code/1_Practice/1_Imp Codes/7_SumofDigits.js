function sumOfDigits(num){
  let sum = 0;
  num = num.toString();
  for(let ch of num){
    sum += parseInt(ch);
  }
  return sum;
}
console.log(sumOfDigits(1234)); // 10
