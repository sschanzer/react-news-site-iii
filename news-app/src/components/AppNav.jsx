import sections from '../data/sections.json'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Article from './Article';
import ArticleList from './ArticleList';
import { useEffect } from 'react';
import ArticleTeaser from './ArticleTeaser';

export default function AppNav({articles, setFilterArticles, filterArticles}) {

    
    const [trackSearch, setTrackSearch] = useState(null)
    const handleSearch = (event) => {   
        if (event.target.value == ""){
            setTrackSearch(null)
        }
        else{
            setTrackSearch(event.target.value)
            console.log(trackSearch)
        }
    }

    function myList() {
        let filteredList = []
        articles.map(article => {
            if(article.title.toLowerCase().includes(trackSearch.toLowerCase())){
            filteredList.push(article)
            }
        })
        if (filteredList.length > 0){
            setFilterArticles(filteredList)
            console.log(filteredList)
    }
    } 

    useEffect(()=>{
        myList()
    },[trackSearch])


    
    return(
        <div className='appNav'>
            <Nav>
            {sections.map(section => {
                    return <Nav.Item key={section.label}>
                    <Nav.Link href={`/#/sections/${section.tag}`} key={section.label}>
                        {section.label}
                        </Nav.Link>
                    </Nav.Item>
                })}
            
    </Nav>
    <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <Form.Control id='input' placeholder="Site Results" onChange={handleSearch} />
        </InputGroup>
        {/* <ArticleList articles={filterArticles}/> */}
        </div>
    )

            }