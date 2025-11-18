# TypeScript-Assignment
2) Keyof is a keyword in TypeScript which is used to extract the key type from an object type.
   example:
   interface Man{
   name: string;
   age: number;

   }
   function printManInfo(man: Man, info: keyof Man){
    console.log(`Giving man info ${info}: "${man[info]}"`);
   }
   let man = {
   name: "shanto",
   age= 24
   };
   printManInfo(man, "name");

   4) enums define a set of named constants to improve code redability & safety.
      example: enum Direction{ North, East, South, West)
               enum Color { Red= "RED", Blue ="BLUE"}
