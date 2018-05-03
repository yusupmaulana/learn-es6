const person = {
  id : 1,
  name : 'Yusup'
};

person.age = 21;

console.log(person);
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
