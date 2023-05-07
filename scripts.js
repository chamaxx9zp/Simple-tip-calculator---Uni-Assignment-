var tips = new Array();
var amount = new Array();

// Function
function tipCalculator(bill){
  var tip;
  if (bill<1000){
    tip = bill*0.20;
  }
  else if ( bill>= 1000 && bill<=1500){
    tip = bill*0.15;
  }
  else{
    tip = bill*0.10;
  }

  // store in Arrays
  tips.push(tip);
  amount.push(bill+tip);

  return tip;
}


// calling
console.log('1 - Tip '+tipCalculator(1230));
console.log('2 - Tip '+tipCalculator(982));
console.log('3 - Tip '+tipCalculator(2000));
