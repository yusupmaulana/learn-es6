// =================================================================
// import dan export

import * as app from './app/index'


console.log(app.forum)





// ==================================================================
// Webpack module bundler

// const test = 'kerad euy!'
// console.log(test)

//babel dan webpack masih terpisah, untuk membuatnya terhubung gunakan package babel-loader jadi sintaks es6 akan di ubah ke es5 dulu baru kemudian di bundle

// ==============================================================
// Class

// class Members {
//   constructor(name, umur){
//     this.name = name
//     this.umur = umur
//   }
//
//   getData(){
//     return `namanya ${this.name} umurnya ${this.umur}`
//   }
//
//   static getPoint(){
//     return ' Poinnya 40 '
//   }
// }
//
// let member = new Members('Yusup', 30)
//
// console.log(Members.getPoint())

// ===========================================================
// Shorthand dan Destructuring object.
// name = 'yusup'
// umur = 15
// getData = () => {
// 	return `member ${name} umurnya ${umur}`
// }

// let member = {
// 	name, umur, getData
// }
// console.log(member.getData())

// let member = {
// 	name : 'yusup',
// 	umur : 15
// }
// let {umur : age, name} = member
// console.log(age)

// let umur = [1,2,3]
// let[a,b,c] = umur
// console.log(a+b+c)

// ======================================================================================
// Template Literal || string literal || Template string

// let username = 'yusup'
// let umur     = 21
//
// let text = `Member ${username} umurnya ${umur}`
//
// let div = `
//     <div>${username}</div>
//     <p>${umur}</p>
// `

// test = (strings, username, umur) => {
//   let string1 = strings[0]
//   let string2 = strings[1]

//   console.log(username)
// }

// let output = test`nama saya adalah ${username} umurnya ${umur}`

// console.log(div)

// =====================================================================================
// Rest dan spread

// signIn = (...member) => {
//   console.log(member)
// }
// let username = 'yusup maualna'
// let password = '123'
// let umur     = 21
// signIn(username, password, umur)

// signIn = (username, password, umur) => {
//   console.log(username + ' punya password '+ password + ' umurnya '+ umur)
// }
// let data = ['yusup', '123', '21']
// signIn(...data)




// ==================================================================================
// Default Parameter

//fungsi secara Default mereturn (tanpa keyword return)
// generateTitle = () =>
//     'ini judul standar';
//
// createTag = (title = generateTitle(), tag = 'bebas') => {
//   // tag = tag || 'css'
//   // if(typeof tag === 'undefined'){
//   //   tag = 'css'
//   // }
//   console.log('Forum '+ title + " punya tag " + tag);
// }
//
// createTag()

// ================================================================================
// syntax arrow -- => -- function shorthand
// var members = ['rizqi','dodi','qaiserlab','dodit'];
// members.forEach((member,index) => {
//     console.log(member + " " + index);
// });

// let SekolahKoding = {
//   members : ['rizqi','dodi','qaiserlab','dodit'],
//   getMembers(){
//     this.members.map((name) => {
//       console.log(this);
//     });
//   }
// };
//
// SekolahKoding.getMembers();

// ===============================================================================
//var vs let vs const
/*const person = {
  id : 1,
  name : 'Yusup'
};

person.age = 21;

console.log(person);*/
// var nama = "yusup"; //sifatnya function scope
// let dan const sifatnya block scope
// const tidak bisa di reassign (tp bukan immutable).
// var dan let bisa reassign (tp let gabisa dekalarasikan ulang dengan nama yang sama)
// function getName()
// {
//   if(false){
//     let nama = "yusup";
//     console.log(nama);
//   }else {
//     console.log('nama tidak ditemukan');
//   }
// }
//
// getName();
// console.log(nama);
