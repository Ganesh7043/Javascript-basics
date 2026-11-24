// function show(){
//     alert('Button is clicked !!!')
// }
// var head=document.getElementById('head1'); //color to heading tag
// head.addEventListener('mouseover',()=>{
//     head.style.color='darkgreen';
// })

// function leave(){
//     head.style.color='black';
// }
// function display(eve){
//     console.log(eve.target.value);
    
// }
var text=document.getElementById('text');
function focusn(){
    text.style.backgroundColor='lightblue';
}
function blurn(){
    text.style.backgroundColor='white';
}
function submitted(){
    alert('The form is submitted successfully');
}
// Regular Expression
let email=document.getElementById('email');
let error=document.getElementById('error');
let regex=/^([a-zA-Z0-9\.-_#]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
// function validate(){
//     if(regex.test(email.value)){

//         error.textContent='Email is valid';
//         error.style.color='green';
//         return true;
//     } else {
//         error.textContent='Email is invalid';
//         error.style.color='red';
//         return false;
//     }
// }

function verify(){
    let num=document.getElementById('num');
    let errmsg=document.getElementById('errmsg');
    try {
        let x=num.value;
        if(x<5) throw 'Number is too low'
        if(x>10) throw 'Number is too high'

    } catch (error) {
        // console.log('The error is ${error}');
        errmsg.textContent=`The error is ${error}` // output it up output kitty of free numberTemplate literally click elementary define click or click function verify is not definitely;
        
    }
}