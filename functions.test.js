const {returnTwo, greeting, add, subtract, divide, multiply} = require('./fucntions')

test('Should return 2',()=>{
    expect(returnTwo(2)).toEqual(2)
})

test('Should return Hello {name}',()=>{
    expect(greeting('James')).toEqual(`Hello, James.`)
    expect(greeting('Jill')).toEqual(`Hello, Jill.`)
})

describe('MathFunctions',()=>{
    test('Should return num1 + num2',()=>{
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })
    test('Should return num1 - num2',()=>{
        expect(subtract(2,1)).toEqual(1)
        expect(subtract(9,5)).toEqual(4)
    })
    test('Should return num1 * num2',()=>{
        expect(multiply(1,2)).toEqual(2)
        expect(multiply(5,5)).toEqual(25)
    })
    test('Should return num1 / num2',()=>{
        expect(divide(10,2)).toEqual(5)
        expect(divide(100,10)).toEqual(10)
    })
})

