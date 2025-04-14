/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-10-28 22:39:32
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-04-14 16:25:31
 * @FilePath: /eventservice/src/routes/registerRouter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import index from './index'
import _ from 'lodash'

function open_api_register(app, ...routes) {
  _.each(routes, (router) => {
    app.use(router)
  })
}


function setRoutes(app): void {
  open_api_register(app, [index])
}

export default setRoutes
