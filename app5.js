const button=document.querySelectorAll('.btn')
const body=document.querySelector('body')

console.log(button);


button.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    // console.log(e);
    if (e.target.innerHTML === 'Red') {
        body.style.backgroundColor = 'red';
    } else if (e.target.innerHTML === 'Yellow') {
        body.style.backgroundColor = 'yellow';
    } else if (e.target.innerHTML === 'Grey') {
        body.style.backgroundColor = 'grey';
    } else if(e.target.innerHTML==='Green'){
        body.style.backgroundColor = 'green';
        }
     else if(e.target.innerHTML==='Purple'){
        body.style.backgroundColor = 'purple';
        }
     else {
        body.style.backgroundColor = 'blue';
    }


    // switch (e.target.innerHTML) {
    //     case 'Red':
    //         body.style.backgroundColor = 'red';
    //         break;
    //     case 'Yellow':
    //         body.style.backgroundColor = 'yellow';
    //         break;
    //     case 'Grey':
    //         body.style.backgroundColor = 'grey';
    //         break;
    //     case 'Green':
    //         body.style.backgroundColor = 'green';
    //         break;
    //     case 'Purple':
    //         body.style.backgroundColor = 'purple';
    //         break;
    //     default:
    //         body.style.backgroundColor = 'blue';
    // }
    
    
})
})