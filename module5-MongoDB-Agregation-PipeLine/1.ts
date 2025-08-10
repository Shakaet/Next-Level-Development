

// Alright — let’s go deep but keep it clear 😎



// ---

// ## **1️⃣ `$match` Stage**

// **Purpose:**
// Filters documents in the aggregation pipeline, just like the `find()` query filter.
// It decides which documents go to the next stage.

// **Syntax:**

// ```js
// { $match: { <query> } }
// ```

// **Example:**
// Suppose you have a `products` collection:

// ```json
// [
//   { "name": "Laptop", "price": 1000, "category": "Electronics" },
//   { "name": "Shirt",  "price": 50,   "category": "Clothing" },
//   { "name": "Phone",  "price": 800,  "category": "Electronics" }
// ]
// ```

// If you want only **Electronics**:

// ```js
// db.products.aggregate([
//   { $match: { category: "Electronics" } }
// ])
// ```

// **Result:**

// ```json
// [
//   { "name": "Laptop", "price": 1000, "category": "Electronics" },
//   { "name": "Phone",  "price": 800,  "category": "Electronics" }
// ]
// ```

// **Key Notes:**

// * Runs **before** `$project` usually (to reduce data early for performance).
// * Supports **all query operators** like `$gt`, `$in`, `$and`, `$or`.

// ---

// ## **2️⃣ `$project` Stage**

// **Purpose:**
// Controls which fields are passed along, and can create **computed fields**.

// **Syntax:**

// ```js
// { $project: { <field1>: 1, <field2>: 0, <newField>: <expression> } }
// ```

// * `1` → include the field
// * `0` → exclude the field
// * `<expression>` → create a new computed field

// **Example 1 — Include only name and price:**

// ```js
// db.products.aggregate([
//   { $project: { name: 1, price: 1, _id: 0 } }
// ])
// ```

// **Result:**

// ```json
// [
//   { "name": "Laptop", "price": 1000 },
//   { "name": "Shirt",  "price": 50 },
//   { "name": "Phone",  "price": 800 }
// ]
// ```

// **Example 2 — Add a discounted price field:**

// ```js
// db.products.aggregate([
//   { $project: {
//       name: 1,
//       price: 1,
//       discountedPrice: { $multiply: ["$price", 0.9] }, // 10% off
//       _id: 0
//     }
//   }
// ])
// ```

// **Result:**

// ```json
// [
//   { "name": "Laptop", "price": 1000, "discountedPrice": 900 },
//   { "name": "Shirt",  "price": 50,   "discountedPrice": 45 },
//   { "name": "Phone",  "price": 800,  "discountedPrice": 720 }
// ]
// ```

// ---

// ## **💡 Best Practice**

// * **Use `$match` early** to filter data → faster pipeline.
// * **Use `$project` after `$match`** to limit or transform the fields.

// ---

// If you want, I can explain **`$group`** next, because `$match + $project + $group` is the holy trinity of MongoDB aggregation.
// Do you want me to go for that next?



// aggregation pipeline

// db.test.aggregate([
    
//     //stage 1:
//     {$match:{email:"weffnert2r@networkadvertising.org"} },
    
//     //stage 2:
//     {$project: {email:1,age:1,gender:1,address:1,_id:0}}
    
    
//     ]).pretty()