import { imgsData } from "../../data/imgs/imgsData";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      },      
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  await delay(5000);
  const id = context.params.id;

  return {
    props: {
      imgsSeguradoras: imgsData,
      id: id,
    },
  }
}

export default function Page(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <h1>{props.id}</h1>
      {
        props.imgsSeguradoras.map((segImg) => 
          <div 
            style={{ 
              width: 300,
              border: "2px solid #000000",
              padding: "8px",
              margin: "2px 6px"
            }}
          >
            <img 
              style={{
                width: "300px"
              }}
              src={segImg}
            />
          </div>
        )
      }
    </div>
  )
}