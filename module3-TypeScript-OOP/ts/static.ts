


// static ekta value ei shob object(instance) er jonno share kore, do not create instanse directly call by className,, static method er shateo boshano jay

class Counter{

    static counter:number=0

    increament(){

        return Counter.counter=Counter.counter+1

    }

      decrement(){

        return Counter.counter= Counter.counter= Counter.counter-1

    }

}

let counter1=new Counter()
console.log(counter1.increament())
console.log(counter1.increament())

let counter2=new Counter()
console.log(counter2.increament())
console.log(counter2.increament())
console.log(counter2.increament())
console.log(counter2.increament())


//  console.log(counter2.increament())
//  console.log(counter2.increament())
//  console.log(counter2.increament())
//  console.log(counter2.increament())


