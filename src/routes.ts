import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()
const routes = express.Router()
const upload = multer(multerConfig)

routes.get('/items', itemsController.index)

/**
 * Na rota que vamos receber a imagem, podemos passar antes do método do controller,
 * um novo parâmetro com as configurações do multer e o nome do campo no formulário
 *  */ 
routes.post('/points', upload.single('image'), pointsController.create)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes