function oddEven(n){
    if(n % 2 ===0)
        return "Even";
    else
        return "Odd";
}

// User se input lena
let userInput = prompt("Enter a number");


// prompt se jo value aati hai wo string hoti hai, isliye number me convert karenge
let number = parseInt(userInput);

console.log(oddEven(number));

//ye work nhi kr rha hai
