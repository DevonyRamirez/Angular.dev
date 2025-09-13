// export class Person{
//     public name:string;
//     private address:string;
//     constructor(name:string, address:string){
//         this.name=name;
//         this.address=address;
//     }
// }


// const ironman= new Person('Tony Stark','Malibu, California');
// console.log(ironman);
export class Person {
    public firstName: string;
    public lastName: string;
    private address: string;

    constructor(firstName: string, lastName: string, address: string = 'No Address') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
}

export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    constructor(alterEgo: string, age: number, firstName: string, lastName: string) {
        super(firstName, lastName);
        this.alterEgo = alterEgo;
        this.age = age;
    }   
}