var  popupoverlay=document.querySelector('.popup-overlay')
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById('add-pop-btn')

popupbutton.addEventListener('click', function(){
    popupoverlay.style.display='block'
    popupbox.style.display='block'
})

var cancelpopup=document.getElementById('popup-cancel')

cancelpopup.addEventListener('click', function(event){
    event.preventDefault()
    
    popupoverlay.style.display='none'
    popupbox.style.display='none'
})
//selectcontainer, addbook,input title author  description

var container=document.querySelector('.container')
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById('book-title')
var bookauthor=document.getElementById('book-author')
var bookdesc=document.getElementById('book-desc')

addbook.addEventListener('click', function(event){
    event.preventDefault()

    var div=document.createElement("div")
    div.setAttribute('class','book-container')
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    
    container.append(div)
console.log(div);

    popupoverlay.style.display='none'
    popupbox.style.display='none'
})
function deletebook(event){
   console.log( event.target);
    event.target.parentElement.remove()

}






