/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-10-14 17:56:13
 * @LastEditors: 执念 gyb2020018@163.com
 * @LastEditTime: 2024-10-23 14:20:20
 * @FilePath: /eventservice/src/config/mysql_server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let mysqlServer:any ={}

let options: any = {
  dialect: 'mysql',
  logging: false,
  force: true,
  timezone: '+08:00',
  baseDir: 'modelsql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  define: {
    timestamps: false,
  }
}

if (process.env.NODE_ENV === 'dev') {
  mysqlServer = {
    host: '115.159.158.244',
    username: 'root',
    password: '961204',
    database: 'time-event',
    port: 3306,
    ...options,
  }
}

export default mysqlServer;