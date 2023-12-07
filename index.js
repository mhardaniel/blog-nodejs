import articleRouter from './routes/articles.js'
import express from 'express'
import { index } from './controllers/articles.js'
import methodOverride from 'method-override'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080
const DB_URL = 'mongodb://mongo:27017'
const DB_NAME = 'blog'

mongoose.connect(`${DB_URL}/${DB_NAME}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', index)

app.use('/articles', articleRouter)

app.listen(PORT, () => console.info('server running'))
