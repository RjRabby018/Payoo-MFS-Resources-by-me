document.getElementById('bd-btn').addEventListener('click',function(){
    document.getElementById('bd').style.display='block';
    document.getElementById('usa').style.display='none';

})
document.getElementById('usa-btn').addEventListener('click',function(){
    document.getElementById('bd').style.display='none';
    document.getElementById('usa').style.display='block';

})
// declareing a function
// function addTheValueById(id){
//     const value =document.getElementById(id).value;
//     const convertedValue=parseInt(value);
//     return convertedValue;
// }