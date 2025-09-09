function addNumbers(a:number,b:number){
    return a+b;
}

const addNumbersArrow=(a:number,b:number):string=>{
    return `${a+b}`;
}


function multiply(firstnumber:number,secondnumber?:number,base:number=2):number{
    return firstnumber*base;
}



// const result:number=addNumbers(4,5)
// // tipado estricto
// const result2:string=addNumbersArrow(4,5)

// console.log(result2);
// console.log(result);

interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}


const healCharacter=(character:Character,amount:number)=>{
    
    character.hp+=amount;

}

const strider:Character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
}
}

healCharacter(strider,20);
strider.showHp();

export{};