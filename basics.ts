const a=4;
let b:string="test";

//Strongly typed any-keyword
let c:any=5;
c="string";
c=true;

//Properly defined array
let list:Array<Number>=[1,2,3];


for(let i=0;i<5;i++){
    setTimeout(function(){ console.log(i); }, 100 *i);
}

