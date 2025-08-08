

//1  db.test.insertMany([{ name: "rafe", roll: 2075 }, { name: "protik", roll: 2075 }])

//2  db.test.insertOne({ name: "rafe", roll: 2075})

//3  db.test.find({age:17})
//4  db.test.findOne({age:17})
 
//feild filtering
//5  db.test.find({gender:"Male"},{name:1,gender:1})     //eta mane holo feild filtering, mane holo gender male wala je je document ache, ogulor shudu name and gender feild dao

// evabeo feild filtering kora jay but eta shudu find er shatei hobe findOne er shate hobe na

//6  db.test.find({gender:"Female"}).project({name:1,email:1})
    

//7  db.test.find({gender:"Female"}).project({name:0,email:0,phone:0}), eta mane holo name,email,phone property baad diye baki gulo dekhao






//


// MongoDB-তে আপনি ডেটা **filter** করতে বিভিন্ন comparison operator ব্যবহার করতে পারেন। নিচে `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, এবং `$lte` অপারেটরগুলো ব্যাখ্যা সহ উদাহরণসহ দেওয়া হলো:

// ---

// ### ✅ 1. `$eq` – **Equal to**

// একটি নির্দিষ্ট value-এর সাথে field-এর মান match করে।

// ```js
// db.users.find({ age: { $eq: 25 } })
// // age = 25 এমন সকল ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ 2. `$ne` – **Not equal to**

// একটি নির্দিষ্ট value ছাড়া বাকি সব দেখায়।

// ```js
// db.users.find({ age: { $ne: 25 } })
// // age ≠ 25 এমন সকল ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ 3. `$gt` – **Greater than**

// একটি নির্দিষ্ট মানের চেয়ে বেশি হলে।

// ```js
// db.users.find({ age: { $gt: 25 } })
// // age > 25 এমন ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ 4. `$lt` – **Less than**

// একটি নির্দিষ্ট মানের চেয়ে কম হলে।

// ```js
// db.users.find({ age: { $lt: 25 } })
// // age < 25 এমন ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ 5. `$gte` – **Greater than or equal to**

// একটি নির্দিষ্ট মানের সমান বা বেশি হলে।

// ```js
// db.users.find({ age: { $gte: 18 } })
// // age ≥ 18 এমন ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ 6. `$lte` – **Less than or equal to**

// একটি নির্দিষ্ট মানের সমান বা কম হলে।

// ```js
// db.users.find({ age: { $lte: 30 } })
// // age ≤ 30 এমন ডকুমেন্ট দেখাবে
// ```

// ---

// ### ✅ Combo Example:

// ```js
// db.users.find({ age: { $gte: 18, $lte: 30 } })
// // 18 ≤ age ≤ 30 এর মধ্যে থাকা ডকুমেন্টগুলো
// ```

// ---

// প্রয়োজনে আরো complex query বা operator চাইলে বলো, আমি বুঝিয়ে দিব।





// চলো সহজভাবে সবগুলো ব্যাখ্যা করি:

// ---

// ### 🔹 `$in` — "মধ্যে আছে কিনা"

// ```js
// db.users.find({ age: { $in: [20, 25, 30] } })
// ```

// 👉 এটি সেইসব ডেটা বের করবে যেগুলোর `age` ২০, ২৫, অথবা ৩০ — এর মধ্যে যেকোনো একটায় মিলে যায়।

// ---

// ### 🔹 `$nin` — "মধ্যে নেই"

// ```js
// db.users.find({ age: { $nin: [20, 25, 30] } })
// ```

// 👉 এটি বের করবে যেসব ডেটার `age` **২০, ২৫, ৩০ নয়** — মানে এই তিনটি বাদ দিয়ে বাকি সব।

// ---

// ### 🔹 **Implicit AND Condition** — "অন্তর্নিহিত `AND`"

// MongoDB তে যখন তুমি একাধিক ফিল্ড লিখো, তখন সেগুলোর মধ্যে **`AND`** ধরে নেয়:

// ```js
// db.users.find({ age: 25, name: "Shakaet" })
// ```

// 👉 উপরের কোডটি বোঝায়:
// **`age` হতে হবে ২৫ এবং `name` হতে হবে "Shakaet"**
// এখানে আমরা আলাদা করে `$and` লিখিনি, কিন্তু MongoDB বুঝে নিচ্ছে — তাই এটাকে **Implicit AND** বলে।

// ---

// ### 🔸 চাইলে তুমি Explicit AND এভাবে লিখতে পারো:

// ```js
// db.users.find({ $and: [ { age: 25 }, { name: "Shakaet" } ] })
// ```

// এটা পুরোপুরি একই কাজ করবে, শুধু স্পষ্টভাবে `AND` লেখা হয়েছে।

// ---

// ### 📝 সংক্ষেপে:

// | অপারেটর        | কাজ                                                 |
// | -------------- | --------------------------------------------------- |
// | `$in`          | নির্দিষ্ট মানগুলোর মধ্যে থাকলে                      |
// | `$nin`         | নির্দিষ্ট মানগুলোর মধ্যে না থাকলে                   |
// | `Implicit AND` | একাধিক কন্ডিশন একসাথে দিলে নিজে নিজেই `AND` ধরে নেয় |
// | `$and`         | নিজে হাতে স্পষ্টভাবে `AND` দিলে                     |

// ---

// প্রয়োজন হলে আমি তোমার কাঙ্ক্ষিত ডেটা বা কন্ডিশনের ওপর ভিত্তি করে উদাহরণ দিয়েও বুঝিয়ে দিতে পারি। বললেই হলো! ✅

// db.test.find({gender:"Male"},{name:1,gender:1})


// db.test.find({gender:"Female"}).project({name:0,email:0,phone:0})


// db.test.find({age:{$gte:30,$lte:100}}).sort({ age:-1 }).project({name:1})


//  db.test.find({age:{$in:[1,2,3,4,5,6]}}).sort({ age:1 })

// db.test.find({age:1,email:"tilyunin21@printfriendly.com"})

// db.test.find({gender:"Female",age:{$lt:30,$gt:18},
//     interests:{$in:["Gaming", "Travelling", "Reading"] }
// }
// ,{age:1,gender:1,interests:1})
// .sort({age:1})


// db.test.find().limit(2)

 // db.test.find({age:{$lte:70,$gte:50},gender:"Female"},{gender:1,interested:1,age:1,_id:0}).sort({ age:1 })
       
       // db.test.find({age:{$in:[10,20,30]},gender:"Female"},{gender:1,interests:1,age:1,_id:0}).sort({ age:1 })



//        MongoDB-তে `$and` ও `$or` হচ্ছে **logical operators**, আর **implicit vs explicit** হচ্ছে এসব operator কীভাবে ব্যবহার করা হয়—**পরোক্ষভাবে (implicit)** না **সরাসরি (explicit)**।

// ---

// ## 🔹 `$and` vs `$or`

// ### ✅ `$and`

// * **শর্তগুলো সবগুলো পূরণ করতে হবে।**
// * Default behavior – মানে তুমি যদি একাধিক field একসাথে query দাও, MongoDB নিজেই `implicit $and` ধরে নেয়।

// #### ✅ উদাহরণ (Explicit):

// ```js
// db.users.find({
//   $and: [
//     { age: { $gte: 18 } },
//     { status: "active" }
//   ]
// });
// ```

// #### ✅ উদাহরণ (Implicit):

// ```js
// db.users.find({
//   age: { $gte: 18 },
//   status: "active"
// });
// ```

// > এখানে `age` আর `status` একসাথে দেওয়ায় MongoDB নিজেই `$and` ধরে নিচ্ছে।

// ---

// ### ✅ `$or`

// * **যেকোনো একটা শর্ত পূরণ করলেই হবে।**
// * একে **explicit** ভাবেই লিখতে হয়।

// #### ✅ উদাহরণ:

// ```js
// db.users.find({
//   $or: [
//     { age: { $lt: 18 } },
//     { status: "inactive" }
//   ]
// });
// ```

// ---

// ## 🔸 Implicit vs Explicit (সারাংশ)

// | বিষয়      | Implicit                           | Explicit                                         |
// | --------- | ---------------------------------- | ------------------------------------------------ |
// | **\$and** | `{ field1: cond1, field2: cond2 }` | `{ $and: [ {field1: cond1}, {field2: cond2} ] }` |
// | **\$or**  | ❌ নেই                              | `{ $or: [ {...}, {...} ] }`                      |

// ---

// ## ✅ আরও উদাহরণ:

// ### 🔹 Implicit `$and`:

// ```js
// db.products.find({
//   category: "Electronics",
//   price: { $lt: 500 }
// });
// ```

// ### 🔹 Explicit `$and`:

// ```js
// db.products.find({
//   $and: [
//     { category: "Electronics" },
//     { price: { $lt: 500 } }
//   ]
// });
// ```

// ---

// ### 🔹 `$or` এর case:

// ```js
// db.products.find({
//   $or: [
//     { price: { $lt: 100 } },
//     { rating: { $gte: 4.5 } }
//   ]
// });
// ```

// ---

// ## ✅ যখন `$and` লাগে?

// * যখন nested `$or`, `$in`, বা complex queries থাকে, তখন `$and` ব্যবহার করাই ভালো।

// ## ❗ Bonus: `$nor`, `$not` আছে আরো:

// * `$nor`: কোনোটিই পূরণ না হলে
// * `$not`: condition negate করে

// ---

// ### তোমার কোডের context এ যদি চাও:

// ```js
// db.test.find({
//   $or: [
//     { name: "Alice" },
//     { age: { $lt: 20 } }
//   ]
// }).limit(2)
//   .sort({ _id: -1 });
// ```

// ---

// বুঝতে পারছো তো? চাইলে তোমার data structure দাও, practice query লিখে বুঝিয়ে দিই।


// নিশ্চয়! চলুন সহজভাবে বাংলায় বুঝে নিই MongoDB-এর `$not` এবং `$nor` কীভাবে কাজ করে।

// ---

// ## 🔹 `$not` কী?

// * `$not` ব্যবহার করা হয় **একটি নির্দিষ্ট কন্ডিশনের বিপরীত ফলাফল** পেতে।
// * এটি শুধুমাত্র **একটি অপারেটরের ভেতরে** কাজ করে, যেমন `$gt`, `$regex`, `$in` ইত্যাদি।

// ### ✅ উদাহরণ:

// ```js
// db.users.find({ age: { $not: { $gt: 30 } } })
// ```

// **মানে:** যাদের বয়স **৩০-এর বেশি না**, তাদের দেখাও। অর্থাৎ, `age ≤ 30`।

// ---

// ## 🔹 `$nor` কী?

// * `$nor` ব্যবহার করা হয় **বহু শর্তের বিপরীত ফলাফল** পেতে।
// * `$nor` এর ভেতরে একাধিক condition থাকে, এবং যেসব ডকুমেন্ট **একটাও শর্ত মেনে না**, কেবল সেগুলো রিটার্ন হয়।

// ### ✅ উদাহরণ:

// ```js
// db.users.find({
//   $nor: [
//     { age: { $gt: 30 } },
//     { city: "Dhaka" }
//   ]
// })
// ```

// **মানে:** যাদের বয়স **৩০-এর বেশি না** এবং শহর **Dhaka না**, শুধু তাদেরই দেখাও।

// ---

// ## 🔁 তুলনা:

// | অপারেটর | কাজ                                      |
// | ------- | ---------------------------------------- |
// | `$not`  | এক শর্তের বিপরীত চায়                     |
// | `$nor`  | একাধিক শর্তের একটিও না মানলে রেজাল্ট দেয় |

// ---

// ## 📌 ছোট টিপস:

// * `$not` = এক শর্ত → "না"
// * `$nor` = অনেক শর্ত → "একটাও না"

// ---

// চাও চাইলে আমি এই `$not` ও `$nor` দিয়ে কিছু প্র্যাকটিস টাস্ক ও দিতে পারি। বলো কি করব?


// db.test.find({age:{$not:{$gt:30}}}).sort({age:1})

//  db.test.find({$nor:[{age:30},{gender:"Female"}]})



// MongoDB-র `$exists`, `$type`, আর `$size` — এই তিনটা query operator খুব কাজের, বিশেষ করে ডেটার গঠন এবং নির্দিষ্ট ফিল্ড আছে কিনা বা তার ধরন কী সেটা চেক করার জন্য। নিচে বাংলায় সহজভাবে ব্যাখ্যা করছি:

// ---

// ### ✅ **1. `$exists`**

// **কাজ:**
// ফিল্ডটি ডকুমেন্টে আছে কি না, সেটা যাচাই করতে ব্যবহার হয়।

// **সিনট্যাক্স:**

// ```js
// db.collection.find({ fieldName: { $exists: true } })
// ```

// **উদাহরণ:**

// ```js
// db.users.find({ email: { $exists: true } })
// ```

// মানে যেসব ডকুমেন্টে `email` নামের ফিল্ড আছে, সেগুলোই রিটার্ন করবে।

// আর যদি চাই যেসব ডকুমেন্টে `email` নেই:

// ```js
// db.users.find({ email: { $exists: false } })
// ```

// ---

// ### ✅ **2. `$type`**

// **কাজ:**
// কোনো ফিল্ডের ডেটাটাইপ (type) কী, সেটা চেক করতে।

// **সিনট্যাক্স:**

// ```js
// db.collection.find({ fieldName: { $type: "string" } })
// ```

// **Supported Types (কিছু সাধারণ):**

// * `"double"` বা `1`
// * `"string"` বা `2`
// * `"object"` বা `3`
// * `"array"` বা `4`
// * `"bool"` বা `8`
// * `"date"` বা `9`

// **উদাহরণ:**

// ```js
// db.users.find({ age: { $type: "int" } })
// ```

// মানে `age` যেগুলোর ডেটা টাইপ ইন্টিজার, সেগুলোই রিটার্ন করবে।

// ---

// ### ✅ **3. `$size`**

// **কাজ:**
// যে ফিল্ডটি একটি **array**, সেটার ভিতরে কয়টা আইটেম আছে সেটা যাচাই করতে `$size` ব্যবহার হয়।

// **সিনট্যাক্স:**

// ```js
// db.collection.find({ arrayField: { $size: 3 } })
// ```

// **উদাহরণ:**

// ```js
// db.students.find({ subjects: { $size: 3 } })
// ```

// মানে যেসব স্টুডেন্টের `subjects` array-তে ঠিক ৩টি subject আছে, সেগুলো দেখাবে।

// > ❗ `$size` কেবলমাত্র **array fields**-এর উপর কাজ করে।

// ---

// ### ✅ মিলিয়ে একটা উদাহরণ:

// ```js
// db.posts.find({
//   tags: { $exists: true, $type: "array", $size: 2 }
// })
// ```

// মানে: `tags` নামের ফিল্ডটা থাকতে হবে, সেটা array হতে হবে, এবং সেই array-এর ভিতরে ২টি আইটেম থাকতে হবে।

// ---

// প্রয়োজন হলে আমি প্র্যাকটিসের জন্য কিছু query-র টাস্কও দিতে পারি। বললে দিচ্ছি।

//  db.test.find({age:{$exists:true},gender:"Female"})

// db.test.find({age:{$type:"number"}})

// db.test.find({skills:{$size:4}})





// চমৎকার প্রশ্ন! এবার আমরা বুঝব MongoDB-এর `$all` এবং `$elemMatch` অপারেটর — বাংলায় সহজ করে ব্যাখ্যা করছি:

// ---

// ## 🔸 `$all` অপারেটর

// ### 📌 কাজ কী?

// `$all` দিয়ে তুমি চেক করতে পারো কোনো **array-এর মধ্যে একাধিক নির্দিষ্ট মান** আছে কি না।

// ### ✅ উদাহরণ:

// ধরি আমাদের ডেটাবেইসে `skills` নামে একটি array আছে:

// ```js
// {
//   name: "Abdulla",
//   skills: ["HTML", "CSS", "JavaScript", "MongoDB"]
// }
// ```

// এখন আমরা খুঁজতে চাই যেসব ডকুমেন্টে **"HTML" এবং "JavaScript" দুইটাই আছে**:

// ```js
// db.users.find({
//   skills: { $all: ["HTML", "JavaScript"] }
// })
// ```

// ### 🔍 ব্যাখ্যা:

// * `$all` চায়: যেসব ডকুমেন্টের `skills` array-এ **সবগুলো মান** (HTML, JavaScript) **আছে**।

// ---

// ## 🔸 `$elemMatch` অপারেটর

// ### 📌 কাজ কী?

// `$elemMatch` তখন ব্যবহার করা হয় যখন তুমি **array-এর মধ্যে অবজেক্ট আছে**, এবং সেই অবজেক্টের **multiple condition** মিলাতে চাও।

// ### ✅ উদাহরণ:

// ধরি নিচের মত ডেটা আছে:

// ```js
// {
//   name: "Shakaet",
//   scores: [
//     { subject: "Math", marks: 90 },
//     { subject: "English", marks: 75 }
//   ]
// }
// ```

// আমরা এখন খুঁজতে চাই যেসব ডকুমেন্টে `scores` array-এ **subject = "Math" এবং marks > 80** — এই দুই condition একসাথে match করে:

// ```js
// db.users.find({
//   scores: {
//     $elemMatch: {
//       subject: "Math",
//       marks: { $gt: 80 }
//     }
//   }
// })
// ```

// ### 🔍 ব্যাখ্যা:

// * `scores` হচ্ছে **object এর array**।
// * `$elemMatch` দেখে এমন **একটি অবজেক্ট** আছে কি না যেটা **subject "Math" এবং marks > 80** — দুইটা condition fulfill করে।

// ---

// ## 🔁 তুলনা (স্মরণীয়):

// | অপারেটর      | কী দেখে?                                                      | কখন ব্যবহার করব?                         |
// | ------------ | ------------------------------------------------------------- | ---------------------------------------- |
// | `$all`       | Array-এ সব মান আছে কিনা                                       | যখন multiple value array-তে আছে কিনা চাও |
// | `$elemMatch` | Array-এর কোনো একটা অবজেক্টে multiple condition match করে কিনা | যখন array-এর ভেতরে object থাকে           |

// ---

// চাইলে আমি তোমাকে `$all` এবং `$elemMatch` নিয়ে ২টা practice question দিতে পারি — করবে? 😊

//  db.test.find({friends:{$all:["Jhankar Mahbub","Tanmoy Parvez"]}})


//  db.test.find({education:{
//         $elemMatch:{
//             degree:"Master of Business Administration",
//             year:{$gte:1992}
//         }
            
//         }
//     }})


// jodi ami chai language er 2 no index e Bosnian namok joto document ache ta pawar jonno
//  db.test.find({"languages.2":"Bosnian"})




// MongoDB-তে `$set`, `$addToSet`, এবং `$push` — এই তিনটি operator array বা সাধারণ field update করার জন্য ব্যবহার হয়, কিন্তু এদের কাজ আলাদা। নিচে সহজভাবে ব্যাখ্যা করলাম:

// ---

// ### ✅ `$set`

// 👉 একটি document-এর কোনো field-এর value **set বা update** করতে ব্যবহার হয়।

// **Syntax:**

// ```js
// db.collection.updateOne(
//   { _id: 1 },
//   { $set: { name: "Shakaet", age: 25 } }
// )
// ```

// **ব্যাখ্যা:**

// * যদি `name` বা `age` না থাকে, তাহলে তৈরি করে।
// * থাকলে তার মান update করে।

// ---

// ### ✅ `$push`

// 👉 কোনো array field-এ **নতুন value যোগ করতে** ব্যবহার হয়।

// **Syntax:**

// ```js
// db.collection.updateOne(
//   { _id: 1 },
//   { $push: { hobbies: "reading" } }
// )
// ```

// **ব্যাখ্যা:**

// * `hobbies` array-তে `"reading"` যোগ করে।
// * একই value একাধিকবার থাকতে পারে (duplicate allow করে)।

// ---

// ### ✅ `$addToSet`

// 👉 array field-এ value **জোড়া দেয়, কিন্তু শুধু তখনই যদি value টি আগে না থাকে।**

// **Syntax:**

// ```js
// db.collection.updateOne(
//   { _id: 1 },
//   { $addToSet: { hobbies: "reading" } }
// )
// ```

// **ব্যাখ্যা:**

// * `reading` আগে থেকে না থাকলে যোগ হবে।
// * আগেই থাকলে কিছুই হবে না (duplicate prevent করে)।

// ---

// ### 🎯 তুলনা (Comparison):

// | Operator    | কাজ                 | Duplicate allow করে? |
// | ----------- | ------------------- | -------------------- |
// | `$set`      | value set / update  | N/A                  |
// | `$push`     | array-তে যোগ করে    | হ্যাঁ ✅              |
// | `$addToSet` | array-তে unique যোগ | না ❌                 |

// ---

// ### ✅ একটি বাস্তব উদাহরণ:

// ```js
// db.users.updateOne(
//   { name: "Abdulla" },
//   {
//     $set: { age: 25 },
//     $push: { skills: "MongoDB" },
//     $addToSet: { skills: "JavaScript" }
//   }
// )
// ```

// * `age` হবে ২৫ (set করবে)।
// * `skills` array-তে `"MongoDB"` যোগ হবে (multiple বারও হতে পারে)।
// * `"JavaScript"` আগে না থাকলে যোগ হবে।

// ---

// চাইলে live উদাহরণ সহ demo query দিতে পারি। বললেই দিচ্ছি ভাই 🙂
// আরো concepts বাকি থাকলে জিজ্ঞেস করতে পারো।



//     db.test.updateOne({_id: ObjectId("6406ad63fc13ae5a4000006b")}
//     , {$set:{name:{
//         "firstName" : "abdulla",
// 		"lastName" : "skt"
        
//     }}})


 //db.test.findOne({_id: ObjectId("6406ad63fc13ae5a4000006b")})
    
    // db.test.updateOne( 
    //     {phone:"(984) 5001874"},
    //     {$push:{education:{distric:"cumilla"}}}
    //     )




//     চলো একে একে MongoDB এর গুরুত্বপূর্ণ update অপারেটরগুলো — `$unset`, `$pop`, `$pull`, `$pullAll` — বাংলায় ব্যাখ্যা করি:

// ---

// ### 🔹 `$unset`

// **উদ্দেশ্য:** ডকুমেন্ট থেকে একটি ফিল্ড পুরোপুরি **মুছে ফেলতে** ব্যবহৃত হয়।

// **সিনট্যাক্স:**

// ```js
// db.collection.updateOne(
//   { _id: 1 },
//   { $unset: { fieldName: "" } }
// )
// ```

// **উদাহরণ:**

// ```js
// db.users.updateOne(
//   { name: "Sakayet" },
//   { $unset: { age: "" } }
// )
// ```

// ➡️ এতে `age` নামের ফিল্ডটি ডকুমেন্ট থেকে পুরোপুরি মুছে যাবে।

// ---

// ### 🔹 `$pop`

// **উদ্দেশ্য:** একটি **array এর প্রথম বা শেষ উপাদান** সরাতে ব্যবহৃত হয়।

// **সিনট্যাক্স:**

// ```js
// { $pop: { arrayField: 1 } }   // শেষ উপাদান সরাবে
// { $pop: { arrayField: -1 } }  // প্রথম উপাদান সরাবে
// ```

// **উদাহরণ:**

// ```js
// db.users.updateOne(
//   { name: "Sakayet" },
//   { $pop: { hobbies: 1 } }
// )
// ```

// ➡️ `hobbies` array থেকে **শেষ** উপাদানটি সরাবে।

// ---

// ### 🔹 `$pull`

// **উদ্দেশ্য:** array থেকে একটি নির্দিষ্ট **value বা শর্ত অনুযায়ী উপাদান** সরাতে ব্যবহৃত হয়।

// **সিনট্যাক্স:**

// ```js
// { $pull: { arrayField: value } }
// { $pull: { arrayField: { condition } } }
// ```

// **উদাহরণ ১ (value দিয়ে):**

// ```js
// db.users.updateOne(
//   { name: "Sakayet" },
//   { $pull: { hobbies: "reading" } }
// )
// ```

// ➡️ `hobbies` array থেকে `"reading"` সরাবে।

// **উদাহরণ ২ (condition দিয়ে):**

// ```js
// db.users.updateOne(
//   {},
//   { $pull: { scores: { $lt: 40 } } }
// )
// ```

// ➡️ `scores` array থেকে যেসব ভ্যালু ৪০-এর কম, সেগুলো সরাবে।

// ---

// ### 🔹 `$pullAll`

// **উদ্দেশ্য:** একটি array থেকে **multiple নির্দিষ্ট ভ্যালু** সরাতে ব্যবহৃত হয়।

// **সিনট্যাক্স:**

// ```js
// { $pullAll: { arrayField: [val1, val2, ...] } }
// ```

// **উদাহরণ:**

// ```js
// db.users.updateOne(
//   {},
//   { $pullAll: { hobbies: ["reading", "gaming"] } }
// )
// ```

// ➡️ `hobbies` array থেকে `"reading"` ও `"gaming"` দুটোই সরিয়ে দেবে।

// ---

// ### 🔚 সংক্ষেপে পার্থক্য:

// | অপারেটর    | কাজ                                                     |
// | ---------- | ------------------------------------------------------- |
// | `$unset`   | ফিল্ড মুছে ফেলে                                         |
// | `$pop`     | array থেকে প্রথম/শেষ উপাদান সরায়                        |
// | `$pull`    | array থেকে একটি নির্দিষ্ট মান বা condition অনুযায়ী সরায় |
// | `$pullAll` | array থেকে multiple নির্দিষ্ট মান সরায়                  |

// ---

// প্রয়োজনে উদাহরণ সহ কোড চাইলেই আমি করে দিতে পারি। চাইলে test data নিয়েও প্র্যাকটিস করতে পারো।




 // db.test.updateOne( 
    //     {_id: ObjectId("6406ad63fc13ae5a4000006b")},
    //     {$unset:{friends:"",name:""}}
        
    //     )


      // db.test.updateOne( 
    //     {_id: ObjectId("6406ad63fc13ae5a4000006b")},
    //     {$pop:{interests:1}}
        
    //     )

    // db.test.updateOne( 
    //     {_id: ObjectId("6406ad63fc13ae5a4000006b")},
    //     {$pull:{interests:"Reading"}}
        
    //     )

      // db.test.updateOne( 
      //   {_id: ObjectId("6406ad63fc13ae5a4000006b")},
      //   {$pullAll:{languages:["Thai","Somali"]}}
        
//       //   )


//       MongoDB-তে **array of objects** update করার জন্য আপনি **positional operator `$`** ব্যবহার করতে পারেন। এটি matched করা array element টিকে indicate করে, যাতে আপনি সেই specific element টিকেই update করতে পারেন।

// ---

// ### ✅ **Positional Operator: `$`**

// #### উদাহরণ:

// ```js
// // ধরুন একটি document আছে এমন:
// {
//   _id: 1,
//   name: "Sakayet",
//   hobbies: [
//     { name: "reading", level: "beginner" },
//     { name: "coding", level: "intermediate" }
//   ]
// }
// ```

// #### 🎯 এখন আপনি চাইছেন `"coding"` নামের hobby এর level update করে `"expert"` করতে:

// ```js
// db.collection.updateOne(
//   { _id: 1, "hobbies.name": "coding" },
//   { $set: { "hobbies.$.level": "expert" } }
// )
// ```

// ### 🔍 ব্যাখ্যা:

// * `hobbies.name`: এটা array এর মধ্যে যে object এর name `"coding"` তার খোঁজ নিচ্ছে।
// * `hobbies.$.level`: এই `$` হচ্ছে **positional operator**, যা matched object কে indicate করে।
// * `$set`: নতুন value assign করে।

// ---

// ### ℹ️ সংক্ষেপে:

// | Operator    | কাজ                                   |
// | ----------- | ------------------------------------- |
// | `$`         | প্রথম matched element কে indicate করে |
// | `$set`      | ফিল্ড update করার জন্য                |
// | `$push`     | array-তে নতুন element যোগ করার জন্য   |
// | `$addToSet` | duplicate ছাড়া element যোগ            |

// ---

// প্রয়োজনে আমি আরও advanced `$[<identifier>]` (arrayFilters) technique ও দেখাতে পারি multiple matching element update করতে।

// চান?
