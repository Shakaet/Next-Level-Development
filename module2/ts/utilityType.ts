



//utility type


type Person={
    name:string,
    email?:string,
    age:number,
    contactNo:string
}


type Name1=Person["name"]
type Name2=Pick<Person,"name">
type NameAge=Pick<Person,"name"|"age">


// omit type (baad dewa)



type ContactInfo=Omit<Person,"name"|"age"|"email">


// Require type (shob required korbe optional type gulo shoho)



type requrePerson=Required<Person>

// Partial type (shob optional korbe)

type optionalPerson=Partial<Person>


//readonly type
type ReadonlyProperty=Readonly<Person>


let person:ReadonlyProperty={
    name:"skt",
    age:25,
    contactNo:"01920293858"
}


// person.name="hhhhh"




