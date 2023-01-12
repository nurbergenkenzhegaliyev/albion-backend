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

    async editBlog(blogId, newTitle, newText, newSection) {
        await blogModel.updateOne({id: blogId}, {$set: {title:newTitle, text:newText, section:newSection}})
        const blog = await blogModel.findOne({id: blogId})

        return blog;
    }
}

export default new BlogService();