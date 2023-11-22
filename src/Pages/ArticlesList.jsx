import { useEffect } from "react"
import { useState } from "react"

const ArticlesList = () => {
  const [ articles, setArticles ] = useState([])


  useEffect(() => {
      fetch('http://localhost:3000/articles', {
          method: 'get', 
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then(response => {
          if(!response.ok){
            throw new Error(response.statusText)
          } else {
            return response.json()
          }
        }) 
      .then(data => { 
        setArticles(data)
        })
      .catch((error) => {
        console.log(error)
        });
  }, [setArticles]) 

  return(
  <div>
      {articles.map((article) => {
        return (
          <div  className="border border-white p-3" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        )
      })}
  </div>
  )
}

export { ArticlesList }
