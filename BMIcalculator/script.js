let submit = document.querySelector(".answer");

submit.addEventListener("click", function(){
    let hInp = document.querySelector('#hInput').value;
    let wInp = document.querySelector('#wInput').value;

    if(hInp < 0 || hInp == '' || isNaN(hInp)){
        document.querySelector('.answer').textContent = 'Invalid Height';
    }else if(wInp < 0 || wInp == '' || isNaN(wInp)){
        document.querySelector('.answer').textContent = 'Invalid Weight';
    }
    
    let num = (hInp*hInp)/ 10000;
    let fAns = wInp / num;
    document.querySelector('.answer').textContent = Math.round(fAns);
})

