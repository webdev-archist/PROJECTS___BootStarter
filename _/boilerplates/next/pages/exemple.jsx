export default function Exemple({datas}) {

    console.log(datas);
    
  return (
    <div>page: {datas}</div>
  )
  }
  
  export async function getStaticProps(){
  const _ = oui()
  
    return {
        props: {datas: {oui:_}}
    }
  }