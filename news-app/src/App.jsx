import { useState, useEffect } from 'react'
import './App.css'
import AppNav from './components/AppNav'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
// import newsData from './data/news.json'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import {createContext} from 'react'
import SectionPage from './pages/SectionPage'
import axios from 'axios'


// import ArticlesContext from './context'

// const ArticlesContext = createContext(null)

function App() {

  const [searchTitle, setSearchTitle] = useState("")

  const [allArticles, setAllArticles] = useState([])

  const [filterArticles, setFilterArticles] = useState(null)

  //   newsData.map((article, index) => {
  //   return {
  //     id: index + 1,
  //     title: article.title,
  //     created_date: article.created_at,
  //     url: article.url, 
  //     author: article.author,
  //     object_id: article.objectID,
  //     tags: article._tags,
  //   }
  // }))

  useEffect( ()=>{
   
    axios.get('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50').then( (response)=>{

    // console.log(response.data.hits)

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

      setAllArticles(apiArticles)  
    })
  }, [] )

  function getOneArticle(index){
    return allArticles[index]
  }
  
  
  
  
  // async function callApi() {
  //   let response = await axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50`)
  //     // console.log(response.data.hits)

  //     let apiArticles = response.data.hits.map((article, index) => {
  //       return {
  //             id: index + 1,
  //             title: article.title,
  //             created_date: article.created_at,
  //             url: article.url, 
  //             author: article.author,
  //             object_id: article.objectID,
  //             tags: article._tags,
  //           }})
  //       setAllArticles(apiArticles)
  //       console.log('this is aprArticles', apiArticles)
  // }

  // useEffect(()=>{
  //   callApi()
  // }, [])
  

  
  function getOneArticle(index){
    return allArticles[index - 1]
  }

  return (
    <div className="App">
    <ArticlesContext.Provider value={allArticles}>
      
      <AppNav articles={allArticles} setSearchTitle={setSearchTitle} filterArticles={filterArticles} setFilterArticles={setFilterArticles} />

      <Router>
          <Routes>
            <Route path='/' element={<HomePage articles={allArticles} filterArticles={filterArticles}/>} />
            <Route path='/article/:articleID' element={<ArticlePage getArticle={getOneArticle} />} />
            <Route path='/sections/:section_tag' element={<SectionPage/> } />
          </Routes>
      </Router>   
      
      </ArticlesContext.Provider>

      
    </div>
  )
}

export default App

const ArticlesContext = createContext(null)

export {ArticlesContext}
