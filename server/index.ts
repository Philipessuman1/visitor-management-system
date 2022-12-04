import express from 'express';
import cors from 'cors';
import visitorRouter from './visitors/visitorRouter';
import adminRouter from './admin/adminRouter';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import * as dotenv from "dotenv";
dotenv.config();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Vilog",
            description: "Visitors Logbook",
            servers: ["http://localhost:4000"],
            version: "1.0.0"
        }
    },

    apis: ["./*/*Router.js", "app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)as any;

const app = express();
const PORT = process.env.PORT || 4000;


//middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(cors());
app.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/build'))
};

app.use(visitorRouter);
app.use(adminRouter);


/*app.get('*', (req, res) => {
    console.log('outer route')
    //res.sendFile(path.join(__dirname, '.'));
})*/

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)});