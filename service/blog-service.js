import ApiError from "../exceptions/api-error.js";
import blogModel from "../models/blog-model.js";

class BlogService {
    async getAll() {
        const allBlogs = await blogModel.find();
        if(allBlogs.length<1){ throw ApiError.BlogEmptyError()}
        return allBlogs;
    }

    async createBlog(title, text, created, section) {
        const blog = await blogModel.findOne({title})
        if(blog){
            throw ApiError.BlogExistsError();
        }

        const temp = await blogModel.create({title, text, created, section});
        return temp;
    }

    async deleteBlog(title) {
        const blog = await blogModel.findOne({title})
        if(!blog){
            throw ApiError.BlogNotExistsError();
        }
        
        const temp = await blogModel.deleteOne({title})
        return temp;
    }
}

export default new BlogService();