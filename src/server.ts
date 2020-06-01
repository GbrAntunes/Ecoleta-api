import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    return response.status(200).json({
        message: 'Listagem de vários usuários'
    })
})

app.listen(3333)