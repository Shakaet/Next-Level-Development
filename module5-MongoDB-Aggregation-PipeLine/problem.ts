

//1.  db.data.aggregate([
    
    
//     {$match: {isActive:true}},
    
//     {$group: { _id: "$gender",activeCount:{$sum:1}}}
    
    
    
//     ])




// 2. db.data.aggregate([
    
//     {$match: {isActive:true,favoriteFruit:"banana"}},
    
    
//     {$project: {name:1,email:1,_id:0}}
//     ])


//  3 . db.data.aggregate([
    
    
//     {$group: { _id: "$favoriteFruit",avgAge:{$avg: "$age"}}},
//     { $sort: { avgAge: -1 }}

   

    
//     ])