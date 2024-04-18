import { Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const authStatus = useSelector( (state) => state.auth.status)
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
      active: !authStatus,
    },
    {
      name: "Add Post",
      slug: "/Add-Post",
      active: authStatus,
    }
  ]
  return (
    <div>Header</div>
  );
};

export default Header;