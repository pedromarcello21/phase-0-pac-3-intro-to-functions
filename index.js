// Follow along with the examples here
const greeting = () => {
    console.log("Hello")
}

greeting()

const sayHiTo = (name) => {
    console.log(`Hi, ${name}`)
}

sayHiTo("pedro")

const greetPerson = (name, greeting) => {
    console.log(`${greeting}, ${name}`)
}

greetPerson("pedro", "Howdy")
greetPerson("gabe", "sup")

const getTip = (bill) => {
    return "$" + bill * .2
}

console.log(`${getTip(100)} tip for bill`)