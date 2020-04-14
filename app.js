const express = require('express')
const app = express()
const port = 3000

app.all('*', (req, res, next) => {
  const now = new Date().toISOString()
  const time = now.substring(0, 10) + ' ' + now.substring(11, 19)
  const method = req.method
  const path = req.originalUrl

  // 避免顯示 favicon request
  if (path !== '/favicon.ico') {
    console.log(`${time} | ${method} from ${path}`)
    next('route')
  }
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})