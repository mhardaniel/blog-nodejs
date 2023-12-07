import { create, destroy, edit, post, show, update } from '../controllers/articles.js'

import express from 'express'
import { saveArticleAndRedirect } from '../middlewares/index.js'

const router = express.Router()

router.get('/new', create)

router.get('/edit/:id', edit)

router.get('/:slug', show)

router.post('/', post, saveArticleAndRedirect('new'))

router.put('/:id', update, saveArticleAndRedirect('edit'))

router.delete('/:id', destroy)

export default router
