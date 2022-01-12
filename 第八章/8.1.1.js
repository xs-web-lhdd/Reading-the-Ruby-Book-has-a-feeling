"use strict"

let person= {}

Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'H2O'
})

Object.defineProperty(person, 'name', {
  // configurable: true,
  writable: true,
  value: 'H2O'
})
