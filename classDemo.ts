class ClassDemo
{
    //properties,methods,constructor
    username:string;
    password:string;
    ssn:number;

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

let cd=new ClassDemo();
cd.setUsername("Nemanja");
console.log(cd.getUsername());