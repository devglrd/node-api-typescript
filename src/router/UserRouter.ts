import {Router, Request, Response} from "express";
import User from '../models/User';
class UserRouter {
    public router: Router;
    constructor(){
        this.router = Router();
        //load routes
        this.routes()
    }

    /**
     * getUsers
     */
    public getUsers(req: Request, res: Response): void {
        User.find({})
        .then((data) => {
            const status = res.statusCode
            res.json({
                status,
                data
            });
        }).catch((err) => {
            const status = res.statusCode
            res.json({
                status,
                err
            });
        })
    }


    /**
     * getUser
     */
    public getUser(req: Request, res: Response) : void {
        const username = req.params.username
        User.findOne({username})
        .then((data) => {
            const status = res.statusCode
            res.json({
                status,
                data
            });
        }).catch((err) => {
            const status = res.statusCode
            res.json({
                status,
                err
            });
        });
    }

    /**
     * CreateUser
     */
    public CreateUser(req: Request, res: Response) : void {
        const name : String = req.body.name;
        const username : String = req.body.username;
        const email : String = req.body.email;
        const password : String = req.body.password;

        const user = new User({
            name,
            username,
            email,
            password
        });

        user.save()
        .then((data) => {
            const status = res.statusCode
            res.json({
                status,
                data
            });
        }).catch(err => {
            const status = res.statusCode
            res.json({
                status,
                err
            });
        })
    }

    /**
     * UpdateUser
     */
    public UpdateUser(req: Request, res: Response) : void {
        const username = req.params.username
        User.findOneAndUpdate({username}, req.body)
        .then((data) => {
            const status = res.statusCode
            res.json({
                status,
                data
            });
        }).catch((err) => {
            const status = res.statusCode
            res.json({
                status,
                err
            });
        })
    }


    /**
     * DeleteUser
     */
    public DeleteUser(req: Request, res: Response) : void {
        const slug = req.params.slug
        User.findOneAndDelete({slug})
        .then((data) => {
            const status = res.statusCode
            res.json({
                status,
                data
            });
        }).catch((err) => {
            const status = res.statusCode
            res.json({
                status,
                err
            });
        })
    }

    /**
     * routes
     */
    public routes() {
        this.router.get('/', this.getUsers);
        this.router.post('/', this.CreateUser);
        this.router.get('/:username', this.getUser);
        this.router.post('/:username', this.UpdateUser);
        this.router.delete('/:username', this.DeleteUser);
    }
}

const userRoute = new UserRouter();
export default userRoute.router;