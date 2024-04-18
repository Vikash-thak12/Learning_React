import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/Login',
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/Signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/All-Posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/Add-Post",
      active: authStatus,
    }
  ]
  return (
    <div className='py-6 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to={'/'}>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map( (item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;