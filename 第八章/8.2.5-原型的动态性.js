function Person() {}

let friend = new Person()

// friend.sayHi()

Person.prototype.sayHi = function() {
  console.log("说你好!");
}

friend.sayHi()