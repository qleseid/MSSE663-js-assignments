/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

 //Literal object
 var monkey = {
     age:30,
     sex:"male",
     fingers:20,
     howOld: function()
     {
        return "I'm " + this.age + " years old!";
     },
     whatAmI:function()
     {
        return "I'm a " + this.sex + " monkey.";
     }
 }

 //Log to console how old the monkey is
 console.log(monkey.howOld());

 //Log to console what the object is
 console.log(monkey.whatAmI());

 //Monkey Class
 class Monkey 
 {
     constructor(age, sex, fingers)
     {
        this.age = age;
        this.sex = sex;
        this.fingers = fingers; 
     }
    
    howOld()
    {
       return "I'm a " + this.age + " year old " + this.sex + "!";
    }
    howManyFingers()
    {
       return "I have " + this.fingers + " fingers because my feet are hands.";
    }
}

monkey1 = new Monkey(35, "Female", 20);

//Log to console how old the monkey is
console.log(monkey1.howOld());

//Log to console how many fingers a monkey has
console.log(monkey1.howManyFingers());
