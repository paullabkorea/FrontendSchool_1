let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
undefined
let json = JSON.stringify(student);
undefined
json
'{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}'
JSON.stringify('test')
'"test"'
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

JSON.stringify(user, null, 4)
'{\n    "name": "John",\n    "age": 25,\n    "roles": {\n        "isAdmin": false,\n        "isEditor": true\n    }\n}'
JSON.stringify(user, null, 2)
'{\n  "name": "John",\n  "age": 25,\n  "roles": {\n    "isAdmin": false,\n    "isEditor": true\n  }\n}'
console.log(JSON.stringify(user, null, 4))
VM161:1 {
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
undefined
console.log(JSON.stringify(user, null, 2))
VM203:1 {
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
undefined
// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[1])
VM267:6 1
undefined
