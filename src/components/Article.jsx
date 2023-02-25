import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import LikeArticle from "./LikeArticle";
import Comment from "./Comment";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
 

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <div className="homepage" style={{ marginTop: 70 }}>
      {article && (
        <div className="post">
        <div className="postHeader">
         
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="postTextContainer">
            <h2>{article.title}</h2>
            <h5>Author: {article.createdBy}</h5>
            <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{article.description}</h4>

            <div className="author">
            <LikeArticle id={id} likes={article.likes} />
              <div className="pe-2">
                <p>{article.likes.length}</p>
              </div>
            </div>
            <Comment id={article.id} />
          </div>
        </div>
      )}
    </div>
  );
}
