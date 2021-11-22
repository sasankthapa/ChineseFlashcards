import app from '../app'
const supertest=require('supertest')

describe('Testing the app and end points',()=>{
    test('Verify connection is working',()=>{
    })

    test('gets the test endpoint', async()=> {
      const response = await supertest(app).get('/test')

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('pass!')
    })
     
    afterAll(()=>{
    })
})
