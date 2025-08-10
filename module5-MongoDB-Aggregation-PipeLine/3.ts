

// ঠিক আছে — এখন আমি আপনাকে **MongoDB Aggregation Pipeline** এর `$group`, `$sum`, আর `$push` বাংলায় ব্যাখ্যা করবো, সাথে উদাহরণ দেবো যাতে সহজে বুঝতে পারেন।

// ---

// ## **1️⃣ `$group`**

// **কাজ:**
// ডকুমেন্টগুলোকে **একটা গ্রুপিং কী** (যেমন `category`, `department`) অনুযায়ী গ্রুপ করে, তারপর প্রতিটা গ্রুপের জন্য কিছু হিসাব-নিকাশ (count, sum, avg ইত্যাদি) করে।

// **Syntax:**

// ```js
// { 
//   $group: { 
//     _id: <group_by_field>, 
//     <নতুন_ফিল্ড>: { <accumulator>: <expression> } 
//   } 
// }
// ```

// * `_id` → যেই ফিল্ড দিয়ে গ্রুপ করবেন (বা একাধিক ফিল্ডও হতে পারে)
// * `<accumulator>` → `$sum`, `$avg`, `$push` ইত্যাদি

// ---

// ## **2️⃣ `$sum`**

// **কাজ:**

// * গ্রুপে থাকা ডকুমেন্টগুলোর সংখ্যা গণনা করতে বা
// * কোনো ফিল্ডের মোট যোগফল বের করতে

// **Syntax:**

// ```js
// { $sum: <number_or_expression> }
// ```

// **উদাহরণ 1 — শুধু গণনা (count):**

// ```js
// db.orders.aggregate([
//   { $group: { _id: "$customerId", totalOrders: { $sum: 1 } } }
// ])
// ```

// ➡ এখানে `$sum: 1` মানে প্রতিটা ডকুমেন্টের জন্য ১ যোগ হবে → মোট অর্ডারের সংখ্যা।

// **উদাহরণ 2 — মোট টাকার যোগফল:**

// ```js
// db.orders.aggregate([
//   { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } }
// ])
// ```

// ➡ এখানে `$sum: "$amount"` মানে প্রতিটা অর্ডারের `amount` যোগ হবে।

// ---

// ## **3️⃣ `$push`**

// **কাজ:**
// প্রতিটা গ্রুপে থাকা ডকুমেন্টের কোনো ফিল্ডের মান **একটা অ্যারেতে** জমা করা।

// **Syntax:**

// ```js
// { $push: <expression> }
// ```

// **উদাহরণ:**

// ```js
// db.orders.aggregate([
//   { 
//     $group: { 
//       _id: "$customerId", 
//       allProducts: { $push: "$productName" } 
//     } 
//   }
// ])
// ```

// ➡ এখানে প্রতিটা কাস্টমারের সব প্রোডাক্টের নাম একসাথে একটা অ্যারেতে চলে আসবে।

// ---

// ## **🎯 ফুল উদাহরণ**

// ধরুন `sales` কালেকশনে আছে:

// ```json
// [
//   { "category": "Electronics", "product": "Laptop",  "price": 1000 },
//   { "category": "Electronics", "product": "Phone",   "price": 800 },
//   { "category": "Clothing",    "product": "Shirt",   "price": 50 },
//   { "category": "Clothing",    "product": "Jeans",   "price": 60 }
// ]
// ```

// Aggregation:

// ```js
// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       totalSales: { $sum: "$price" },
//       products: { $push: "$product" }
//     }
//   }
// ])
// ```

// **Result:**

// ```json
// [
//   {
//     "_id": "Electronics",
//     "totalSales": 1800,
//     "products": ["Laptop", "Phone"]
//   },
//   {
//     "_id": "Clothing",
//     "totalSales": 110,
//     "products": ["Shirt", "Jeans"]
//   }
// ]
// ```

// ---

// আপনি চাইলে আমি এর সাথে `$avg` আর `$addToSet` যোগ করে দেখাতে পারি, যেগুলো `$sum` আর `$push` এর কাছাকাছি কাজ করে কিন্তু কিছু পার্থক্য আছে।
// আপনি কি চান আমি সেটা করে দিই?





//  db.test.aggregate([
     
     
//      {$group: { _id: "$age",totalAge:{$sum:1}}}
     
     
//      ])


// db.test.aggregate([
     
     
//      {$group: { _id: "$age",totalAge:{$sum:1},allName:{$push:"$name"}}}
     
     
//      ])










// if want to push all document an array  use ($$ROOT)


//  db.test.aggregate([
     
     
//      {$group: { _id: "$age",count:{$sum:1},totalAge:{$sum:"$age"},allDocuments:{$push:"$$ROOT"}}}
     
     
//      ])




        