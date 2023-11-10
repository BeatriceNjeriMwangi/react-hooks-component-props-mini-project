import react from "react";
import Article from "./Article"

function ArticleList({posts}){
    const post= posts.map(name=>{
        return <Article 
        key={name.id} 
        title={name.title} 
        date={name.date} 
        preview={name.preview}/>
    })
    return(
        <main>
            {post}
        </main>
    )
}

export default ArticleList