// window.addEventListener('keydown', e =>{
//     if (e.key == " ") ClickCountSpan++
// })

// Оптимизация
onkeydown = e => e.keyUp == ' ' ? ClickCountSpan.innerText++ : 0
