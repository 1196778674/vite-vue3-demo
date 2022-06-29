import Mock from 'mockjs'
if (process.env.NODE_ENV === 'development') {
  Mock.mock('/test', 'get', {
    code: 200,
    msg: '',
    data: {
      name: 'xhh',
    },
  })
}
