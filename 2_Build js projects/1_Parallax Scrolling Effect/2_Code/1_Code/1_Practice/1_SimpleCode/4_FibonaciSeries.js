function fibonacci(n){
  let a=0, b=1, series=[0];
  if(n>1) series.push(1);
  for(let i=2;i<n;i++){
    let c = a + b;
    series.push(c);
    a = b;
    b = c;
  }
  return series;
}
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
