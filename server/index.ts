import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
//import visitorRouter from './visitors/visitorRouter';
//import adminRouter from './admin/adminRouter';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import * as dotenv from "dotenv";
dotenv.config();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Vilog",
            description: "Visitors Logbook",
            servers: ["http://localhost:5000"],
            version: "1.0.0"
        }
    },

    apis: ["./*/*Router.js", "app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)as any;

const app = express();
const PORT = process.env.PORT || 4000;
const accesstoken = process.env.ACCESS_TOKEN_SECRET;


function authenticateToken(req: { headers: { [x: string]: any; }; user: string | jwt.JwtPayload | undefined; }, res: { sendStatus: (arg0: number) => void; }, next: () => void){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, accesstoken as string, (err: any, user: string | jwt.JwtPayload | undefined) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next();
    });
};

//middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(cors());
app.use(express.json()); //req.body

/*if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
}*/

//app.use('/visitors', visitorRouter);
//app.use('/admin', adminRouter);

/*app.get('*', (req, res) => {
    console.log('outer route')
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})*/

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
