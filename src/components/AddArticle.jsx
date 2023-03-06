import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import { Link } from "react-router-dom";
import Comments from "./Comments";
export default function Articles({isAuth}) {
  const [articles, setArticles] = useState([]);
const [comments, setComments]= useState("");
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
 

  return (
    <div>
      
      <div className="homePage">
     
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
          }) => (
            <div className="post">
            <div key={id}>
              {isAuth && <DeleteArticle id={id} imageUrl={imageUrl} />}
                <div>
                   <img
                      src={imageUrl}
                      alt="img"
                      style={{ height: "40%", width: "50%", marginLeft: "23%"}}
                    />
               
                </div>
                <div className="col-9 ps-2">
                  <div className="row">
                  <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                  
                    </div>
                  </div >
                  <h3 style={{marginTop: "12px", marginLeft: "-10px"}}>{title}</h3>
                  </div>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <h5 className="postTextContainer" >{description}</h5>
              </div>
            </div>
          )
        )
      )}
      </div>
    
       <Comments />
    </div>
  );
}
