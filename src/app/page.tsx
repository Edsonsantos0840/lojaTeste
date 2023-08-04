import Image from 'next/image'
import Link from 'next/link';

async function mostraProdutos(){
  const request = await fetch('http://localhost:3004/produtos')
  const data = await request.json()
  return data; 
}
export default async function Inicio() {
   const produtos =await mostraProdutos()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap 2">
      <div >
        {produtos.map(({id, titulo, url, descrição, preço}:{
          id:string
          titulo:string
          url:string
          descrição: string
          preço:number
        })=>(
           <Link href={`/produtos/${id}`} key={id}>
            <h2>{titulo}</h2>
            <Image src={url} alt={titulo} width={300} height={300}/>
             <p>Descrição: {descrição}</p>
             <h5>Preço: {preço}</h5>
           </Link>

        ))}
      </div>
    </main>
  )
}
