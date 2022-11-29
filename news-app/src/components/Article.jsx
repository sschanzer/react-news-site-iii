export default function Article(props) {
    
    return(
        <div className="article">
            <h1>{props.id}, {props.title}</h1>
            <p>{props.created_date}</p>
            <iframe width="80%" height="300" src={props.url} title={props.url}></iframe>
            <a href={props.url}>Go to article page</a>
            <h5>Author: {props.author}</h5>
            <p>object id: {props.object_id}</p>
        </div>
    )
} 