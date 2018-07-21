import Link from 'next/link'

const linkStyles = {
  marginRight: '1.5rem'
}

const Header = () => <header>
  <Link href="/"><a style={linkStyles}>Home</a></Link>
  <Link href="/about"><a style={linkStyles}>About</a></Link>
</header>

export default Header