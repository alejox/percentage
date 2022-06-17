function priceWithDiscount (price, discount){
  const percentageWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentageWithDiscount)/100;
  return priceWithDiscount
}


function getDiscount (){
  const inputPrice = document.getElementById('price');
  const price = inputPrice.value;
  const inputDiscount = document.getElementById('discount');
  const discount = inputDiscount.value;

  const priceDiscount = priceWithDiscount(price, discount);
  
  const resultP = document.getElementById('resultPrice');
  resultP.innerText = `El precio con descuento es $${priceDiscount} USD` 
}



