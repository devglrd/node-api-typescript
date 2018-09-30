import {Router, Request, Response, NextFunction} from "express";
import Post from '../models/Post';

class PostRouter {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public GetPosts(req: Request, res: Response) : void {
        Post.find({})
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public GetPost(req: Request, res: Response) : void {
        const slug : String = req.params.slug;
        Post.findOne({slug})
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public CreatePosts(req: Request, res: Response) : void {
        const title : String = req.body.title;
        const slug : String = req.body.slug;
        const content : String = req.body.content;
        const image : String = req.body.image;


        const post = new Post({
            title,
            slug,
            content,
            image,
        });

        post.save().then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public UpdatePosts(req: Request, res: Response) : void {
        const slug : String = req.params.slug;
        Post.findOneAndUpdate({slug}, req.body)
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public DeletePost(req: Request, res: Response) : void {
        const slug : String = req.params.slug;
        Post.findOneAndRemove({slug})
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    routes (){
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.post('/', this.CreatePosts);
        this.router.post('/:slug', this.UpdatePosts);
        this.router.delete('/:slug', this.CreatePosts);
    }
}


const postRoutes = new PostRouter();
export default postRoutes.router;