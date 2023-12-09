const Article = require('./../models/article')

exports.index = async (req, res) => {
	const articles = await Article.find().sort({ createdAt: 'desc' })
	res.render('articles/index', { articles: articles })
}

exports.create = (req, res) => {
	res.render('articles/new', { article: new Article() })
}

exports.edit = async (req, res) => {
	const article = await Article.findById(req.params.id)
	res.render('articles/edit', { article: article })
}

exports.show = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug })
	if (article == null) res.redirect('/')
	res.render('articles/show', { article: article })
}

exports.store = async (req, res, next) => {
	req.article = new Article()
	next()
}

exports.update = async (req, res, next) => {
	req.article = await Article.findById(req.params.id)
	next()
}

exports.destroy = async (req, res) => {
	await Article.findByIdAndDelete(req.params.id)
	res.redirect('/')
}
