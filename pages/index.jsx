import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const ShowLink = ({ show }) => <li>
  <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
    <a>{show.name}</a>
  </Link>
  <style jsx>{`
    li {
      list-style: none;
      margin: .5rem 0;
    }

    a {
      text-decoration: none;
      color: blue;
      font-style: "Arial";
    }

    a:hover {
      opacity: .6;
    }
  `}</style>
</li>

const Index = ({ shows }) => <Layout>
  <h1>Batman TV Shows</h1>
  <ul>
    {shows.map(({ show }) => <ShowLink show={show} />)}
  </ul>
  <style jsx>{`
    h1 {
      font-style: "Arial";
    }

    ul {
      padding: 0;
    }
  `}</style>
</Layout>

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index