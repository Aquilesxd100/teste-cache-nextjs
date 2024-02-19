import { useRouter } from "next/router";

import { funcionariosData } from "../../data/funcionariosData";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const userToShow  = funcionariosData.find((func) => func.id === id)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {
        userToShow && (
          <div 
            style={{ 
              width: 600,
              border: "2px solid #000000",
              padding: "8px",
              margin: "2px 6px"
            }}
          >
            <h4>Nome: {userToShow.name}</h4>
            <h5>ID: {userToShow.id}</h5>
            <img 
              style={{
                width: "600px"
              }}
              src={userToShow.imgUrl}
            />
          </div>
        )
      }
    </div>
  )
}