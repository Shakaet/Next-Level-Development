
export type AdditionalInfo={
        fatherName:string,
        motherName:string
    }


export type user={

    name:string,
    email:string,
     password:number,
    gender:"male"|"female",
    dateOfBirthMonth:"january"|"february"|"march"|"april"|"may"|"june"|"july"|"auguest"|"september"|"octobor"|"november"|"december",
    additionalinfo: AdditionalInfo
   

}