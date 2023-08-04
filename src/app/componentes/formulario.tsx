'use client'
import React, { FormEvent } from 'react'
import firebaseConfig from '@/app/serviços/firebase'
import {ref, set, get, update, remove, child} from 'firebase/database'
import styles from '@/app/componentes/formulario.module.css'

const database = firebaseConfig()

export default function Formulario() {
    const [titulo, setTitulo] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [descriçao, setDescriçao] = React.useState('')
    const [preço, setPreço] = React.useState('')
    

    function gravar(e: FormEvent){
        e.preventDefault()
         
        // const dados={
        //         titulo,
        //         url,
        //         descriçao,
        //         preço
        //     }
         set(ref(database ),{
            titulo:titulo,
            url: url,
            descriçao:descriçao,
            preço:preço
         })  
    }
  return (
    <>
      <form className={styles.form} onSubmit={gravar}>
        <label>
            <h3>Nome do Produto</h3>
            <input type="text" placeholder='Nome do produto' value={titulo} onChange={e=> setTitulo(e.target.value)} />
        </label>
        <label>
            <h3>Imagem do Produto</h3>
            <input type="file"  value={url} onChange={e=> setUrl(e.target.value)} />
        </label>
        <label>
            <h3>Descrição do Produto</h3>
            <input type="text" placeholder='Descrição do produto' value={descriçao} onChange={e=> setDescriçao(e.target.value)} />
        </label>
        <label>
            <h3>Preço do Produto</h3>
            <input type="number" placeholder='Preço do produto' value={preço} onChange={e=> setPreço(e.target.value)} />
        </label>
        <button>Enviar</button>
        
      </form> 
    </>
  )
}
