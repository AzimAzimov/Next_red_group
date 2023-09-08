import axios from "axios";
import { IPosts } from './../interfaces/post.interface';


const API_URL = 'http://localhost:4200'
axios.defaults.baseURL = API_URL

export const postService = {
  async getAll() {
    const { data } = await axios.get<IPosts[]>('/posts')
    return data
  },

  async getById(id: string) {
    const { data } = await axios.get<IPosts[]>('/posts', {
      params: {
        id: id
      }
    })
    return data[0]
  }
}