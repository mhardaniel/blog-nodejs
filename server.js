const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const { index } = require('./controllers/articles.js')
const articleRouter = require('./routes/articles')

const app = express()
const PORT = 8080
const DB_URL = 'mongodb://mongo:27017'
const DB_NAME = 'blog'

main().catch((err) => console.log(err))

async function main() {
	await mongoose.connect(`${DB_URL}/${DB_NAME}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
}

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', index)

app.use('/articles', articleRouter)

app.listen(PORT, () => console.info('server running'))
