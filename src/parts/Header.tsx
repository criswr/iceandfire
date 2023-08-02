import { Navbar } from 'flowbite-react';
import { NavLink } from "react-router-dom";

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
      label: 'Favoritos',
      route: '/favoritos',
  },
]

  return (
    <Navbar className='bg-gray-800'>
      <NavLink to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Ice & Fire
        </span>
      </NavLink>

      <Navbar.Toggle />

      <Navbar.Collapse>
        {links.map(({ label, route }) => (
          <NavLink to={route} key={route} className='border-none text-white text-lg hover:bg-gray-600'>
            {label}
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header