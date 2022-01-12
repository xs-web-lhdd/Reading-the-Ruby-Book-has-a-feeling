var dest = {
  set b(val) {
    console.log('dest的set设置:' + val);
  }
}

var src = {
  get a() {
    console.log('src获取get');
    return 'foo'
  }
}

var result = Object.assign(dest, src)
console.log(result);