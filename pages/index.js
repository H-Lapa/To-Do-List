import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

  //string variable
  const [text, setText] = useState('');

  //string array
  const [todo, addtodo] = useState([]);

  //add to array function
  const add = (e) => {
    e.preventDefault();
    addtodo([text, ...todo]);
    setText('');

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TO-DO LIST</title>
        <meta name="application to keep track of tasks" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1 className={styles.title}>TO-DO LIST</h1>

        <div className={styles.div}>
          <form>
            <input value={text} className={styles.input} onChange={e => setText(e.target.value)}></input>

            <button className={styles.button} onClick={add}>Add</button>

          </form>

        </div>

        <div className={styles.flexV}>
          {todo.map((item) => {
              return (
                  <p className={styles.todo}>{item}</p>
              )
            })}
        </div>
        
      </main>


     
    </div>
  )
}
