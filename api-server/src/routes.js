import express from 'express'
import fs from 'fs'
import {
    v4 as uuidv4
} from 'uuid'
import Isemail from 'isemail'
import jwt from 'jsonwebtoken'
import UsersManage from './UsersManage.js'
const router = express.Router();

router.post('/auth', (req, res) => {
    // { email: 'as', password: '123' }
    let data = req.body
    let errors = []

    if (data.email == undefined || data.email == '' || data.email == null || !Isemail.validate(data.email) || !UsersManage.emailIsExists(data.email)) {
        errors.push('email')
    }
    if (data.password == undefined || data.password == '' || data.password == null ) {
        errors.push('password')
    }
    if (errors.length > 0) {
        res.status(400).send({
            'message': 'validation error',
            invalid: errors
        })
        return
    }
    if (UsersManage.passwordIsRight(data.email, data.password)) {
        const token = jwt.sign(data, 'in6MG$haU5ttKoOC%N3j*rC7LNf22YlP1Y!p5OuJfaokTfI4GxMcPoOcJqWKOgqV')
        res.status(200).send({
            status: 0,
            token: token
        })
    } else {
        res.status(200).send({
            status: -1,
            'message': 'incorrect credentials provided'
        })
        return
    }
})

router.get('/', (req, res) => {
    res.send({
        message: 'Hello, world!'
    })
})
export default router;