import ProdutoFrame from "../produtoFrame/page";

async function mostraIdProduto(produtoid:string){
    const request = await fetch(`http://localhost:3004/produtos/${produtoid}`)
    const data = await request.json()
    return data;
}
export default async function produtos({params}:{
    params:{id:string}
}) {
    const produto = await mostraIdProduto(params.id)
  return (
    <div> 
        <h1>Produto: {params.id}</h1>
        <ProdutoFrame {...produto}/>
    </div>
  )
}
