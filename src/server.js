import { Router } from 'express'
import IndexController from './ssr/IndexController'

const router = Router()

router.get('/*', IndexController.index)
