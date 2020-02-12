import {
  request
} from './request';

export function getAutorityToLogo() {
  // return request({
  request({
    method: 'post',
    url: '/login',
    data: {
      username: 'admin',
      password: 123456
    }
  }).then(res => {
    console.log(res);
  })
}