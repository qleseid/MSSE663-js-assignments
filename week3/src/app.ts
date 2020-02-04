// Source code here
/*
1 Create an interface that has 3 properties and 2 methods.

- all properties should be typed.
- one method should return boolean.
- one method should return an array of items of a custom type.

2 Create a class that implements that interface.

3 Make a new instance of your class that calls your methods and outputs a result

*/

//Basic Monkey Interface
export interface monkey 
{
    age: number;
    skills: String[];
    color: String;

    getSkills: () => Array<String>;
    getColor: () => String;
    sameAge: (age: number) => boolean;
}

//Monkey Class
export class yeller implements monkey
{
    loud = true;

    constructor(
        public age: number,
        public skills: String[],
        public color: String
    )
    {
        this.age = age;
        this.skills = skills;
        this.color = color;
    }

    getSkills(): Array<String>
    {
        return this.skills;
    }

    getColor(): String
    {
        return this.color;
    }

    sameAge(age: number): boolean
    {
        return (this.age == age);
    }
}

//Fluffy yeller monkey class
const fluffy = new yeller(
    13,
     ["play", "sleep", "eat"],
      "white"
);

//Call the to class methods
console.log(fluffy.getSkills);
console.log(fluffy.sameAge(13));
