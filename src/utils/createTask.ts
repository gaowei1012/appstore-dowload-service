/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-11-09 10:02:28
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-03-03 17:56:40
 * @FilePath: /eventservice/src/utils/createTask.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TaskScheduler from './taskScheduler'
import { send } from './sendMail'

const task = async function () {
  // 定时任务执行逻辑
  await send('mingwei20200118@gmail.com', '测试邮件发送!')
  return '允许定时任务每个星期三中午12点 发送邮件...' + new Date().getMinutes() + '-' + new Date()
}

const taskScheduler = new TaskScheduler('1,3,9 * * * * *', task)

// console.info('taskScheduler=====>>>', taskScheduler)

export default taskScheduler
