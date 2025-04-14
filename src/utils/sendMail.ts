/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-11-09 10:21:53
 * @LastEditors: 执念 gyb2020018@163.com
 * @LastEditTime: 2024-11-09 10:35:56
 * @FilePath: /eventservice/src/utils/sendMail.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nodemail from 'nodemailer'

let transporter = nodemail.createTransport({
  service: 'QQ', // 使用内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用 SSL
  auth: {
    user: '717503359@qq.com', // 发送方邮箱的账号
    pass: 'llnjqpgijluwbfij' // 邮箱授权密码
  }
})

export const send = (to, content) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: `"时忆APP" <717503359@qq.com>`, // 发送方邮箱的账号
        to: to, // 邮箱接受者的账号
        subject: 'Welcome to 时忆', // Subject line
        // text: '"MG'Blog ?"', // 文本内容
        html: `
        <img src="http://www.zhouyi.run:3001/api/v1/files/preview?p=pexels-photo-276452.jpeg&&mimetype=image/jpeg" alt=""  style="height:auto;display:block;" />
        <p >??? <a href="http://www.zhouyi.run/#/">ZY.API</a></p>
        <p style="font-weight: bold">${content}</p>
        <p ><a style="font-size: 18px;font-weight: bolder" href="http://www.zhouyi.run/#/">确认</a></p>
        <p style="text-indent: 2em;">祝您工作顺利，心想事成</p>`
      },
      (error, info) => {
        if (error) {
          reject(error)
        }
        resolve(info)
      }
    )
  })
}
