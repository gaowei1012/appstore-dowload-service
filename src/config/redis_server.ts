/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-10-14 17:56:13
 * @LastEditors: 执念 gyb2020018@163.com
 * @LastEditTime: 2024-10-22 21:49:57
 * @FilePath: /eventservice/src/config/redis_server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let redisLocalServer: any = {}
let options:any = {
  redis_app_login_session: 'eventservice-app-user:loginsession',
}
// if (process.env.NODE_NEV == 'dev') {
//   redisLocalServer = {
//     redisPort: 6379,
//     // redisHost: '127.0.0.1',
//     redisHost: '47.92.94.8',
//     redispwd: '961204',
//     ...options
//   };
// } else {
//   redisLocalServer = {
//     redisPort: 6379,
//     redisHost: '127.0.0.1',
//     // redisHost: '47.92.94.8',
//     redispwd: '961204',
//     ...options
//   };
// }

redisLocalServer = {
  redisPort: 6379,
  redisHost: '115.159.158.244',
  // redisHost: '127.0.0.1',
  redispwd: '961204',
  no_ready_check: true,
  ...options
}

// redisLocalServer = {
//   redisPort: 6379,
//   redisHost: '127.0.0.1',
//   redispwd: '961204',
//   ...options
// };

export default redisLocalServer

