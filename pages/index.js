import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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

          <input className={styles.input}></input>

          <button className={styles.button}> Add</button>

        </div>
        
      </main>

     
    </div>
  )
}
