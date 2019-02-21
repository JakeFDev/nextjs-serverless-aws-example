import Head from 'next/head'

const Home = () => {
  return (
    <div style={{ marginTop: '64px' }}>
      <Head>
        <meta charset='utf-8' />
        <link href="https://fonts.googleapis.com/css?family=Raleway|Roboto" rel="stylesheet" />
        <style jsx global>{`
        body {
          font-family: 'Raleway', 'Roboto', sans-serif;
          background: #912F56;
          color: #EAF2EF;
        }
      `}</style>
      </Head>
      <div
        style={{
          fontSize: '32px',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: '1px',
          maxWidth: '600px',
          margin: 'auto'
        }}
      >
      Nextjs serverless + aws lambda = 💛
      </div>
    </div>
  )
}
  
  export default Home