import ArticleList from "../components/ArticleList"
import AppNav from "../components/AppNav";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from "react";
import ArticleTeaser from "../components/ArticleTeaser";

export default function HomePage({articles, filterArticles}){
//     Extract the value of the text input and set it to a new state value (searchTitle)
//     Update our useEffect() dependency array to include searchTitle

    // const [filterArticles, setFilterArticles] = useState(articles)
    
    // const handleSearch = () => {   
    //     let text = document.getElementById('input')
    //     let filteredList = articles.filter(article => {
    //         if (article.title.toLowerCase().includes(text.value.toLowerCase())){
    //             return true
    //         }
    //         return false
    //    })
    //    console.log('filtered list:', filteredList)
    //    setFilterArticles(filteredList)
    // }

    // useEffect(() => {
    //     // getting the articles to display on the page when searched 
    //     handleSearch()
    // }, [text.value])
    console.log('filter', filterArticles)
    console.log('articlex', articles)
    return(
        <div>
        {/* <input type="text" placeholder="search"></input> */}
        {/* <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <Form.Control id='input' placeholder="Site Results" onChange={handleSearch} />
        </InputGroup> */}
            {filterArticles != null ?
            <div> 
            {filterArticles.map((article) => (<ArticleTeaser article={article} />) )} 
            <hr/> 
            </div> 
            : 
            <ArticleList articles={articles}/>
            }
            
           
        </div>
    )
}