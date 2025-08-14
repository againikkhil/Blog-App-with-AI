// We have to create the API using that we can store use the function of comment in the web page

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        blog: {type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true },
        name:{type:String, required: true},
        content:{type: String, required: true},
        isApproved:{type:Boolean, default: false}
    
},
{timestamps:true});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;