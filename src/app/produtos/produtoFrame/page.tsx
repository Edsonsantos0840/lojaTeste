import Image from 'next/image'
import Link from 'next/link'

export default function ProdutoFrame({titulo,url, descrição, preço}:{
    titulo:string
    url:string
    descrição: string
    preço: number
}) {
  return (
    <>
     <div className='main'>
     <h2>{titulo}</h2>
      <Image src={url} alt={titulo} width={460} height={460} className='alinha'/>
      <p>Descrição: {descrição}</p>
      <h5>Preço: {preço}</h5>
      <Link href={'/'}><h2>Voltar</h2></Link>
     </div>
    </>
  )
}
