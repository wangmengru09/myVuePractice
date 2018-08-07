// 使用 Mock
var Mock = require('mockjs')

export default Mock.mock('https://getlogin/login', 'get', {
  code: 200,
  username: 'admin',
  password: '123456',
  token: '1231231231231231'
})
