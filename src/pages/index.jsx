import Head from 'next/head'
import { Header } from 'src/components/Header'


const Index=()=> {

  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header/>

      <h1>Next.jsを学ぶ</h1>
      <p>JSONplaceholderのAPI</p>
    </div>
  )
}

export default Index;
