// ঠিক আছে — আমি তোমাকে **MongoDB `$lookup` stage** আর **Embedding vs Referencing** দুটোই বাংলায় ব্যাখ্যা করব, আর তুমি চাইলে এগুলোর জন্য আমি একটা ভিজ্যুয়াল চার্টও বানিয়ে দিতে পারব।

// ---

// ## 1️⃣ `$lookup` — Aggregation-এ Join করা

// MongoDB সাধারণত SQL এর মত `JOIN` সমর্থন করে না, কিন্তু `$lookup` দিয়ে দুইটা collection-এর data **join** করা যায়।

// ---

// ### Structure:

// ```js
// {
//   $lookup: {
//     from: "<other_collection>",      // কোন collection এর সাথে join হবে
//     localField: "<field_in_current>", // বর্তমান collection এর field
//     foreignField: "<field_in_other>", // অন্য collection এর matching field
//     as: "<output_array_field>"        // joined result কোন নামে array হবে
//   }
// }
// ```

// ---

// ### Example:

// `orders` collection এবং `customers` collection join করা:

// ```js
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customerInfo"
//     }
//   }
// ])
// ```

// 📌 Output এ `customerInfo` নামে একটা array আসবে, যেটাতে matching customer data থাকবে।

// ---

// ## 2️⃣ Embedding vs Referencing

// MongoDB তে related data store করার দুটি মূল উপায়:

// ---

// ### **📦 Embedding** (Nested document)

// * Related data main document এর ভিতরে রাখা হয়।
// * **Pros:**

//   * একসাথে read করা সহজ, কোনো `$lookup` দরকার নেই।
//   * Performance ভালো যখন সব data একসাথে লাগে।
// * **Cons:**

//   * Data repeat হতে পারে (duplication)।
//   * Update করলে অনেক জায়গায় করতে হবে।

// **Example:**

// ```js
// {
//   _id: 1,
//   name: "John",
//   orders: [
//     { item: "Pen", qty: 2 },
//     { item: "Book", qty: 1 }
//   ]
// }
// ```

// ---

// ### **🔗 Referencing** (Normalization)

// * Related data আলাদা collection এ থাকে, আর main document শুধু reference (id) রাখে।
// * **Pros:**

//   * Data duplication কম।
//   * Update সহজ — শুধু এক জায়গায় করতে হয়।
// * **Cons:**

//   * Read করার সময় `$lookup` বা আলাদা query লাগে।

// **Example:**

// ```js
// // customers collection
// { _id: 1, name: "John" }

// // orders collection
// { _id: 101, customerId: 1, item: "Pen", qty: 2 }
// ```

// ---

// ### কখন কোনটা ব্যবহার করবে?

// * **Embedding:** যখন relation "one-to-few" এবং সবসময় একসাথে read করতে হবে।
// * **Referencing:** যখন relation "one-to-many" বা অনেক বড় data থাকে, আর সবসময় একসাথে পড়ার দরকার হয় না।

// ---

// 💡 যদি তুমি চাও আমি তোমাকে `$lookup` ব্যবহার করে **Referencing** data কিভাবে join করে complete JSON বানাতে হয়, সেটা live example দিয়ে করে দেখাতে পারি।
// এতে তোমার `$lookup` আর embedding/referencing দুটোই crystal clear হয়ে যাবে।




// test data guloke order collection er shate add kora hoyeche,join hishebe kaj kore


// db.orders.aggregate([
    
    
//     {
//         $lookup: {
//                from: "test",
//                localField: "userId",
//                foreignField: "_id",
//                as: "users"
//              }
//     }
    
    
//     ])