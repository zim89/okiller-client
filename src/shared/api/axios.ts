import { getContentType } from '@/shared/api/api.helpers.ts'
import axios, { CreateAxiosDefaults } from 'axios'

const axiosOptions: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: getContentType(),
  withCredentials: true,
}

export const instanceBase = axios.create(axiosOptions)
