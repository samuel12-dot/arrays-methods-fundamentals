const people = ['vic', 'ayo', 'sam']
const items = [1, 2, 3, 4, 5]
const namesOfBook = [{},{},{}]


console.log(people)
console.log(items)
console.log(namesOfBook)

//Array methods
/* 1. length : .length
2. push : .push()
3. unshift : unshift() */
4. /* concat
5. replace methods
6. includes methods
7. charAt */

people.push('ann')
console.log(people)
console.log(people.indexOf('ann'))
console.log(people.lastIndexOf('ann'))
people.indexOf('anu') == -1 ? people.unshift('anu') : ''
console.log(people)
console.log(people.includes('ayodele'))
const xPeople = people.concat(...['santamonica'])// Concat method doesn't modify the existing array
console.log(people)
console.log(xPeople)

function add(x, y) {
    return x + y
}

//Creating a function
function capitalize(str) {
    str = str.toLowerCase()
    return str[0].toUpperCase() + str.slice(1)
}
add(4,6)

const truncate = str 

function handleVowel(str) {
    str = str.toLowerCase()
    const vowels = 'aeiou'
    return vowels.includes(str[str.length - 1])
}

//Methods that take a function
// Map method create a new array and doesn't alter the previous array
const capsPeople = people.map(capitalize)
console.log(capsPeople)
console.log(people)

// console.log(xPeople.map(str => str.slice(0, 2)).replace(str[0], str[0].toUpperCase()))

const studentsAges = '12,34,56,47,98'.split(',').map(num => parseInt(num))
console.log(studentsAges)
console.log(typeof studentsAges)

const studentsHD = "12, 33, 13, 55, 324, 26, 40, 0f, 1b".split(',').map(num => parseInt(num, 16)).map(num => num % 10)
const studentsBinary = "11001, 111, 101, 001, 110".split(',').map(num => parseInt(num, 2)).filter(num => num < 10)

//Reduce method
console.log(studentsBinary.reduce((a, b) => a + b, -5))
console.log(studentsBinary.reduce((a, b) => a * b, 1))

//array comparison
const arr1 = [2]
const arr2 = arr1
console.log(arr1 == arr2)


