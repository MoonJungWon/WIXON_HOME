

import {Header} from './component/Header'
import {Footer} from './component/Footer'
import styles from '../styles/Home.module.css';
import {GridBox} from './component/gridBox'
export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header></Header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <GridBox link={"https://nextjs.org/docs"} title={"Documentation"} content={"Find in-depth information about Next.js features and API."} />
          <GridBox link="https://nextjs.org/learn" title="Learn" content="Learn about Next.js in an interactive course with quizzes!"/>
          <GridBox link="https://github.com/vercel/next.js/tree/canary/examples" title="Examples" content="Discover and deploy boilerplate example Next.js projects."/>
          <GridBox link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" title="Deploy" content="Instantly deploy your Next.js site to a public URL with Vercel."/>
         
        </div> 
      </main>

      <Footer></Footer>
    </div>
  )
}
