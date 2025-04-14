/*
 * @Author: gaowei1012 gyb2020018@163.com
 * @Date: 2025-01-06 15:23:23
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-04-14 16:42:24
 * @FilePath: /eventservice/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require('express-async-errors')
require('module-alias/register')
import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
// import swaggerInstall from './utils/swagger'
import setRoutes from './routes/registerRouter'
import { failBody } from './utils'
import { config } from './config'
// import bodyParser from 'body-parser'
import serveStatic from 'serve-static'
import cors from 'cors'
import path from 'path'

const app: express.Application = express()

app.set('port', process.env.PORT || config.port)
// view engine setup
// app.set('views', path.join(__dirname, 'templates'))
// app.set('view engine', 'jade')

app.use(logger('dev'))

const rootPath = path.join(__dirname, 'public')

app.use(serveStatic(rootPath))

// app.use(
//   express.urlencoded({
//     limit: '15mb',
//     extended: true
//   })
// )
// 解析body参数
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.static(__dirname))

// app.engine('.html', require('ejs').__express)
// app.set('view engine', 'html')
// const corsOptions = {
//   origin: config.corsOrigins,
//   credentials: true,
//   maxAge: 1728000,
//   //这一项是为了跨域专门设置的
// }

console.table([
  ["apiVersion", config.version],
  ['host', config.host],
  ['port', config.port],
  ["database", config.database.DATABASE],
  ["redisHost", config.redisbase.HOST+':'+config.redisbase.PORT],
])

// app.use(cors())

setRoutes(app)
// swaggerInstall(app)

app.use(function (req, res, next) {
  next(createError(404))
})

// 如果在接口内有try{}catch{}将无法捕获err
app.use(function (err: any, req: any, res: any, next: any) {
  res.send(failBody(err.code, err.message))
  next()
})

const http = require('http').Server(app)
http.listen(app.get('port'), '0.0.0.0', function () {
  console.log('Express server listening on port ' + app.get('port'))
})

module.exports = app
