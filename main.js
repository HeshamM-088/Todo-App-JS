// Document Object Model

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll
// addEventListener
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.links[1]);
// console.log(document.title);
// console.log(document.forms[0][1]);
// console.log(document.all);



/*Variables*/
let inputBtn = document.querySelector('.textinp')

let submitBtn = document.querySelector('.submitinp')

let mainForm = document.querySelector('form') 

let orderList = document.querySelector('.result-list')

let closeBtn = document.querySelector('.newLi::after')



/*Actions*/
document.addEventListener('DOMContentLoaded', function(){
    
    submitBtn.disabled = true;

    inputBtn.addEventListener('keyup', function(){
        if(inputBtn.value.length > 5){
            submitBtn.disabled = false;
        }else{
            submitBtn.disabled = true;
        }
    })
})

mainForm.addEventListener('submit', function(e){
    e.preventDefault();
    let newLi = document.createElement('li')
    let closeBtn = document.createElement('button')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&#9432;'
    // closeBtn.appendChild(xInClose)
    newLi.setAttribute('class', 'newLi')
    let liText = document.createTextNode(inputBtn.value)
    newLi.appendChild(liText);
    newLi.appendChild(closeBtn);
    orderList.appendChild(newLi)
    inputBtn.value = '';
    submitBtn.disabled = true;

    closeBtn.addEventListener('click', function(){
        newLi.style.display = "none";
    })

})





