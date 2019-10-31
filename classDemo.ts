import {vehicle} from './access'

export class ClassDemo
{
    //properties,methods,constructor
    username:string;
    password:string;
    ssn:number;

    //constructor
    constructor(ssn:number)
    {
        console.log("I'll be the first to execute");
        this.ssn=ssn;
    }

    //getters and setters
    getUsername()
    {
        return this.username;
    }

    setUsername(name:string)
    {
        this.username=name;    //set username property to one name
    }

    getSSN()
    {
        return this.ssn;
    }

}

//create object of the class, and using that object call methods or properties present in that class
/*let cd=new ClassDemo(123);
cd.setUsername("Whatever we write");
console.log(cd.getUsername());
console.log(cd.getSSN());*/