import type { NextPage } from 'next'
import Head from 'next/head'

// import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Home from '../../components/Home/Home'


const IndexPage: NextPage = () => {

  return (
    <div className={styles.container}>
        <Home></Home>
    </div>
  )
}

export default IndexPage
