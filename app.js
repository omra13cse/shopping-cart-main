function updateProductNumber(product,price,isIncreasing){
    const caseInput = document.getElementById(product +"-number");
    let productNumber = caseInput.value;
    if(isIncreasing){
        /* caseInput .value*/ productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber >0){ 
       /* caseInput .value*/productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value =productNumber;
    // update case number
    const productTotal = document.getElementById( product +'-total');
    productTotal.innerText =productNumber *price;
    //calculate total
    calculateTotal();
     
}
  function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt (productInput.value);
    return productNumber;
 }
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('sub-total').innerText = totalPrice;

}
// phone handel increse decrese event

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true  );
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false)
})





// handel case Increse decrase event


document.getElementById("case-plus").addEventListener('click',function(){
    updateProductNumber( 'case',59,true  );
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
})