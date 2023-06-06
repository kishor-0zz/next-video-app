import { axios } from "../../utils/axios"

const getVideos = async () => {
   const response = await axios.get('/video')
   return response.data
}
export default getVideos;