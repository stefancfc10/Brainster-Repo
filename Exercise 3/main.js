// From the given 3 numbers , find the smallest and largest, and check
// are they prime.



const num3 =18;
const num1 = 13;
const num2 = 20;
let largest;
let smallest;
let isPrime = true;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}


console.log("The largest number is " + largest);


    if (num1 <= num2 && num1 <= num3)
        
        smallest = num1;

    else if (num2 <= num1 && num2 <= num3)
        
        smallest = num2;
 
    else
        
        smallest = num3;

        console.log("The smallest number is " + smallest);





if (smallest === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (smallest > 1) {

    
    for (let i = 2; i < smallest; i++) {
        if (smallest % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${smallest} is a prime number`);
    } else {
        console.log(`${smallest} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}

if (smallest === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (largest > 1) {

  
    for (let i = 2; i < largest; i++) {
        if (largest % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${largest} is a prime number`);
    } else {
        console.log(`${largest} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}
       