// ঠিক আছে — এবার আমি **Indexing**, আর MongoDB-এর **COLLSCAN vs IXSCAN** বাংলায় বুঝিয়ে দিচ্ছি।

// ---

// ## 1️⃣ Indexing কী?

// * Index হলো MongoDB-তে ডাটা খোঁজার জন্য একটা **sorted data structure** (সাধারণত B-Tree)
// * যেভাবে বইয়ের শেষে **index page** দেখে দ্রুত পৃষ্ঠার নম্বর বের করা যায়, MongoDB index-ও একই কাজ করে → ডাটাবেসকে পুরো collection না পড়ে দ্রুত match করা ডকুমেন্ট খুঁজে পেতে সাহায্য করে।

// ---

// ### Without index:

// * MongoDB পুরো collection স্ক্যান করে (COLLSCAN)
// * বড় ডাটাতে অনেক slow হয়, কারণ প্রতিটি ডকুমেন্ট sequentially চেক করে।

// ### With index:

// * MongoDB সরাসরি index structure থেকে matching ডকুমেন্টের position খুঁজে বের করে (IXSCAN)
// * অনেক দ্রুত হয়।

// ---

// ## 2️⃣ COLLSCAN vs IXSCAN

// ### **COLLSCAN** (Collection Scan)

// * MongoDB পুরো collection sequentially পড়ে।
// * **When it happens:**

//   * Query field এ কোনো index নেই
//   * Index থাকলেও query optimizer সেটি ব্যবহার করে না
// * **Performance:** Slow for large collections

// 📌 Example:

// ```js
// db.users.find({ age: 25 }) // যদি age-এ index না থাকে
// ```

// `explain()` দিলে `"stage": "COLLSCAN"` আসবে।

// ---

// ### **IXSCAN** (Index Scan)

// * MongoDB সরাসরি index structure থেকে match খুঁজে পায়।
// * **When it happens:**

//   * Query field indexed
//   * Query optimizer index use করছে
// * **Performance:** Much faster, especially for selective queries

// 📌 Example:

// ```js
// db.users.createIndex({ age: 1 })
// db.users.find({ age: 25 })
// ```

// `explain()` দিলে `"stage": "IXSCAN"` আসবে।

// ---

// ## 3️⃣ কিভাবে চেক করবে query index use করছে কিনা?

// ```js
// db.users.find({ age: 25 }).explain("executionStats")
// ```

// * `"stage": "COLLSCAN"` → No index used
// * `"stage": "IXSCAN"` → Index used

// ---

// ## 4️⃣ Index এর ধরন (Short list)

// * **Single field index** → `{ age: 1 }`
// * **Compound index** → `{ age: 1, name: 1 }`
// * **Text index** → `{ name: "text" }`
// * **Hashed index** → `{ userId: "hashed" }`
// * **Wildcard index** → `{ "$**": 1 }`

// ---

// আমি চাইলে তোমাকে একটা **same query COLLSCAN vs IXSCAN speed test** করিয়ে দেখাতে পারি, যাতে তুমি live দেখবে কিভাবে index query execution time 1000x পর্যন্ত কমিয়ে দিতে পারে।
// তুমি কি চাও আমি ওই demo করে দিই?



// db.test.find({_id:ObjectId("6406ad63fc13ae5a40000065")}).explain("executionStats")
    
    
//     db.test.createIndex({ email: 1 })

//     db.test.dropIndex({ email: 1 })