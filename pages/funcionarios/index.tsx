import { funcionariosData } from "../../data/funcionariosData";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {
        funcionariosData.map((funcionario) => 
          <div 
            style={{ 
              width: 300,
              border: "2px solid #000000",
              padding: "8px",
              margin: "2px 6px"
            }}
          >
            <h4>Nome: {funcionario.name}</h4>
            <h5>ID: {funcionario.id}</h5>
            <img 
              style={{
                width: "300px"
              }}
              src={funcionario.imgUrl}
            />
          </div>
        )
      }
    </div>
  )
}