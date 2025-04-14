/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-10-28 22:39:32
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-04-14 16:35:51
 * @FilePath: /eventservice/src/routes/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from 'express'
import { failBody } from '@/utils'

const router: express.Router = express()

router.get('/', async function (req: any, res: express.Response, next) {
  try {
    res.type('html')
    res.send('<html> <head>时忆APP-IOS下载</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1> <a class="blink ios" href="itms-services://?action=download-manifest&url=https://xxxx/cmdr.plist">IOS下载</a> </body></html>');
  } catch (err) {
    res.send(failBody(err.code, err.message))
  }
})

export default router
