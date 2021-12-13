// 객체지향

// 1. 모듈 패턴
function person() {
    let age = 35;

    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
    }
}

const myPerson = person();
console.log(myPerson.getAge());


// 2. 사용자 정의 타입 패턴
function PersonType() {
    this.age = 35;
}

PersonType.prototype.getAge = function () {
    return this.age
}

const instancePerson = new PersonType();
const instancePerson2 = new PersonType();
const instancePerson3 = new PersonType();
const instancePerson4 = new PersonType();


console.log(instancePerson.age);

// 3. 모듈 + 사용자 정의 타입

// function PersonType2() {
//     let age = 25;

//     function innerPersonType() { }

//     innerPersonType.prototype.getAge = function () {
//         return age;
//     }

//     return innerPersonType;
// }


//  const Person3 = PersonType2();
// const person3 = new Person3();
// console.log(person3.getAge());

// IIFE 패턴으로 만들어보기
const PersonType3 = (function () {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());