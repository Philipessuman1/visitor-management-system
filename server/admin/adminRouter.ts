import express from 'express';
const router = express.Router();
//import bcrypt from 'bcrypt';
require('dotenv').config({ path: '../../.env'});
import jwt from 'jsonwebtoken';
import { getAllEmployees,
    addAdmin,
    //getAdminPassword,
    loginAdmin,
    getVisitors,
    getDailyVisits,
    getBusiestHosts,
    addHost,
    modifyHost,
    deleteHost,
    updateVisitorsforDelete } from './adminService';
import path from 'path';
import { Request, Response } from "express";


router.post('/newAdmin', async (req:Request, res:Response) => {
    try {
        let email = req.body.email
        let password = req.body.password
        const admin = { email, password }
    if(email === null && password === null){
        console.log('Email and password required')
    } else {
        await addAdmin(admin);
        res.status(201).send("Successful")
    }
    } catch (err) {
        console.log(err)
    }
})

router.post('/adminlogin', async (req, res, next) => {
    try{
        const {email, password} = req.body;
        const admin = await loginAdmin(email, password);
        const token = jwt.sign({admin}, process.env.TOKEN_SECRET as unknown as string);
        if(!admin){
            return res.status(401).json({
                status:'error', message: 'Email or Password Invalid'
            });
        }
        return res.json({
            status: 'success',
            data:{...admin, token},
            message: 'Admin login successful'
        });
    } catch(err) {
        return next(err);
    }
});
    /*const password = await getAdminPassword(req.body.email)
    try {
        if (await bcrypt.compare(req.body.password, password)) {
            
            const user = { name: req.body.email}
            
           const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET as string)
           
            console.log("login success")
           res.json({accessToken: accessToken})
           
        } else {
            
            res.status(401).send("Invalid credentials")
        }
    } catch (err) {
        console.log(err);
    }
})*/

router.get('/hosts', async (req, res) => {
    try {
        const allEmployees = await getAllEmployees();
        res.status(200).send(allEmployees)
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.put('/modhost/:id', modifyHost);

router.delete('/deletehost/:id', async (req, res) => {
    try {
        await updateVisitorsforDelete(req.body)
        await deleteHost(req.body);
        res.status(204).send("Host deleted")
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.post('/addhost', async (req, res) => {
    try {
        await addHost(req.body)
        res.status(201).send("Successful")
    } catch (err) {
        res.status(500).send({ status: "FAILED", data: {err}}) 
    }
})

router.get('/visitors', async (req, res) => {
    try {
        const allVisitors = await getVisitors();
        res.status(200).json(allVisitors)
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.get('/dailyvisits', async (req, res) => {
    try {
        const dailyVisits = await getDailyVisits();
        res.status(200).json(dailyVisits)
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.get('/busyHost', async (req, res) => {
    try {
        const busiestHosts = await getBusiestHosts();
        res.status(200).json(busiestHosts)
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})


export default router;
