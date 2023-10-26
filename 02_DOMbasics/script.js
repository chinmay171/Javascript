function setNewLang(language){
    console.log(language);
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(language));
    newLi.className = `lang ${language}`
    document.querySelector('.list').appendChild(newLi); 
}
let addBtn = document.querySelector('.addButton');
let actualText = document.querySelector(".inputNewLang").value;
console.log(actualText)
addBtn.addEventListener("click", setNewLang(actualText))

function removeLang(){
    const remLi = document.querySelector('.lang');
    const list = document.querySelector('.list');
    list.removeChild(remLi);
}
let removeBtn = document.querySelector('.removeButton');
removeBtn.addEventListener("click", removeLang);