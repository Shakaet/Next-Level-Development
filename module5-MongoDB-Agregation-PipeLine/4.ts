// আপনি যদি সব ডকুমেন্টকে একসাথে একটা গ্রুপে আনতে চান, তাহলে `_id` এর মান **`null`** দিতে হবে।

// ---

// ### **Syntax:**

// ```js
// db.collection.aggregate([
//   {
//     $group: {
//       _id: null,
//       <newField>: { <accumulator>: <expression> }
//     }
//   }
// ])
// ```

// * `_id: null` → সব ডকুমেন্ট এক গ্রুপে যাবে।
// * তারপর আপনার পছন্দমত accumulator (যেমন `$sum`, `$avg`, `$push`) ব্যবহার করতে পারবেন।

// ---

// ### **উদাহরণ:**

// ```js
// db.test.aggregate([
//   {
//     $group: {
//       _id: null,
//       totalDocs: { $sum: 1 },
//       totalAge: { $sum: "$age" },
//       names: { $push: "$name" }
//     }
//   }
// ])
// ```

// **ব্যাখ্যা:**

// * `totalDocs` → ডাটাবেজে মোট কয়টা ডকুমেন্ট আছে।
// * `totalAge` → সব ডকুমেন্টের `age` যোগফল।
// * `names` → সব `name` ফিল্ডের ভ্যালু একটা অ্যারেতে।

// ---

// **উদাহরণ রেজাল্ট:**

// ```json
// [
//   {
//     "_id": null,
//     "totalDocs": 5,
//     "totalAge": 142,
//     "names": ["A", "B", "C", "D", "E"]
//   }
// ]
// ```

// ---

// এভাবে `_id: null` দিলে MongoDB-তে **"GROUP ALL"** এর মতো কাজ হবে, যা SQL এর `GROUP BY` ছাড়া অ্যাগ্রিগেটের সমান।

// আপনি চাইলে আমি এখন একটা লাইভ ডেটাসেট দিয়ে `_id: null` আর `_id: "$field"` এর পার্থক্য দেখিয়ে দিতে পারি।







// shob doc ke ekta group korar jonno
// db.test.aggregate([
        
        
//         {$group: { _id:null,count:{$sum:1},totalSalary:{$sum:"$salary"}}}
        
        
        
//         ])


// if rename in project


//  db.test.aggregate([
        
        
//         {$group: {
//             _id:null,count:{$sum:1},
//             totalSalary:{$sum:"$salary"},
//             maxSalary:{$max: "$salary"},
//             minSalary:{$min: "$salary"},
//             avgSalary:{$avg: "$salary"},
            
//         }},
        
//         {$project: {
            
//             totalSalary:1,
//             maxSalary:1,
//             minSalary:1,
//             averageSalary:"$avgSalary"
            
            
//         }}
        
        
        
        
        
//         ])






//  db.test.aggregate([
        
        
//         {$group: {
//             _id:null,count:{$sum:1},
//             totalSalary:{$sum:"$salary"},
//             maxSalary:{$max: "$salary"},
//             minSalary:{$min: "$salary"},
//             avgSalary:{$avg: "$salary"},
            
//         }},
        
//         {$project: {
            
//             totalSalary:1,
//             maxSalary:1,
//             minSalary:1,
//             averageSalary:"$avgSalary",
//             totalSubstract: { $subtract: [ "$maxSalary", "$minSalary" ] }
            
            
//         }}
        
        
//         ])
        
        