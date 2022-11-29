import '../App.css'
import {Link, useNavigate} from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function ArticleTeaser({article}) {

    const navigate = useNavigate();

    return(
        <div className="articleTeaser">
            <Card style={{ width: '36rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{article.id}. {article.title}</Card.Title>
                    <Card.Text>
                        {article.created_date}
                    </Card.Text>
                    <Button onClick={ () => { navigate(`/article/${article.id}`)}} variant="primary">View article</Button>
                </Card.Body>
            </Card>


            {/* <a href={`/#/article/${article.id}`}>go to article page</a> */}
            {/* <div onClick={ () => { navigate(`/article/${article.id}`)}}> */}
                {/* <Link to={`/article/${article.id}`} /> */}
                
                {/* <h2>{article.id}. {article.title}</h2> */}
                
                
                
                {/* <p> {article.created_date} </p> */}
            {/* </div> */}

        </div>
    )
} 