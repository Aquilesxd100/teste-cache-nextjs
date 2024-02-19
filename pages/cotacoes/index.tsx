import { imgsData } from "../../data/imgs/imgsData";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function getStaticProps(context) {
  await delay(5000);

  return {
    props: {
      imgsSeguradoras: imgsData
    }
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