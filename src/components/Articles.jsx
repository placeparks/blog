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
            <div className="homepage" key={id}>
              <div className="row-3">
              {isAuth && <DeleteArticle id={id} imageUrl={imageUrl} />}
                <div>
                   <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 180, marginTop: -20,}}
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
                  <h3 className="postTextContainer">{title}</h3>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <h5>{description}</h5>

                </div>
              </div>
            </div>
          )
        )
      )}
       <Comments />
    </div>
  );
}