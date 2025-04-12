document.getElementById('cashout-btn').addEventListener('click',function(){
    const pin=document.getElementById('cashout-pin').value;
    const convertedPin=parseInt(pin);
    const cashoutAmount=document.getElementById('cashout-amount').value;
    const convertedCashoutAmount=parseFloat(cashoutAmount);
    const mainBalance=document.getElementById('main-balance').innerText;
    const convertedMainBalance=parseFloat(mainBalance);
    if(convertedPin===1234){
       const substraction=convertedMainBalance-convertedCashoutAmount;
       document.getElementById('main-balance').innerText=substraction;
    }
    else{
        alert('give me the correct pin number')
    }
})