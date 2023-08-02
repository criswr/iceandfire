import { Navbar } from 'flowbite-react';

interface ILink {
  label: string,
  route: string
}

const Header = () => {
  const links: ILink[] = [
    {
        label: 'Inicio',
        route: '/',
    },
    {
        label: 'Libros',
        route: '/libros',
    },
    {
      label: 'Favoritos',
      route: '/favoritos',
  },
]

  return (
    <Navbar className='bg-gray-800'>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Ice & Fire
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        {links.map(({ label, route }) => (
          <Navbar.Link href={route} key={route} className='border-none text-white text-lg hover:bg-gray-600'>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header