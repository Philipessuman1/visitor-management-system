import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
require('dotenv').config({ path: '../../.env'});
import jwt from 'jsonwebtoken';
import { getAllEmployees,
    addAdmin,
    getAdminPassword,
    getVisitors,
    getDailyVisits,
    getBusiestHosts,
    addHost,
    modifyHost,
    deleteHost,
    updateVisitorsforDelete } from './adminService';
import path from 'path';
import { Request, Response } from "express";

router.post('/newadmin', async (req:Request, res:Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const admin = { email: req.body.email, password: hashedPassword }
        await addAdmin(admin)
        res.status(201).send("Successful")
    } catch (err) {
        res.status(500).send({ status: "FAILED", data: {err}}) 
    }
})

router.post('/adminlogin', async (req, res) => {
    const password = await getAdminPassword(req.body.email)
    if (!password){
        res.status(404).send("Invalid credentials")
    }
    try {
        if (await bcrypt.compare(req.body.password, password)){
            const user = { name: req.body.email}
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET as unknown as string)
            console.log("login success")
            res.json({accessToken: accessToken})
        } else {
            res.status(401).send("Invalid credentials")
        }
    } catch (err) {
        res.status(500).send(err || "Internal Server error")
    }
})

router.get('/hosts', async (req, res) => {
    try {
        const allEmployees = await getAllEmployees();
        res.status(200).send(allEmployees)
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.put('/hosts/:id', async (req, res) => {
    try {
        await modifyHost(req.body);
        res.status(204).send("Employee updated")
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.delete('/hosts/:id', async (req, res) => {
    try {
        await updateVisitorsforDelete(req.body)
        await deleteHost(req.body);
        res.status(204).send("Employee deleted")
    } catch (error) {
        res.status(500).send({ status: "FAILED", data: {error}})
    }
})

router.post('/hosts', async (req, res) => {
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
