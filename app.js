const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))


// 顯示所有路由 request 的資訊
app.all('*', (req, res, next) => {
  const now = new Date().toISOString()
  const time = now.substring(0, 10) + ' ' + now.substring(11, 19)
  const method = req.method
  const path = req.baseUrl + req.path

  // 避免顯示 favicon request
  if (path !== '/favicon.ico') {
    console.log(`${time} | ${method} from ${path}`)
    next('route')
  }
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index', { message: '列出全部 todo' })
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.render('index', { message: '新增 Todo 頁面' })
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.render('index', { message: '顯示一筆 Todo' })
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.render('index', { message: '新增一筆  Todo' })
})

app.delete('/:id/delete', (req, res) => {
  res.render('index', { message: '刪除 Todo' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})