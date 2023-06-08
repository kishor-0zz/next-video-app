import axios from "../../utils/axios"

const getTages = async () => {
   const response = await axios.get("/tags")
   return response.data
}
export default getTages;