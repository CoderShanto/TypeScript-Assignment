function formatValue(value: string|number|boolean):string|number|boolean{
if(typeof value == 'string'){
    return value.toUpperCase();
}else if(typeof value == 'number'){
    return value *10;
}else{
    return !value;
}
}
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

function getLength(value:string|any[]): number {
    if(typeof value == 'string'){
      return value.length;
    }else{
        return value.length;
    }
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

class Person{
        name: string;
        age:number;

        constructor(name:string, age: number){
            this.name = name;
            this.age = age;
        }
        getDetails():string{
            return `'Name: ${this.name}, Age: ${this.age}'`;
        }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());


interface Item{
    title: string;
    rating: number;
   
}
 function filterByRating(items: Item[]): Item[]{
  return items.filter(item=> item.rating >= 4);
    }

const books: Item[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2},
    { title: 'Book C', rating: 5.0},
];

const result = filterByRating(books);

console.log("[\n" + 
    result
    .map((item) =>
        ` {title: '${item.title}', rating: ${item.rating.toFixed(1)} },`
).join("\n") + "\n];");

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]): User[]{
    return users.filter(user=>user.isActive);
}
const users : User[] = [
    {id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true},
     {id: 2, name: 'Asha', email: 'asha@example.com', isActive: false},
      {id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true},

];

const result = filterActiveUsers(users);

console.log("[\n" + 
    result
    .map((user) =>
        ` {id: ${user.id}, name: ${user.name}, email: ${user.email}, isActive: ${user.isActive} },`
).join("\n") + "\n];");

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): void{
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);

}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);

function getUniqueValues(array1: (string | number)[], 
                        array2: (string | number)[]): 
                        (string | number)[]{

     const result: (string | number)[] = [];
     
     for(let i = 0; i<array1.length; i++){
        let isDuplicate = false;
      for( let j = 0; j<result.length; j++){
        if(result[j] === array1[i]){
            isDuplicate = true;
            break;
        }
      }  
       if(!isDuplicate){
        result.push(array1[i]!);
       }
     }

     for(let i = 0; i<array2.length; i++){
        let isDuplicate = false;
      for( let j = 0; j<result.length; j++){
        if(result[j] === array2[i]){
            isDuplicate = true;
            break;
        }
      }  
       if(!isDuplicate){
        result.push(array2[i]!);
       }
     }
     return result;

}
const array1 = [1,2,3,4,5];
const array2 = [3,4,5,6,7];
const unique = getUniqueValues( array1, array2);

console.log('[' + unique.join(', ') + '];');


interface Product{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number{
    return products
          .map(product => {
               const { price, quantity, discount = 0} = product;
            return price * quantity * (1 - discount / 100);
          })
           .reduce((total,productTotal) => total + productTotal, 0);
}
const products: Product[] = [
    { name: 'Pen', price: 10, quantity: 2},
    { name: 'Notebook', price: 25, quantity: 3, discount: 10},
    { name: 'Bag', price: 50, quantity: 1, discount: 20},
];

const total = calculateTotalPrice(products);
console.log(total.toFixed(1));