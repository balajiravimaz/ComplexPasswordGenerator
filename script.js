const passwordLen = document.getElementById("plength");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("num");
const symbol = document.getElementById("symbol");
const button = document.getElementById("generate");
const pass = document.querySelector(".password");

const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lower = "abcdefghijklmnopqrtsuvwxyz";
const number = "1234567890";
const symbols = "!@#$%^&*&()+-/~";


button.addEventListener("click", (e) => {
    generatePassword();
});


function lowerCase() {    
    return Lower[Math.floor(Math.random() * Upper.length)];
}
function upperCase() {
    return Upper[Math.floor(Math.random() * Upper.length)];
}
function numberCase() {
    return number[Math.floor(Math.random() * number.length)];
}
function symbolCase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {
    const len = passwordLen.value;

    let password ="";

    for (let i = 0; i <len; i++) {
        const x = generateX();
        password +=x;
    }
    pass.value = password;
}

function generateX(){
    const xs =[];
    if(upper.checked){
        xs.push(upperCase());
    }
    if(lower.checked){
        xs.push(lowerCase());
    }
    if(num.checked){
        xs.push(numberCase());
    }
    if(symbol.checked){
        xs.push(symbolCase());
    }
    if(xs.length === 0){
        return "";
    }
    return xs[Math.floor(Math.random() * xs.length)];
    // return pass;    
}


pass.addEventListener("click", async e=>{
    const {value} = e.target;
    if(value !==null & value !==""){
        if(!navigator.clipboard){
            return
        }
        try{
            await navigator.clipboard.writeText(value);
            alert('Password Copied');
        }catch(err){
            console.log('Failed to copy!!!', err);
            
        }
    }
})