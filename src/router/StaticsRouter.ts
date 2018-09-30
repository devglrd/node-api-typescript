//Import express
import {Router, Request, Response, NextFunction} from "express";


class StaticsRouter {

    //Type router
    router: Router;


    constructor(){
        //Affect to StaticsRouter.router Router of express
        this.router= Router();
        //loads Routes
        this.routes();
    }

    /**
     * showHome
     */
    public showHome(req: Request, res: Response): void {
        res.send("Hello World");
    }

    /**
     * routes
     */
    public routes() {
        this.router.get('/', this.showHome);
    }

}
//instance of staticsRouter Class
const staticsRoutes = new StaticsRouter();
export default staticsRoutes.router;
