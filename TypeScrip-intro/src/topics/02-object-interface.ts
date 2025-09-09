

const skills:string[] =['Bash','Counter','Healing'] //cumplir con el tipado



interface Character {
    name:string;
    hp:number;
    skills:string[];
    hometown?:string; //propiedad ? que es opcional
}

const strider:Character={
    name:'Strider',
    hp:100,
    skills:['Bash','Counter']
}

strider.hometown='Rivendell';
console.table(strider);







export {}; // Evitar conflictos de nombres en el scope global