



//Question:




// 1. Find all documents in the collection where the age is greater than 30, and
// only return the name and email fields.
// 2. Find documents where the favorite color is either "Maroon" or "Blue."
// 3. Find all documents where the skill is an empty array.
// 4. Find documents where the person has skills in both "JavaScript" and
// "Java."
// 5. Add a new skill to the skills array for the document with the email
// "amccurry3@cnet.com". The skill is
// {"name": "Python"
// ,
// "level": "Beginner"
// ,
// "isLearning": true}
// Note: At first, you will have to insert the given email then add the skill
// mentioned above
// 6. Add a new language "Spanish" to the list of languages spoken by the
// person.
// 7. Remove the skill with the name "Kotlin" from the skills array.









//  Answer:



// 1. db.test.find({age:{$gt:30}},{name:1,email:1,_id:0}) 
    
    // 2. db.test.find({favouriteColor:{$in:["Maroon","Blue"]}}) 
    
     // 3. db.test.find({skills:{$size: 0}}) 
     
    //  4   db.test.find({$and:[
    //       {skills:{$elemMatch: {name:"JAVASCRIPT"}}},
    //       {skills:{$elemMatch: {name:"JAVA"}}}
           
           
    //       ]}
     
    //  db.test.find({email:"amccurry3@cnet.com"})
     
// 5.       db.test.updateOne(
         
//          {email:"amccurry3@cnet.com"},
//          {$addToSet: {skills:{"name": "Python"
// ,
// "level": "Beginner"
// ,
// "isLearning": true}}}
         
         
//          )


// 6. db.test.updateOne( 
//     {email:"amccurry3@cnet.com"},
//     {$addToSet: {languages:"Spanish"}}
//     )


// 7. db.test.updateOne( 
//     {email:"amccurry3@cnet.com"},
//      {$pull: {"skills":{name:"KOTLIN"}}}
    
//     )
     