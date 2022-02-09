const request = require('supertest')
const app = require('../../app')
const { testEnvironment } = require('../../jest.config')

/***
 * Testing route::: GET /api/posts
 * Get all posts and it is possible to specify 'page' and 'limit'.
 */

describe('GET /api/posts', () => {
    test('It should respond with statusCode: 200', async () => {
        const response = await request(app).get('/api/posts')
        expect(response.statusCode).toBe(200)
    })
})

/***
 * Testing route::: GET /api/posts/id
 * Get the post with a specific id.
 */

const id = '62026360526baf846490d797'

describe('GET /api/posts/id:', () => {
    test(`It should respond with data of id: ${ id } statusCode: 200`, async () => {
        const response = await request(app).get(`/api/posts/${ id }`)
        expect(response.statusCode).toBe(200)
    })

    test(`It should respond with unAuthorized statusCode`, async () => {
        const wrongId = 'abcdefaaaa'
        const response = await request(app).get(`/api/posts/${ wrongId }`)
        expect(response.statusCode).toBe(404)
    })
})


/***
 * Testing route::: GET /api/posts/id
 * Get the post with a specific id.
 */

describe('DELETE /api/posts/id:', () => {
     test(`It should delete the post with the id: ${ id } statusCode: 200`, async () => {
         const response = await request(app).delete(`/api/posts/${ id }`)
         expect(response.statusCode).toBe(401)
     })
 
     test(`It should respond with unAuthorized statusCode`, async () => {
         const wrongId = 'abcdefaaaa'
         const response = await request(app).delete(`/api/posts/${ wrongId }`)
         expect(response.statusCode).toBe(401)
     })
})
 
