// ================================================================================
// syntax arrow -- => -- function shorthand
// var members = ['rizqi','dodi','qaiserlab','dodit'];
// members.forEach((member,index) => {
//     console.log(member + " " + index);
// });

let SekolahKoding = {
  members : ['rizqi','dodi','qaiserlab','dodit'],
  getMembers(){
    this.members.map((name) => {
      console.log(this);
    });
  }
};

SekolahKoding.getMembers();

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
