//console.log("hello world");

//varibles 
// let fname = "haaruun";
// const lname = "axmad";
// var age = 22;   //old way

//data types
// let string = "haaruun"; //string
// let number = 22; //number
// let null1 = null; //null
// let isstudent = true; //bolean
// let float = 2.5; //float
// let name; //undefiened

//operaters
//1.arithmatic operators

// let x = 5;
// let y = 3;

// let result = x + y;
// let result1 = x - y;
// let result2 = x / y;
// let result3 = x % y;
// let result4 = x * y;

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

//2.comparison operators

// let x = 5;
// let y = 3;

// let result = x == y;
// let result1 = x != y;
// let result2 = x === y;
// let result3 = x > y;
// let result4 = x < y;
// let result5 = x <= y;
// let result6 = x >= y;

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(result5)
// console.log(result6)

//3.logical operators
///and examples
//     console.log(true && true);   // true
//     console.log(true && false);  // false
//     console.log(false && true);  // false
//     console.log(5 && "hello");   // "hello" (both are truthy, returns the second)
//     console.log(0 && "world");   // 0 (0 is falsy, returns the first)
// //or examples
//     console.log(true || true);   // true
//     console.log(true || false);  // true
//     console.log(false || true);  // true
//     console.log(false || false); // false
//     console.log(0 || "hello");   // "hello" (0 is falsy, returns the second)
//     console.log(5 || "world");   // 5 (5 is truthy, returns the first)
// // not examples
//     console.log(!true);    // false
//     console.log(!false);   // true
//     console.log(!5);       // false (5 is truthy, so !5 is false)
//     console.log(!0);       // true (0 is falsy, so !0 is true)


//loops 
//1. for loop
// for(let i = 0; i <= 10; i++){
//     console.log('loop ',i);
// }

//2.while loop
// let i = 0;
// while(i<=10){
//     console.log("loop ",i);
//     i++
// }

//conditional 
// let name = "axmad";
// if(name == "haaruun"){
//     console.log("haaruun")
// }else if(name == "axmad"){
//     console.log("amxad")
// }

//example age and validation.
// let age = prompt("Enter Your Age");

// if(age === null || age.trim() === ""){
//     console.log("enter age please!!");
// } else if(isNaN(age)){
//     console.log("enter a number")
// } else if(age > 100 || age < 0){
//     console.log("enter 1 to 100 age number")
// } else{
//     age = Number(age)
//     if(age <18){
//         console.log("you are minor");
//     }else if(age >18){
//         console.log("you are adult")
//     }else{
//         console.log("error")
//     }
// }

//array
//let numbers = [1,2,3,4,5];
// console.log("original",numbers)
// numbers.push = 6;
// console.log("push",numbers)
// numbers.pop();
// console.log("pop",numbers)
//console.table(numbers);

// //and some of loops
// numbers.slice(0,3).forEach((item)=>{
//     console.log(item);
// })
// numbers.slice(0,3).map((item)=>{
//     console.log(item);
// })

//objects

// let person = {
//     name : "haaruun",
//     age : 22,
//     freinds : [
//     "axmad", "maxmad", "liban"],
//     isStudent:true
// }

// person.map(element => {
//     console.log(element)
// });

//console.table(person.freinds[0])

//functions

// function hi(name,age){
//     return console.log(`hi ${name} and age is ${age}`);
// }

// hi("haaruun",22)

// let name = function(name,age){
//     return console.log(`hi ${name} and age is ${age}`);
// }

// name("haaruun",22)



// // api
// function generateStars(rating) {
//                 const fullStars = Math.floor(rating);      // full ★
//                 const halfStar = rating % 1 >= 0.5 ? 1 : 0; // half ☆ (optional)
//                 const emptyStars = 5 - fullStars - halfStar;

//                 let stars = "";

//                 stars += "★".repeat(fullStars);
//                 if (halfStar) stars += "☆"; // Half-star workaround (visual only)
//                 stars += "✩".repeat(emptyStars); // empty star

//                 return stars;
//                 }

// //api  displaying product 
// fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             //.then(response => console.table(response))
//             .then(products => {
//                 let conatiner = document.getElementsByClassName('product-card')[0]
//                 products.forEach(product => {

//                 let html = `
//                 <div class="product-image">
//                     <div class="product-badge">NEW</div>
//                     <img src=" ${product.image} " alt="Wireless Headphones">
//                 </div>
                
//                 <div class="product-content">
//                     <h2 class="product-title">${product.title}</h2>
//                     <p class="product-description">${product.description}</p>
                    
//                     <div class="product-price">${product.price}</div>
                    
//                     <div class="product-rating">
//                         <div class="stars">${generateStars(product.rating.rate)}</div>
//                         <div class="rating-value">${product.rating.rate} (${product.rating.count} reviews)</div>
//                     </div>
                    
//                     <div class="product-actions">
//                         <button class="btn btn-primary">Add to Cart</button>
//                         <button class="btn btn-secondary">Wishlist</button>
//                     </div>
//                 </div>
//                 `
//                 conatiner.innerHTML  += html
//                 });
//             })
//             .catch(error => console.log(error))


// number guess game

// let rondomNumber = Math.floor(Math.random() * 100);

// let number = prompt(`Guess The Number ${rondomNumber}`);

// if(number === null || number.trim() === ""){
//     alert("please fill the form to guess");
// }else{
//     number = Number(number);
//     if(number === rondomNumber){
//         alert(`You guessed the number ${rondomNumber}`);
//     }else{
//         alert(`you did not the number ${rondomNumber}`);
//     }
// }

// let rondomNumber = Math.floor(Math.random() * 10) +1;
// console.log(rondomNumber);

// besic calculator

// let number1 = prompt("enter you number 1");
// let symbol = prompt("enter symbol + - / * ");
// let number2 = prompt("enter you number 2");

// number1 = Number(number1);
// number2 = Number(number2);

// if(symbol == "+"){
//     let result = number1 + number2;
//     alert(`the result is : ${result}`);
// }else if(symbol == "-"){
//     let result = number1 - number2;
//     alert(`the result is : ${result}`);
// }else if(symbol == "*"){
//     let result = number1 * number2;
//     alert(`the result is : ${result}`);
// }else if(symbol == "/"){
//     let result = number1 / number2;
//     alert(`the result is : ${result}`);
// }else{
//     alert("please enter symbol only");
// }

//Temperature Converter //Convert Celsius ↔ Fahrenheit.

// (0°C × 9/5) + 32 = 32°F  C TO F
// let number1 = (10 * 9/5) + 32;
// console.log(number1);  // 50 °F10

// //(°f - 32) / (9/5) = 32°C  F TO C
// let number = (10 - 32) / (9/5);
// console.log(number);  // -12.222 °C

// let  number = prompt("enter something");
// let  to = prompt("write to F or to C");
// number = Number(number);
// if(to == "f"){
//     let formula = (number * 9/5) + 32;
//     alert(`the result is: ${formula} °F`);
// }else if(to == "c"){
//     let formula = (number - 32) / (9/5);
//     alert(`the result is: ${formula} °C`);
// }


//password generator

function generatepassword(length = 12){
    const all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>/?";
    let password = "";
    for(i = 0; i < length; i++){
        const idx = Math.floor(Math.random() * all.length);
        password += all[idx];
    }
    return password;
}

console.log(generatepassword(20)); //result = ^5/=z}V6-^664?Qa

//grade 

// let grade = prompt("enter your grade");
// if(grade > 90){
//     alert("a")
// }else if(grade > 80){
//     alert("b")
// }else if(grade > 70){
//     alert("c")
// }else{
//     alert("fail")
// }


//type on input and saw in paragraph

// let input = document.createElement("input")
// input.type = "text";
// let p = document.createElement("p")
// p.innerHTML = ""

// document.body.appendChild(input)
// document.body.appendChild(p)

// input.addEventListener("input",()=>{
//     p.innerHTML = input.value;
// });


// console.log(input)
// console.log(p)


//callback function

//example one
// function first(callback){
//     setTimeout(()=>{
//         console.log("first")
//         callback();
//     },1000)
// }

// function second(){
//     console.log("second")
// }

// first(second);

//example one

// function sumnumbers(num1,num2,callback){
//     let numbers;
//     setTimeout(()=>{
//         numbers = num1 + num2;
//         callback(numbers);
//     },1000)
// }

// function printnumbers(value){
//     console.log(`the result is ${value}`)
// }

// // printnumbers(sumnumbers(10,10))

// sumnumbers(10,10,printnumbers);


//local stotage 
// let mydetail = {
//     name : "haaruun",
//     age : 22,
//     freinds : [
//     "axmad", "maxmad", "liban"],
//     isStudent:true
// }

// localStorage.setItem('mydetail', JSON.stringify(mydetail));
// let data = JSON.parse(localStorage.getItem('mydetail'))
// console.log(data)
// localStorage.removeItem(myname)

// localStorage.clear()



//countdown

// let startingtime = 10;
// let time = startingtime * 60;

// setInterval(updatetime,1000);
// let p = document.createElement('p');

// function updatetime(){
//     let minutes = Math.floor(time / 60);
//     let seconds = time % 60
    
//     seconds = seconds < 10 ? '0' + seconds : seconds; 

//     p.innerHTML = `${minutes}:${seconds}`
//     document.body.append(p)
//     time--;
// }


