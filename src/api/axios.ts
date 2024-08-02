import axios, { CreateAxiosDefaults } from 'axios'
import { getContentType } from '@/helpers/api.helpers'

const axiosOptions: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: getContentType(),
  withCredentials: true,
}

export const instanceBase = axios.create(axiosOptions)
