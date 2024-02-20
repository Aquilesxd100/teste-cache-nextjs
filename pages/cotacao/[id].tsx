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
  const result = await fetch(`https://api.github.com/users/${'Aquilesxd100'}/repos`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os repositórios do usuário');
      }
      return response.json();
    })
    .then(repositories => {
      return repositories
    })
    .then(async () => {
      const result2 = await fetch(`https://api.github.com/users/${'LUKKA55'}/repos`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar os repositórios do usuário');
          }
          return response.json();
        })
          .then(async () => {
            const result3 = await fetch(`https://api.github.com/users/${'dev-growdev'}/repos`)
              .then(response2 => {
                if (!response2.ok) {
                  throw new Error('Erro ao buscar os repositórios do usuário');
                }
                return result3.json();
              })
        })
    })
    .catch(error => {
      console.error('Houve um problema ao buscar os repositórios do usuário:', error);
    });

  const id = context.params.id;

  return {
    props: {
      imgsSeguradoras: imgsData,
      id: id,
      response: null
    },
  }
}

export default function Page(props) {
  console.log(props.response)
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