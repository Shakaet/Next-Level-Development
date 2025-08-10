// ঠিক আছে, এবার আমি আপনাকে **MongoDB Aggregation Pipeline** এর তিনটা স্টেজ — `$addFields`, `$out`, এবং `$merge` — বাংলায় বুঝিয়ে দিচ্ছি।

// ---

// ## **1️⃣ `$addFields`**

// **কাজ:**
// বিদ্যমান ডকুমেন্টে নতুন ফিল্ড যোগ করা বা পুরানো ফিল্ড পরিবর্তন করা।
// এটা `$project` এর মতো, কিন্তু এখানে শুধু **ফিল্ড যোগ/আপডেট** করা হয়, বাকি ফিল্ড বাদ যায় না।

// **Syntax:**

// ```js
// { $addFields: { <নতুন_ফিল্ড>: <expression> } }
// ```

// **Example:**
// ধরুন `students` কালেকশনে আছে:

// ```json
// { "name": "Rahim", "marks": 80 }
// ```

// Aggregation:

// ```js
// db.students.aggregate([
//   { $addFields: { grade: "A", bonusMarks: { $add: ["$marks", 5] } } }
// ])
// ```

// **Result:**

// ```json
// { "name": "Rahim", "marks": 80, "grade": "A", "bonusMarks": 85 }
// ```

// ---

// ## **2️⃣ `$out`**

// **কাজ:**
// Aggregation এর রেজাল্ট সরাসরি **একটা নতুন কালেকশনে** বা বিদ্যমান কালেকশনে **ওভাররাইট** করে লিখে দেয়।

// **Syntax:**

// ```js
// { $out: "collectionName" }
// ```

// **Example:**

// ```js
// db.students.aggregate([
//   { $match: { marks: { $gte: 50 } } },
//   { $out: "passed_students" }
// ])
// ```

// ➡ এখানে `passed_students` নামে নতুন কালেকশন তৈরি হবে, যেখানে শুধু পাস করা স্টুডেন্টদের ডাটা থাকবে।

// **নোট:**

// * `$out` দিলে রেজাল্ট Mongo Shell এ দেখাবে না, সরাসরি কালেকশনে লিখে দেবে।
// * বিদ্যমান কালেকশনের নাম দিলে পুরনো ডাটা ডিলিট হয়ে নতুন ডাটা বসবে।

// ---

// ## **3️⃣ `$merge`**

// **কাজ:**
// Aggregation এর রেজাল্ট একটা কালেকশনে **ইনসার্ট/আপডেট/মার্জ** করে দেয়, পুরনো ডাটা মুছে ফেলে না (যদি না সেটিংসে বলা হয়)।
// এটা `$out` এর মতো, কিন্তু অনেক বেশি ফ্লেক্সিবল।

// **Syntax:**

// ```js
// {
//   $merge: {
//     into: "collectionName",
//     on: "_id", // ম্যাচ করার জন্য কোন ফিল্ড
//     whenMatched: "merge", // update, merge, replace
//     whenNotMatched: "insert" // insert, discard, fail
//   }
// }
// ```

// **Example:**

// ```js
// db.students.aggregate([
//   { $match: { marks: { $gte: 50 } } },
//   {
//     $merge: {
//       into: "passed_students",
//       on: "_id",
//       whenMatched: "merge",
//       whenNotMatched: "insert"
//     }
//   }
// ])
// ```

// ➡ এখানে `passed_students` কালেকশনে পাস করা স্টুডেন্টদের ডাটা আপডেট হবে (যদি থাকে) অথবা ইনসার্ট হবে (যদি না থাকে)।

// ---

// ### 📌 সংক্ষিপ্ত তুলনা:

// | Stage        | কাজ                         | পুরনো ডাটা থাকে?         |
// | ------------ | --------------------------- | ------------------------ |
// | `$addFields` | নতুন/আপডেট ফিল্ড যোগ করা    | হ্যাঁ                    |
// | `$out`       | রেজাল্ট নতুন কালেকশনে লেখা  | না (পুরনো ডিলিট)         |
// | `$merge`     | রেজাল্ট মার্জ/আপডেট/ইনসার্ট | হ্যাঁ/না (অপশন অনুযায়ী) |

// ---

// আমি চাইলে আপনার জন্য `$addFields`, `$out`, আর `$merge` নিয়ে **একটা প্র্যাকটিক্যাল ফুল উদাহরণ** বানিয়ে দিতে পারি যেখানে তিনটাকে একসাথে ব্যবহার করা হবে।
// আপনি কি চান আমি সেটা বানাই?


// db.test.aggregate([
//     {$match: {email:"weffnert2r@networkadvertising.org"}},
//     {$addFields:{roll:2089,university:"puc"}},
//     {$project: {roll:1,university:1}},
//     {$out: "students"}
    
    
//     ])



//  $out notun collection e data dhukhay but original document ke changed korena,jodi original documents ke changed korte hoy tokhon merge use korte hove

// db.test.aggregate([
//     {$match: {email:"weffnert2r@networkadvertising.org"}},
//     {$addFields:{roll:2089,university:"puc"}},
//     {$project: {roll:1,university:1}},
//     {$merge: "test"}
    
    
//     ])






    
