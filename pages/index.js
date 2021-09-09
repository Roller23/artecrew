import Head from 'next/head'
import Logo from '../components/logo'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artecrew</title>
        <meta name="description" content="Strona Artecrew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sectionWrap}>
        <Logo></Logo>
      </div>

    </>
  )
}
