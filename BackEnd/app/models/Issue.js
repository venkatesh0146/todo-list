const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  let issueSchema = new Schema({
   
    issueId :{
      type: String,
      unique:true,
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    title : {
      type:String,
      default:''

    },
    description : {
      type:String,
    },
    Reporter : {
      type:String,
      default:''
    },
    createdOn :{
      type:Date,
      default:""
    }
  
  
  })
  
  
  mongoose.model('Issue', issueSchema);