let book = {}

Object.defineProperties(book, {
  year: {
    value: 2019
  },
  age: {
    get: function() {
      return 2
    }
  }
})

// 数据属性
const first = Object.getOwnPropertyDescriptor(book, 'year')
// 访问器属性
const last = Object.getOwnPropertyDescriptor(book, 'age')
console.log(first);
console.log(last);