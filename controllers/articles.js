import Article from '../models/article.js'

export const index = async (req, res) => {
	const articles = await Article.find().sort({ createdAt: 'desc' })
	res.render('articles/index', { articles: articles })
}

export const create = (req, res) => {
	res.render('articles/new', { article: new Article() })
}

export const edit = async (req, res) => {
	const article = await Article.findById(req.params.id)
	res.render('articles/edit', { article: article })
}

export const show = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug })
	if (article == null) res.redirect('/')
	res.render('articles/show', { article: article })
}

export const post = async (req, res, next) => {
	req.article = new Article()
	next()
}

export const update = async (req, res, next) => {
	req.article = await Article.findById(req.params.id)
	next()
}

export const destroy = async (req, res) => {
	await Article.findByIdAndDelete(req.params.id)
	res.redirect('/')
}
