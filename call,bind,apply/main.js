/********************************************************************** */
//in object
// let obj = {
//     fName : "vijay",
//     lName : "sankar",
//     myName : function(){
//         console.log(this.fName + " " +this.lName);
//     }
// }

// obj.myName()

// let name1 = {
//     fName : "Mithun",
//     lName : "kumar"
// }

// obj.myName.call(name1)

/*************************************** */
// function myName(){
//     console.log(this.fName + " " +this.lName);
// }

// let obj = {
//         fName : "vijay",
//         lName : "sankar",
        
//     }
    
   
    
//     let name1 = {
//         fName : "Mithun",
//         lName : "kumar"
//     }
    
//     myName.call(name1)
//     myName.call(obj)
/**********************************************************************/
//in class
// class myFullName{
//   constructor(){
//     this.fName = "Mithun"
//     this.lName = "kumar"
//   }
//      fullName(){
//         console.log(this.fName + " " +this.lName);
//     }
// }

// let cls1 = new myFullName()


// class printName{
//     constructor(){
//         this.fName = "vijay"
//         this.lName = "sankar"
//     }
// }
// cls1.fullName.call(printName)
/**********************************************************************/
//apply
// function myName(hometown, city){
//     console.log(this.fName + " " +this.lName + " My hometown is" + " "+ hometown + " and my city is "+ ""+ city);
// }

// let obj = {
//         fName : "vijay",
//         lName : "sankar",
        
//     }
    
   
    
//     let name1 = {
//         fName : "Mithun",
//         lName : "kumar"
//     }
    
//     myName.apply(name1,["aavalapalli","hosur"])
//     myName.apply(obj,["courtallam","tenkasi"])
/**********************************************************************/
//bind

// function myName(hometown, city){
//     console.log(this.fName + " " +this.lName + " My hometown is" + " "+ hometown + " and my city is "+ ""+ city);
// }

// let obj = {
//         fName : "vijay",
//         lName : "sankar",
        
//     }
    
   
    
//     let name1 = {
//         fName : "Mithun",
//         lName : "kumar"
//     }
    
//   let printMyName =  myName.bind(name1,"aavalapalli","hosur")
//   let printMyName1 =  myName.bind(obj,"courtallam","tenkasi")

//   printMyName();
//   printMyName1();


/**********************************************************************/

// class someClass {
//     constructor(){
//         this.name = "Vijay"
//     }
// }

// function getInput(){
//     console.log(this.name);
// }

// var obj = new someClass();

// obj.getInput()

// class someClass {
//     constructor(){
//         this.name = "Vijay"
//     }

//  getInput(){
//     console.log(this.name);
// }
// }
// var obj = new someClass();

// obj.getInput()

/**********************************************************************/
//inheritence

class ParentClass{
    constructor(){
        this.name = "Rama"
        this.age = 35
    }
    getAge(){
        console.log(this.age);
    }
}

class Child extends ParentClass{
    constructor(){
        super();
        // console.log(this.name);
    }
    
}

var obj1 = new Child()

console.log(obj1);

obj1.getAge()
/**********************************************************************/