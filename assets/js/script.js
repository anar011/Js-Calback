"use strict"

// // homeworks


// function getEventNumsOfSumBySquare(arr) {
//     let sum = 0;
//     for (let i = 0; i< arr.length; i++) {
//         if(arr[i] % 2 == 0){
//             sum+=arr[i]**2
//         }
//     }
//     return sum;
// }


// let nums = [1,2,3,4];
// let res = getEventNumsOfSumBySquare(nums);

// console.log(res)

// let login = (email,password) =>{
//     if(email == "cavid@code.edu.az" && password == "12345"){
//         console.log(Succes)
//     }else{
//         console.log("Email or password is wrong")
//     }
// }

// login("cavid@code.edu.az","12345")








// recursive function

// function getNumbers(num){
//     console.log(log);
//     getNumbers(num)
// }

// getNumbers(5)

// function getNumbers(num) {
//     console.log(num);
//     let number = num - 1;

//     if (number > 0) {
//         getNumbers(number)
//     }
// }

// getNumbers(5)

// function getNumbers(num) {

//     let number = num - 1;

//     if (number > 0) {
//         getNumbers(number)
//     }

//     console.log(num);
// }

// getNumbers(5)


// function sumOfNums(n){
//     let sum = 0;
//     for(let i = 0; i<=n;i++){
//         sum+=i;
//     }

//     console.log(sum)

// }
// sumOfNums(5)


// function sumOfNums(num){
//     if(num == 1){
//         return num;
//     }else{
//         return num + sumOfNums(num-1)
//     }
// }

// console.log(sumOfNums(5))




//loops

// let numbers=[11,4,6,8,9];

// numbers.forEach(element => {
//     console.log(element)
// });

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index) => {
//     console.log(index)
// });

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index,arr) => {
//     console.log(arr)
// });

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index) => {
//     console.log(element + "- index:" +)
// });


// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index) => {
//     console.log(element + "- index:" + index)
// });

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index,arr) => {
//     arr[index] = element*2

// });

// console.log(numbers)

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index) => {
//     numbers[index] = element*2

// });

// console.log(numbers)

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index,arr) => {
//    if(element == 6){
//     console.log(element)

//    }

// });


// let numbers = [1,2,3,4,5,6,7]
// for (const item of numbers) {
//     console.log(item)
// }


// let user1 = {
//     name:"Mirze",
//     surname:"Beshirzade"
// }



// for (const key in user1) {
//     console.log(key)
// }

// for (const key in user1) {
//     console.log(user1[key])
// }

// for (const key in user1) {
//     console.log(key + " -" + user1[key])
// }

// for (const key in user1) {
//     if(key == "name"){
//         console.log(user1[key])

//     }

// }

// for (const key in user1) {
//     if(key == "name"){
//         console.log(key)

//     }

// }


// let user1 = {
//     id: 1,
//     name: "Mirze",
//     surname: "Beshirzade"
// }

// let user2 = {
//     id: 2,
//     name: "Hesen",
//     surname: "Hesenov"
// }

// let user3 = {
//     id: 3,
//     name: "Hesen",
//     surname: "Hesenov"
// }

// let users = [user1, user2, user3];

// for (const user of users){
//     console.log(users)

// }

// for (const user of users){
//     console.log(user.name + " " + user.surname)

// }

// for (const user of users) {
//     for(const key in user) {
//         console.log(`Key : ${key}, Value: ${user[key]}`)
//     }

// }


// let users = [user1, user2, user3];
// let count = 0;

// for (const user of users) {
//     for(const key in user) {
//         if(key == "name"){
//             if(user[key] == "Hesen"){
//                 count++
//             }
//         }
//     }

// }

// console.log(count)


// for (const user of users) {
//     for(const key in user) {
//         if(key == "name" && user[key] == "Hesen"){
//                 count++
            
//         }
//     }

// }

// console.log(count)


// for (const user of users) {
   
//     if(user.name == "Hesen" && user.surname == "Hesenov")
//     count++

// }

// console.log(count)


// let nums1 = [1,4,6,8,9,11]

// console.log(nums1)

// let nums2 = nums1;

// nums2[0] = 100;

// console.log(nums1)

// let newArr = nums1.map(m=>{
//     console.log(m)
// })

// let newArr = nums1.map(m=>{
    
//     return m*2 ;
// })

// console.log(newArr)
// console.log(nums1)

// let nums = [1,2,3,4,5,6];

// function numsOfOdd(num){
//     return num % 2 !=0
// }

// let numsOfOdd = n => {
//     return n% 2 !=0
// }

// function numsOfEven(num){
//     return num % 2 ==0
// }

// function numOfGraterThanFive(num){
//     return num > 5 ;
// }






// function calculateNums(arr,callback){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i]) ) {
//             sum+=arr[i]
//         }
//     }
   
//     console.log(sum)
// }

// function calculateNums(arr,callback){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i],5) ) {
//             sum+=arr[i]
//         }
//     }
   
//     console.log(sum)
// }


// calculateNums(nums,numsOfOdd)
// calculateNums(nums,numsOfEven)
// calculateNums(nums,numOfGraterThanFive)


// calculateNums(nums,(m,n) =>m % 2 != 0 && n > 3);

// calculateNums(nums,m=>m % 2 != 0);
// calculateNums(nums,m=>m%2 == 0);
// calculateNums(nums,m=>m > 5 );

// function sumOfOdd(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 != 0 ) {
//             sum+=arr[i]
//         }
//     }
   
//     console.log(sum)
// }

// function sumOfEven(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 == 0 ) {
//             sum+=arr[i]
//         }
//     }
   
//     console.log(sum)
// }

// function sumOfGraterThanFive(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > 5 ) {
//             sum+=arr[i]
//         }
//     }
   
//     console.log(sum)
// }




// sumOfOdd(nums);
// sumOfEven(nums);
// sumOfGraterThanFive(nums);




// let user1 = {
//     id: 1,
//     name: "Mirze",
//     surname: "Beshirzade",
//     age:22
// }

// let user2 = {
//     id: 2,
//     name: "Hesen",
//     surname: "Hesenov",
//     age:25
// }

// let user3 = {
//     id: 3,
//     name: "Ramin",
//     surname: "Hesenov",
//     age:18
// }

// let user4 = {
//     id: 4,
//     name: "Qadir",
//     surname: "Qadirli",
//     age:21
// }

// let users = [user1, user2, user3, user4];


// function showUsersByAge(people, callback ){
//     for (const item of people){
//         if(callback(item.age)){
//             console.log(item.name + " " + item.surname)
//         }
//     } 

// }

// showUsersByAge(users,m=>m>20)

// function showUsersByAge(people){
//     for (const item of people){
//         console.log(item.name)
//     } 

// }

// showUsersByAge(users)

// let filteredDatas = users.filter(m=>m.age > 20)
// console.log(filteredDatas)



// let filteredDatas = users.filter(m=>m.age > 20)
// for (const item of filteredDatas)
// console.log(item.name)



// let filteredDatas = users.filter(m=>m.age > 20)

// let nums = [1,3,4,5];

// let sum = nums.reduce((m,n)=>m+n);
// console.log(sum)

// let nums = [1,3,4,5];

// let sum = nums.reduce((total,current)=>total+current);
// console.log(sum)
 

// let sumOfAge = 0;

// for (const item of filteredDatas){
//     sumOfAge +=item.age
// }
// console.log(sumOfAge)




// const getSumOfAgesFromFilteredDatas = datas => {
//     let sumOfAge = 0;

// for (const item of filteredDatas){
//     sumOfAge +=item.age
// }
// console.log(sumOfAge)
// }

// getSumOfAgesFromFilteredDatas(filtered)



//// Task-2 ( Ededin faktorialinin hesablanmasini recursive function ile yazin)


// function fuctorial (num){
//     if( num === 0  || num === 1 )
//     return 1;
//     for(var i = num-1; i >=1; i-- ){
//         num*=i 
//     }
//     console.log(num)
// }

// fuctorial(4)



//// Task-3 ( Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi. )


// let student1 ={
//     id:1,
//     name:"Hesen",
//     surname:"Hesenov",
//     age:"22",
//     email:"hesen.edu.az"
// }

// let student2 ={
//     id:2,
//     name:"Qadir",
//     surname:"Qadirov",
//     age:"30",
//     email:"qadir.edu.az"
// }

// let student3 ={
//     id:3,
//     name:"Elmar",
//     surname:"Elmarli",
//     age:"20",
//     email:"pervin.edu.az"
// }

// let student4 ={
//     id:4,
//     name:"Pervin",
//     surname:"Pervinli",
//     age:"17",
//     email:"pervin.edu.az"
// }

// let students = [student1, student2,student3,student4]



// let filteredAge = students.filter(m=>m.age>18 && m.age<25 )
// console.log(filteredAge)



// let count = 0;
// for (const student of students){
//   for(const key in student) {
//     if(key == "email"){
//         if(student[key] == "pervin.edu.az"){
//             count++
//         }
//     }
//   }
// }

// console.log(count)


//// Task-4 Gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1993 qaytarmalidir.


 









