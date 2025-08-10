// ঠিক আছে — এবার আমি বাংলায় **MongoDB Aggregation Stage `$facet`** এবং **multiple pipeline** কিভাবে কাজ করে সেটা বুঝিয়ে দিচ্ছি।

// ---

// ## 1️⃣ `$facet` কী?

// * `$facet` হলো এমন একটা stage যেটা **একই dataset-এর উপর parallel-ভাবে একাধিক aggregation pipeline চালায়**।
// * মানে তুমি একবার ডাটাবেসে query চালিয়ে, একাধিক আলাদা processing করতে পারো, আর শেষে সব result একসাথে পাবে।
// * Output হবে **একটা document**, যার ভিতরে একাধিক field থাকবে, আর প্রতিটি field-এর value হবে ওই pipeline এর result array।

// ---

// ### Structure:

// ```js
// {
//   $facet: {
//     pipeline1Name: [
//       // pipeline 1 stages
//     ],
//     pipeline2Name: [
//       // pipeline 2 stages
//     ]
//   }
// }
// ```

// ---

// ## 2️⃣ Example:

// ধরো তোমার `students` collection আছে, আর তুমি চাও —

// * **Pipeline 1:** Top 5 highest scoring students
// * **Pipeline 2:** Average score per gender

// ```js
// db.students.aggregate([
//   {
//     $facet: {
//       topFive: [
//         { $sort: { score: -1 } },
//         { $limit: 5 },
//         { $project: { name: 1, score: 1, _id: 0 } }
//       ],
//       avgScoreByGender: [
//         { $group: { _id: "$gender", avgScore: { $avg: "$score" } } }
//       ]
//     }
//   }
// ])
// ```

// ---

// ### Output এর মতো হবে:

// ```json
// [
//   {
//     "topFive": [
//       { "name": "Rafi", "score": 98 },
//       { "name": "Nadia", "score": 95 },
//       ...
//     ],
//     "avgScoreByGender": [
//       { "_id": "Male", "avgScore": 80 },
//       { "_id": "Female", "avgScore": 85 }
//     ]
//   }
// ]
// ```

// 📌 দেখো — **একই aggregation** থেকে **দুটি আলাদা result** একসাথে পেলাম।

// ---

// ## 3️⃣ কেন `$facet` দরকার?

// * Normal aggregation-এ একবারে একটা pipeline হয়।
// * যদি আলাদা আলাদা query চালাও, তাহলে MongoDB কে বারবার read করতে হবে → performance কমে যাবে।
// * `$facet` ব্যবহার করলে একবারেই সব computation হয়ে যায়।

// ---

// 💡 তুমি চাইলে আমি তোমাকে `$facet` + `$bucket` + `$sort` + `$limit` দিয়ে **একটা multi-analysis report** বানিয়ে দিতে পারি, যেটা real-life dashboard এর মত result দেখাবে।
// এতে তোমার advanced aggregation অনেক দ্রুত clear হবে।







//   db.test.aggregate([
            
            
            
//             {$facet: {
                
                
                
//                 //pipeline 1
//                 'friendsCount':[
                    
//                     {$unwind: "$friends"},
//                     {$group: { _id: "$friends",count:{$sum: 1}}}
//                     ],
                    
                    
                    
                    
//                      //pipeline 2
//                     'interestCount':[
                    
//                     {$unwind: "$interests"},
//                     {$group: { _id: "$interests",count:{$sum: 1}}}
//                     ],
                    
                    
//                      //pipeline 3
//                     'skillsCount':[
                    
//                     {$unwind: "$skills"},
//                     {$group: { _id: "$skills",count:{$sum: 1}}}
//                     ],
                    
//             }}
            
            
            
            
            
            
//             ])
            
          
            
     