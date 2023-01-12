import ApiError from "../exceptions/api-error.js";
import blogService from "../service/blog-service.js";

class BlogController {
    async getAll(req,res,next) {
        try {
            const allBlogs = await blogService.getAll()
            return res.json(allBlogs);
        } catch (error) {
            next(error);
        }
    }

    async createBlog(req,res,next) {
        try {
            const {title, text, created, section} = req.body;
            const blog = await blogService.createBlog(title, text, created, section);
            return res.json(blog)
        } catch (error) {
            next(error);
        }
    }

    async deleteBlog(req,res,next) {
        try {
            const {title} = req.body;
            await blogService.deleteBlog(title);
            return res.json({message: "Blog deleted"})
            
        } catch (error) {
            next(error)
        }
    }

    async editBlog(req,res,next) {
        try {
            
        } catch (error) {
            
        }
    }
}

export default new BlogController();