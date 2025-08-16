import express from "express"
import {  Request, Response } from 'express';
import { userModel } from './user.model';
import { createUsersfn } from "./user.controller";









export let userRouter= express.Router()

userRouter.post("/createUser",createUsersfn)