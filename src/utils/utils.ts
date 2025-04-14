/*
 * @Author: 执念 gyb2020018@163.com
 * @Date: 2024-10-14 17:56:13
 * @LastEditors: 执念 gyb2020018@163.com
 * @LastEditTime: 2024-10-25 10:26:07
 * @FilePath: /eventservice/src/utils/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { v4 as uuidv4 } from 'uuid'

export function failBody(statusCode: number, message?: string, data?: any) {
  if (message === void 0) message = ''
  if (data === void 0) data = null
  return {
    success: false,
    statusCode: statusCode ? statusCode : 99999,
    message: message,
    data: data
  }
}

export function successBody(message: string, data?: any, extra?: any) {
  if (message === void 0) message = ''
  if (data === void 0) data = {}
  return {
    success: true,
    statusCode: 200,
    message: message,
    data: data,
    ...extra
  }
}

export function getTimeStamp() {
  return new Date().getTime()
}

export function getUuidWithV4() {
  return uuidv4()
}

export function getUserId(req) {
  const sessionid = req.headers['sessionid'] ? req.headers['sessionid'] : ''
  const sessionArr = sessionid.split('::')
  const userId = sessionArr[0]
  return userId
}

export const isDateIntersection = () => {
  return null
}

/**
 * 过滤对象中的假值
 * @param obj 目标对象
 * @returns 
 */
export const filteredObj = (obj) => {
  let newObj = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null && obj[key] !== '' && obj[key] !== undefined && obj[key] !== 'undefined') {
      newObj[key] = obj[key]
    }
  })
  return newObj
}


export const delEmptyQueryNodes = (obj = {}) => {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    value && typeof value === 'object' && delEmptyQueryNodes(value);
    (value === '' || value === null || value === undefined || value == 'undefined' || value.length === 0 || Object.keys(value).length === 0) && delete obj[key];
  });
  return obj;
};