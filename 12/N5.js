let number = 529;
let quantity = 1;
while (number > 9)
  {
    number  = Math.floor(number/10);
    quantity += 1;

  }
console.log(quantity);