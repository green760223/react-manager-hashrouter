import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

// const base = process.env.BASE_URL

// 配置代理路径
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://api-driver.marsview.cc/api', // 第三方 API 的 URL
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
  })
)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`)
})
