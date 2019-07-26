const express = require('express')
const proxy = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(
  '',
  proxy({ target: 'https://grocery.walmart.com', changeOrigin: true })
);
app.listen(8101)