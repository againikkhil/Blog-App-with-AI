// We have to create the API using that we can store the blog data in MongoDB database and will create models for that.

import mongoose from "mongoose";

// create scheman for which list of properties that will be added in data

const blogSchema = new mongoose.Schema(
    {
    title: {type: String, require: true},
    subTitle: {type: String},
    description: {type: String, require: true},
    category: {type: String, require: true},
    image: {type: String, require: true},
    isPublished: {type: Boolean, require: true},
},
{
    timestamps:true
}
);

// now creating models for the schema created
const Blog = mongoose.model('blog', blogSchema);


export default Blog;