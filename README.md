# TypeScript-Assignment
2) keyof হলো TypeScript-এর একটি কীওয়ার্ড, যা কোনো object type থেকে তার key-গুলোর টাইপ বের করতে ব্যবহার করা হয়।
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

   4) Enums হলো TypeScript-এ নাম দিয়ে একটি নির্দিষ্ট মানের সেট তৈরি করার উপায়।
এতে কোড আরও পরিষ্কার এবং সুরক্ষিত হয় (readability & safety বাড়ে)।
      example: enum Direction{ North, East, South, West)
               enum Color { Red= "RED", Blue ="BLUE"}
