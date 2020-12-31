import { Schema , model } from "mongoose";


const Hobby = new Schema({
       
    
    listHobby : {  
    type : String,
    required: true
    } ,
    practice : {
        type: Number,
        required : true
    },
    categoryHubby : {
        type: String,
        required: true
    }
});

export default model("Hobby",Hobby)