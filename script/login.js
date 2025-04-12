

document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('account-number').value;
    const pin=document.getElementById('pin').value;
    // as the pin is working as a string so  i have to convert it into a integer number
    const convertedPin=parseInt(pin);
    if(accountNumber.length===11){
       if(convertedPin===1234){
        window.location.href='main.html';
       }
       else{
        alert('pin thik nai');
        
       }
    }
    else{
        alert('needs a valid account number')
    }
})