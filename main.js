const checkBox = document.querySelector('#check')
const header = document.querySelector('.head')
const h1Ele = document.querySelector('.text_dark')
const number = document.querySelectorAll('.text_dark')
const box = document.querySelectorAll('.box_light')
const mode = document.querySelector('.mode')
const body = document.body


checkBox.addEventListener('click', () =>{

    if(checkBox.checked){

        body.classList.add('dark_mode')
        header.classList.replace('header_light', 'header_dark')
        h1Ele.classList.replace('text_dark', 'text_light')
        number.forEach(num => num.classList.replace('text_dark', 'text_light'))
        box.forEach(box => box.classList.replace('box_light', 'box_dark'))
        box.forEach(b => b.classList.replace('light_hover', 'dark_hover'))

        mode.innerHTML = 'dark'
        
    }else{

        body.classList.remove('dark_mode')
        header.classList.replace('header_dark', 'header_light')
        h1Ele.classList.replace('text_light', 'text_dark')
        number.forEach(num => num.classList.replace('text_light', 'text_dark'))
        box.forEach(box => box.classList.replace('box_dark', 'box_light'))
        box.forEach(b => b.classList.replace('dark_hover', 'light_hover'))
        
        mode.innerHTML = 'Light'
    }
})



