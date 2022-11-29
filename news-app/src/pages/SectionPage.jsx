import axios from "axios"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ArticlesContext } from "../App"
import ArticleList from "../components/ArticleList"

export default function SectionPage(){

    const {section_tag} = useParams()
    // const articles = useContext(ArticlesContext)
    const [sectionArticles, setSectionArticles] = useState([])

    // function getFilteredArticles(){

    //     let filteredList = articles.filter((article) =>{
    //         for (let tag of article.tags){
    //             if (section_tag == tag){
    //                 return true
    //             }
    //         }
    //     })
    //     return filteredList
    // }

    async function getSectionArticles(){
        let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date', {
            params:{ 
                tags: `${section_tag}`,
                hitsPerPage: 50
                // query: ('computer')
            }
        })
        console.log(response.data.hits)
        let apiArticles = response.data.hits.map((article, index) => {
            return {
            id: index+1,
            title: article.title,
            created_date: article.created_at,
            url: article.url,
            author: article.author,
            object_id: article.objectID,
            tags: article._tags
      }})

        setSectionArticles(apiArticles)
    
    }

    useEffect(() => {
    
        getSectionArticles()
      
    }, [section_tag])
    

    return(
        <div>
            this is section page with tag {section_tag}
            
           <ArticleList articles={sectionArticles} />
        </div>
    )
}