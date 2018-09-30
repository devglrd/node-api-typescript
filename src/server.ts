import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as compression from "compression";
import * as cors from "cors";

// import Routers
import PostRouter from './router/PostRouter';
import StaticsRouter from './router/StaticsRouter';
import UserRouter from './router/UserRouter';
// Server Class

class Server {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config () {
        //set up mongoose
        const MONGO_URI = "mongodb://localhost:27017/typescript-api"
        this.connectToDb(MONGO_URI);

        //config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended : true}));
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }


    private connectToDb(mongodbURI: string) {
        mongoose.connect(mongodbURI, (err) => {
            if(err) {
                console.log(`error on connection : ${err}`);
            }else{
                console.log('MongoDb connected');
            }
        });
    }

    public routes (): void {
        this.app.use('/', StaticsRouter);
        this.app.use('/api/v1/posts', PostRouter);
        this.app.use('/api/v1/users', UserRouter);

    }
}

//export
export default new Server().app;