/*
 * @Author: gaowei1012 gyb2020018@163.com
 * @Date: 2025-02-27 16:54:50
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-03-03 17:50:31
 * @FilePath: /eventservice/src/utils/swagger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from 'express'
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'

//配置swagger-jsdoc
const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: '时忆接口文档',
      version: '1.2.2'
    }
  },
  // 去哪个路由下收集 swagger 注释
  //   apis: [path.join(__dirname, '../routes/*.ts')]
  apis: [
    'src/routes/about_api/about_api.ts',
    'src/routes/account_api/account_api.ts',
    'src/routes/account_classification_api/account_classification_api.ts',
    'src/routes/agreement_api/agreement_api.ts',
    'src/routes/apple_api/apple_api.ts',
    'src/routes/captcha_api/captcha_api.ts',
    'src/routes/cos_api/cos_api.ts',
    'src/routes/dictionary_api/dictionary_api.ts',
    'src/routes/material_api/material_api.ts',
    'src/routes/message_api/message_api.ts',
    'src/routes/privacy_api/privacy_api.ts',
    'src/routes/push_api/push_api.ts',
    'src/routes/schedule_api/schedule_api.ts',
    'src/routes/schedule_classification_api/schedule_classification_api.ts',
    'src/routes/schedule_sub_task_api/schedule_sub_task_api.ts',
    'src/routes/sms_api/sms_api.ts',
    'src/routes/taskSchedule_api/taslSchedule_api.ts',
    'src/routes/users_api/profile_api.ts',
    'src/routes/users_api/user_api.ts',
    'src/routes/wechat_api/wechat_api.ts'
  ]
}

var swaggerJson = function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
}
const swaggerSpec = swaggerDoc(options)

var swaggerInstall = function (app) {
  if (!app) {
    app = express()
  }
  // 开放相关接口，
  app.get('/swagger.json', swaggerJson)
  // 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
  app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
}

export default swaggerInstall
