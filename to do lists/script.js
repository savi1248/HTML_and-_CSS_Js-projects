const todotext=document.getElementById('todo-text')
const todoul=document.getElementById('todo-ul')

function add(){
    
    if(todotext.value.trim()=== ""){
        alert('plese enter something...');
    }
    else{
        console.log(todotext.value.trim());
        const litag=document.createElement('li')
        const spantext=document.createElement('span')
        const textnode=document.createTextNode(todotext.value.trim());
        spantext.appendChild(textnode);
        spantext.addEventListener('click', (e)=>{
          
            e.target.classList.toggle('done')
           
        })
        const spanclose=document.createElement('span')
        spanclose.classList.add('close');
        spanclose.innerHTML='&times';
        spanclose.addEventListener('click', (e)=>{
            console.log(e.target.parentElement);
         const li =e.target.parentElement
         li.parentElement.removeChild(li)
           
        })
        litag.appendChild(spantext)
        litag.appendChild(spanclose)
        todoul.appendChild(litag)
        todotext.value=''
    }

    
}