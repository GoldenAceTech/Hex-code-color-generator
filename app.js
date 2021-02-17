const colorName = document.querySelector('#colorName');
const hexCode = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const btn = document.querySelector('#generate');
let color;
const colorGenerator = () => {
     color = '#';
for(let i=0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexCode.length);
    color += hexCode[randomNumber];
}    
 colorName.textContent = color;
 document.body.style.backgroundColor = color;
}

btn.addEventListener('click', colorGenerator);