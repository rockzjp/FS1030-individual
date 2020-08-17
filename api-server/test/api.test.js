import request from 'supertest'
import assert from 'assert'
import should, { not } from 'should'
import * as shouldHttp from 'should-http'
import app from '../index.js'

describe('GET /admin', () => {
    it('The default error handler', async () => {
        const response = await request(app)
            .get('/admin')
            .expect(404, {message: "not found"})
    })
})

describe('GET /', () => {
    it('responds with object with hello world', async () => {
        const response = await request(app)
            .get('/')
            .expect(200, {message: "Hello, world!"})
    })
})

describe('POST /contact_form/entries', () => {
    const payload =  {
        "name": "some string",
        "email": "address@email.com",
        "phoneNumber": "2343331234",
        "content": "User's message goes here"
    }

    it('Successful request should return the created object', async () => {
        const response = await request(app)
            .post('/contact_form/entries')
            .send(payload)

        response.should.have.status(200)
        response.body.should.containEql(payload)
    })

    it('validation error 1', async () => {
        const response = await request(app)
            .post('/contact_form/entries')
            .send({
                "email": "address@email.com",
                "phoneNumber": "2343331234",
                "content": "User's message goes here"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['name']})
    })

    it('validation error 2', async () => {
        const response = await request(app)
            .post('/contact_form/entries')
            .send({
                "phoneNumber": "2343331234",
                "content": "User's message goes here"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['name','email']})
    })


    it('email error ', async () => {
        const response = await request(app)
            .post('/contact_form/entries')
            .send({
                "name": "some string",
                "email": "wrong email",
                "phoneNumber": "2343331234",
                "content": "User's message goes here"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['email']})
    })

})


describe('POST /users', () => {
    const payload =  {
        "name": "some string",
        "email": "address@email.com",
        "password": "2343331234",
    }

    const newEmail = "address"+(new Date()).getTime()+"@email.com"

    it('Successful request should return the created object', async () => {
        const response = await request(app)
            .post('/users')
            .send( {
		        "name": "some string",
		        "email": newEmail ,
		        "password": "2343331234",
			 })

        response.should.have.status(200)
        response.body.should.containEql({
	        "name": "some string",
	        "email": newEmail ,
	        "password": "2343331234",
		 })
    })
 
    it('email error 2', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                "name": "some string",
                "email": newEmail ,
                "password": "2343331234"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['email']})
    })

    it('validation error 1', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                "email":  "address"+(new Date()).getTime()+"@email.com" ,
                "password": "2343331234",
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['name']})
    })

    it('validation error 2', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                "password": "2343331234",
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['name','email']})
    })

    it('email error ', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                "name": "some string",
                "email": "wrong email",
                "password": "2343331234"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['email']})
    })

    it('password error ', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                "name": "some string",
                "email": "address"+(new Date()).getTime()+"@email.com",
                "password": "123"
            })

        response.should.have.status(400)
        response.body.should.containEql({'message':'validation error','invalid':['password']})
    })
})


describe('POST /auth', () => {
    const payload =  {
        "email": "address@email.com",
        "password": "2343331234",
    }

    it('login success ', async () => {
        const response = await request(app)
            .post('/auth')
            .send({
		        "email": "address@email.com",
		        "password": "2343331234",
		    })

        response.should.have.status(200)
    })
 
})

describe('GET /contact_form/entries', () => {
    const payload =  {
        "email": "address@email.com",
        "password": "2343331234",
    }

    it('get list success ', async () => {
        const response = await request(app)
            .get('/contact_form/entries')
            .set( "Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkZHJlc3NAZW1haWwuY29tIiwicGFzc3dvcmQiOiIyMzQzMzMxMjM0IiwiaWF0IjoxNTg4MjU0MDEwfQ.8F9OWDE2ZZcJQxjRY90Mn5W7xyZGtOirLfYEaAUl72U" )
            .send()

        response.should.have.status(200)
        console.log(response.body)
    })
})

describe('GET /contact_form/entries/:id', () => {
    const payload =  {
        "email": "address@email.com",
        "password": "2343331234",
    }

    it('get one success ', async () => {
        const response = await request(app)
            .get('/contact_form/entries/sdfwefwfwff')
            .set( "Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkZHJlc3NAZW1haWwuY29tIiwicGFzc3dvcmQiOiIyMzQzMzMxMjM0IiwiaWF0IjoxNTg4MjU0MDEwfQ.8F9OWDE2ZZcJQxjRY90Mn5W7xyZGtOirLfYEaAUl72U" )
            .send()

        response.should.have.status(200)
        console.log(response.body)
    })
 
})