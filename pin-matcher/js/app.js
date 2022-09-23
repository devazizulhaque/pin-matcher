function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    // console.log(number);
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

var pinSuccessMessage = document.getElementById('pin-success');
var pinFailureMessage = document.getElementById('pin-failure');
pinSuccessMessage.style.display = 'none';
pinFailureMessage.style.display = 'none';
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedPinField = document.getElementById('typed-numbers');
    const typedNumber = typedPinField.value;
    if(currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        let tryTime = document.getElementById('try-left').innerText;
        tryTime = parseInt(tryTime);
        if(tryTime > 0){
            tryTime--;
            document.getElementById('try-left').innerText = tryTime;
        }
        else{
            document.getElementById('verify-pin').disabled = true;
        }
    }
})