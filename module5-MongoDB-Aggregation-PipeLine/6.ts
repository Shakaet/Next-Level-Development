
// ঠিক আছে — আমি বাংলায় একে একে **MongoDB Aggregation Stages** — `$bucket`, `$sort`, আর `$limit` ব্যাখ্যা করছি উদাহরণসহ।

// ---

// ## 1️⃣ `$bucket` — ডাটা গ্রুপে ভাগ করা (range অনুযায়ী)

// **কাজ:** ডাটাকে নির্দিষ্ট range বা boundary অনুযায়ী ভাগ (bucket) করে aggregate করে।

// **Structure:**

// ```js
// {
//   $bucket: {
//     groupBy: <expression>,     // কোন ফিল্ড বা ভ্যালু দিয়ে ভাগ হবে
//     boundaries: [ <lower>, <upper>, ... ],  // range এর সীমা
//     default: "Other",          // যেগুলো কোনো range-এ পড়েনা, সেগুলোর bucket নাম
//     output: {                  // প্রতিটা bucket এর জন্য কোন কোন aggregate output দিবে
//       count: { $sum: 1 },
//       names: { $push: "$name" }
//     }
//   }
// }
// ```

// **Example:** বয়স অনুযায়ী গ্রুপ করা —

// ```js
// db.students.aggregate([
//   {
//     $bucket: {
//       groupBy: "$age",
//       boundaries: [ 0, 18, 30, 50, 100 ],
//       default: "Other",
//       output: {
//         count: { $sum: 1 },
//         names: { $push: "$name" }
//       }
//     }
//   }
// ])
// ```

// 📌 এখানে 0–18, 18–30, 30–50, 50–100 বয়স রেঞ্জে গ্রুপ হবে।

// ---

// ## 2️⃣ `$sort` — ডাটা সাজানো

// **কাজ:** কোনো ফিল্ড অনুযায়ী ascending (`1`) বা descending (`-1`) অর্ডারে সাজায়।

// **Example:** বয়স অনুযায়ী বড় থেকে ছোট সাজানো —

// ```js
// db.students.aggregate([
//   { $sort: { age: -1 } }
// ])
// ```

// 📌 `-1` মানে descending (সবচেয়ে বড় আগে), `1` মানে ascending।

// ---

// ## 3️⃣ `$limit` — নির্দিষ্ট সংখ্যক ডকুমেন্ট নেওয়া

// **কাজ:** pipeline থেকে নির্দিষ্ট সংখ্যক document return করে।

// **Example:** প্রথম 5 জন —

// ```js
// db.students.aggregate([
//   { $limit: 5 }
// ])
// ```

// 📌 `$sort` এর পরে `$limit` দিলে top N results বের করা যায় (যেমন Top 5 highest age)।

// ---

// ### 🎯 তিনটা একসাথে ব্যবহার করে Example:

// ```js
// db.students.aggregate([
//   { $sort: { age: -1 } },   // বয়স descending
//   { $limit: 5 },            // প্রথম ৫ জন
//   { $project: { name: 1, age: 1, _id: 0 } } // শুধু name আর age দেখাও
// ])
// ```

// 📌 এতে করে **সবচেয়ে বেশি বয়সের ৫ জনের নাম ও বয়স** দেখা যাবে।

// ---

// তুমি চাইলে আমি `$bucket` + `$sort` + `$limit` একসাথে নিয়ে **"Top Age Group Analysis"** এর একটা ডেমো তৈরি করে দিতে পারি যাতে real-life data এর মত কাজ করবে।
// এতে তোমার বোঝা আরও ক্লিয়ার হবে।





//  db.test.aggregate([
            
//             {
//                 $bucket: {
//                       groupBy: "$age",
//                       boundaries: [ 20, 40, 60,80 ],
//                       default: "80 er upore",
//                       output: {
//                         "count": { $sum: 1 },
//                         "titles" : { $push: "$name" }
//                       }
//                     }
//             },
            
//             {
//                 $sort: {age:1}
//             },
//             {
//                 $limit: 3
//             },
//             {
//                 $project: {count:1}
//             }
            
            
            
            
//             ])
          
            
     