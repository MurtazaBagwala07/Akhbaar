import {categories} from "../constants"
import fetchNews from "../utils/fetchNews"

const page = async() => {
    const news:NewsResponse= await fetchNews(categories.join(','))
    console.log(news)
  return (
    <div>

    </div>
  )
}

export default page