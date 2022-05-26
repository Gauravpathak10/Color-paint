import express from "express";
import { Login, register } from "./Usercontroller";
const router= express.Router()


router.post('/reg',register)
router.post('/log',Login)


export default router