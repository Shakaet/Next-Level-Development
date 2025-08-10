// ঠিক আছে — এখন আমি আপনাকে **MongoDB Aggregation Pipeline** এর `$unwind` ধাপে ধাপে ব্যাখ্যা করবো।

// ---

// ## **📌 `$unwind` কী করে?**

// `$unwind` এমন একটা stage যেটা **array ফিল্ডকে ফ্ল্যাট করে** — অর্থাৎ, array-এর প্রতিটা element আলাদা ডকুমেন্টে রূপান্তরিত করে।

// ভাবুন আপনার কাছে একটা ডকুমেন্ট আছে যেখানে এক ফিল্ডে অনেকগুলো ভ্যালু অ্যারের মধ্যে রাখা আছে, `$unwind` সেই অ্যারের প্রতিটা ভ্যালুর জন্য **একটা আলাদা ডকুমেন্ট** বানাবে।

// ---

// ### **Syntax:**

// ```js
// { $unwind: "$arrayField" }
// ```

// ---

// ## **উদাহরণ**

// ### ডাটা:

// ```json
// [
//   { "name": "Alice", "hobbies": ["reading", "traveling"] },
//   { "name": "Bob", "hobbies": ["sports", "cooking"] }
// ]
// ```

// ---

// ### Aggregation:

// ```js
// db.people.aggregate([
//   { $unwind: "$hobbies" }
// ])
// ```

// ---

// ### রেজাল্ট:

// ```json
// [
//   { "name": "Alice", "hobbies": "reading" },
//   { "name": "Alice", "hobbies": "traveling" },
//   { "name": "Bob", "hobbies": "sports" },
//   { "name": "Bob", "hobbies": "cooking" }
// ]
// ```

// ---

// ## **📍 কেন দরকার?**

// * যখন অ্যারের প্রতিটা আইটেমকে আলাদা করে প্রসেস বা ফিল্টার করতে চান।
// * `$group` বা `$match` এর আগে অনেক সময় `$unwind` দরকার হয় যাতে প্রতিটা অ্যারের উপাদান আলাদা হয়ে যায়।

// ---

// ## **⚙️ অপশনস**

// MongoDB 3.2+ এ `$unwind` এর ৩টা অপশন আছে:

// ```js
// {
//   $unwind: {
//     path: "$arrayField",
//     includeArrayIndex: "arrayIndex", // index রাখবে (0, 1, 2...)
//     preserveNullAndEmptyArrays: true // array না থাকলেও ডকুমেন্ট রাখবে
//   }
// }
// ```

// * **`includeArrayIndex`** → অ্যারের আইটেমের index আলাদা ফিল্ডে যোগ করে।
// * **`preserveNullAndEmptyArrays`** → যদি ফিল্ড null বা খালি array হয়, তবুও ডকুমেন্ট বাদ দেবে না।

// ---

// আপনি চাইলে আমি `$unwind` + `$group` মিলিয়ে একটা রিয়েল-লাইফ উদাহরণ দেখাতে পারি, যেটা রিপোর্টিং বা ডাটা অ্যানালাইসিসে অনেক কাজে লাগে।
// আপনি কি চান আমি সেটা বানিয়ে দিই?





// array diye directly group kora jabe na ,tokhon unwind use korte hobe


//  db.test.aggregate([
            
            
//             { $unwind : '$friends' }
            
//             {$group: { _id: "$friends",count:{$sum:1}}}
            
            
//             ])


