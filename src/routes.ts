import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.status(200).json({
        message: 'Olá Ecoleta'
    })
})

export default routes