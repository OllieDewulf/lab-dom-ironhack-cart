// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(Number(price.innerText), quantity.value);
  let subtotal = price.innerText * quantity.value;
  console.log("here is the subtotal", subtotal);
  product.querySelector(".subtotal").textContent =  ("$" + subtotal);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
  totalPrice += updateSubtotal(allProducts[i]);
  }
  console.log(totalPrice);
  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerHTML = totalPrice;
  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.closest('.product');
  if (product) {
    product.remove();
  }
  
  //... your code goes here
}
window.addEventListener('load', () => {
  const removeButton = document.getElementsByClassName('btn-remove');
  for (let i = 0 ; i < removeButton.length; i++){
  console.log(removeButton[i])
  removeButton[i].addEventListener('click', removeProduct);
  
  }
  //... your code goes here
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
