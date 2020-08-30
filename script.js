function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return (`rgb(${r},${g},${b})`);
}

function changeColor(elem){
    elem.style.color = randomColor();    
}

//let text = "Hello"
let text = prompt('Give us some text to use');

for (let char of text){
    let letter = document.createElement("span");
    letter.innerText = char;
    document.querySelector('body>h1').append(letter);
    letter.style.transition = 'color 2s';
    let intID = setInterval(()=>{changeColor(letter)}, 1000,letter);
}

