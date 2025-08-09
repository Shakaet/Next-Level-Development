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
        
        