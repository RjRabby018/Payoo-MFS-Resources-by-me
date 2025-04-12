
document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount =document.getElementById('amount').value;
    // console.log(typeof amount);
    const convertedAmount=parseFloat(amount);
    const pin=document.getElementById('pin').value;
    const convertedPin=parseInt(pin);
    // let get the main balance
    const mainBalance=document.getElementById('main-balance').innerText;
    const convertedMainBalance=parseFloat(mainBalance);


    if(convertedPin===1234){
       const sum =convertedMainBalance+convertedAmount;
       document.getElementById('main-balance').innerText=sum;
    }
    else{
        console.log('pin thik kor age')
    }
})
