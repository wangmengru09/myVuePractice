import instance from './index.js'

export function login(data) {
  return instance({
    url: '/login',
    methods: 'get',
    params: data
  });
}