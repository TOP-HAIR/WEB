import React from "react";
import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import Comment from "../../../../../shared/entity/comments";
import comments from "../../../../../shared/services/comment";
import CommentService from "./components/comment-service";

export default function HomeComments() {
  const [comment, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    function listar() {
      comments
        .get("https://65120a8bb8c6ce52b39544b4.mockapi.io/comments")
        .then((respostaObtida) => {
          setComment(respostaObtida.data);
        })
        .catch((erroOcorrido) => {
          console.log(erroOcorrido);
        });
    }

    listar();
  }, []);
  return (
    <>
      <section className="w-full h-full">
        <Card className="h-full m-5">
          <h2 className="m-6 text-2xl font-bold">Comentários</h2>
          <div className="m-6 flex flex-wrap gap-x-5 gap-y-4">
            {comment.map((comment) => (
              <div
                key={comment.id}
                className="w-96 max-w-xs grid rounded card-service p-4 relative gap-4"
              >
                <CommentService comment={comment} />
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
