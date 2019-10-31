import { ClassDemo } from './classDemo'

let cd=new ClassDemo(12345);
cd.setUsername('Whatever we write');
console.log(cd.getUsername());
console.log(cd.getSSN());

//Interface
//It shows us how object should be like - Blueprint
//Define the body: define the outer skeleton of the body and how the body looks like
//we can export this interface or we do not have to (imported to classDemo)
export interface vehicle{
    color:string;
    engine:number;
    camera?:boolean; //Putting ? in Interface means parameter is optional
}

function validateCar(car:vehicle){
    console.log(car.color);
    console.log(car.engine);
}

//When we are returning some value we shoud state return type

    //example without return type
    function validate(value:string){
        console.log(value);

    }

    //example with return type stated
    function sum(value:number):number{
        return value+1;
    }


//Object
    let obj = {
        
        color: "red",
        engine: 100,
    }

    console.log('Desired carr attribute is: ' + obj.engine);

    let Bmw = {
        color:"red",
        engine:100,
        camera:true,
        exaust:true,
    }

    let Volvo = {
        color:"red",
        engine:100,
        //camera:true
    }


validate('Heya');
console.log(sum(25));
validateCar(Bmw);//Interface can bee extended but must meet minimum requirements
validateCar(Volvo); //It doesn't follow the interface 