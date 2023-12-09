const express = require('express')
const { create, destroy, edit, store, show, update } = require('./../controllers/articles.js')
const { saveArticleAndRedirect } = require('./../middlewares/index.js')

const router = express.Router()

router.get('/new', create)

router.get('/edit/:id', edit)

router.get('/:slug', show)

router.post('/', store, saveArticleAndRedirect('new'))

router.put('/:id', update, saveArticleAndRedirect('edit'))

router.delete('/:id', destroy)

module.exports = router
