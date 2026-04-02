interface A {
    name: string
}

interface C {
    name2: string 
}

interface B extends A, C {
    age: number
}

const ans: B = {
    name: 'abc',
    name2: 'def',
    age: 12
}

// Above thing can also be impemebted by using types as well
type E = {
    name: string
}

type F = {
    name2: string
}

type G = E & F & {
    age: number
}

const val: G = {
    name: 'abc',
    name2: 'def',
    age: 34
}