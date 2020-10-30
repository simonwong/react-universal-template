import { post } from '@/utils/request'

// 登录
export const login = data => post('/api/login', data)
