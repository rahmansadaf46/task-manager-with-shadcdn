
import { Link } from 'react-router';
import logo from '../../assets/react.svg'; // Adjust the path as necessary
import { ModeToggle } from '../mode-toggler';

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <span className="text-xl font-bold ml-2">MyApp</span>
            </div>
            <Link to="/tasks">Tasks</Link>
            <Link to="/users">Users</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;