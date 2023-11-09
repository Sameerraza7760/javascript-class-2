// const form=document.querySelector('form')

// form.addEventListener('submit',()=>{
//     e.preventDefault()
//     const height=parseInt(document.querySelector('.height').value)
//     // const weight=parseInt(document.getElementById('Weight').value)
//     // const result=document.getElementById('result')

//     // if (height===''|| height<0 ||isNaN(height)) {
//     //     result.innerHTML='Please fill a correvt height'
//     // }
//     console.log(height);


// })


// function normal() {
//     console.log("normal function called");
// }

// const normalvariable = normal; // Assign the function itself, don't call it

// normalvariable(); // Now you can call it as a function


// //normal function called





// const arraowFunction=()=>{
//     console.log("arror function called");
// }

// const Asif = arraowFunction; // Assign the function itself, don't call it

// Asif(); // Now you can call it as a function


//normal function called






// const promise=new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('promise is solved');
//         resolve()
//     },2000)
// })

// promise.then(()=>{
//     console.log('resolve worked');
// })

//promise is solved
// resolve worked



// new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log('promise is solved');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('reslove');
// })


//promise is solved
// resolve worked




// const promise=new Promise((resolve, reject) => {
    
//     setTimeout(()=>{

//         console.log('data fetch now');

//         resolve({username:'sameer raza',email:'sameer12@gmail.com'})
//     },1000)
// })



// promise.then((user)=>{
//     console.log(user.email);
// })

//sameer12@gmail.com


// const promise=new Promise((resolve, reject) => {
    
//     setTimeout(()=>{

//         let error=true
//         if (!error) {
//             resolve()
//         }
//         else{
//             reject()
//         }
//     },1000)
// })



// promise.then(()=>{
//     console.log('promise reloved');
// }).catch(()=>{
//     console.log('promise rejected');
// }).finally(()=>{
//     console.log("all promise completed");
// })





// const promise=new Promise((resolve, reject) => {
    
//     setTimeout(()=>{

//         let error=false
//         if (!error) {
//             resolve({username:'sameer'})
//         }
//         else{
//             reject('error throug')
//         }
//     },1000)
// })



// const reponseFunction=async()=>{
//   const response= await promise
//   console.log(response);
// }



// reponseFunction()

//username:sameerraza





// const promise=new Promise((resolve, reject) => {
    
//     setTimeout(()=>{

//         let error=true
//         if (!error) {
//             resolve({username:'sameer'})
//         }
//         else{
//             reject('error throug')
//         }
//     },1000)
// })



// const reponseFunction=async()=>{
   
// try {
//     const response= await promise
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }
// }



// reponseFunction()

//error through




// when the error accurs like 404 error its find on resolve not reject



//what is fetch
//is an network based request