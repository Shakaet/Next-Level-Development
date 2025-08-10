// ঠিক আছে — এবার আমি তোমাকে **Compound Index** আর **Text Index** MongoDB তে বিস্তারিতভাবে বাংলায় বুঝিয়ে দিচ্ছি।

// ---

// ## 1️⃣ Compound Index

// 📌 **Definition:**
// Compound index হলো এমন index যা **একাধিক field** নিয়ে তৈরি হয়, যাতে MongoDB একসাথে একাধিক field এর উপর দ্রুত search করতে পারে।

// ---

// ### Example:

// ```js
// db.users.createIndex({ age: 1, name: 1 })
// ```

// * এখানে **age** প্রথম field (prefix), **name** দ্বিতীয় field।
// * Index order গুরুত্বপূর্ণ (১ মানে ascending, -১ মানে descending)।

// ---

// ### কিভাবে কাজ করে?

// এই index **query optimization** করবে যখন:

// * তুমি শুধুমাত্র **age** দিয়ে search করো
// * **age** + **name** দিয়ে search করো
// * **age** দিয়ে filter করে name দিয়ে sort করো

// 📌 কিন্তু শুধুমাত্র **name** দিয়ে search করলে index ব্যবহার হবে না (কারণ age হচ্ছে prefix)।

// ---

// ### Usage Example:

// ```js
// // Works with index
// db.users.find({ age: 25 })
// db.users.find({ age: 25, name: "John" })
// db.users.find({ age: 25 }).sort({ name: 1 })

// // Won't use index (name only)
// db.users.find({ name: "John" })
// ```

// ---

// ### Pros:

// ✅ Multiple fields search faster
// ✅ Sorting optimization

// ### Cons:

// ⚠ Index order খুব গুরুত্বপূর্ণ
// ⚠ বেশি compound index দিলে storage বেশি লাগে

// ---

// ## 2️⃣ Text Index

// 📌 **Definition:**
// Text index MongoDB তে **full-text search** এর জন্য ব্যবহৃত হয় — যেমন নির্দিষ্ট শব্দ, বাক্য, বা keyword search।

// ---

// ### Example:

// ```js
// db.articles.createIndex({ title: "text", content: "text" })
// ```

// এতে MongoDB **title** ও **content** দুই field এ text search করতে পারবে।

// ---

// ### Search Query:

// ```js
// db.articles.find({ $text: { $search: "mongodb indexing" } })
// ```

// * `$search` এর মধ্যে word দিলে MongoDB সেই শব্দ match করবে।
// * Multiple word দিলে OR search হবে (যদি `""` না দেওয়া হয়)।
// * Phrase search এর জন্য:

// ```js
// db.articles.find({ $text: { $search: "\"mongodb indexing\"" } })
// ```

// ---

// ### Relevance Score:

// MongoDB text search result কে relevance অনুযায়ী rank করতে পারে:

// ```js
// db.articles.find(
//   { $text: { $search: "mongodb indexing" } },
//   { score: { $meta: "textScore" } }
// ).sort({ score: { $meta: "textScore" } })
// ```

// ---

// ### Pros:

// ✅ Full-text search support
// ✅ Multiple fields search এক index এ

// ### Cons:

// ⚠ Only one text index per collection allowed
// ⚠ Complex ranking control limited

// ---

// 💡 Pro Tip:

// * যদি তোমার query **multi-field exact match** → Compound index
// * যদি query **keyword or phrase search** → Text index

// ---

// তুমি চাইলে আমি এখনই তোমাকে **compound index vs text index performance comparison** live example দিয়ে দেখিয়ে দিতে পারি, যাতে speed difference পরিষ্কার হয়ে যাবে।
// তুমি কি চাও আমি সেটা করি?


// db.test.createIndex({"education.institute":"text"})
    
    // db.test.find({$text: { $search: "Guangxi" }})