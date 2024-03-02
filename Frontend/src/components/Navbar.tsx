import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import { NavbarProps } from '@/types';

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className="bg-black text-white">
            <div className="flex justify-between items-center px-6 py-3">
                <div className="flex space-x-4 items-center">
                    {/* Logo */}
                    <div>
                        <Link to={pathname.includes('patient') ? '/patient/dashboard' : '/doctor/cases'} className="flex items-center">
                            <span className="font-bold text-xl">𝐆𝐏𝐓-𝐌𝐞𝐝𝐀𝐬𝐬𝐢𝐬𝐭</span>
                        </Link>
                    </div>
                    {/* Primary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="py-4 px-3 hover:text-gray-300">{link.name}</Link>
                        ))}
                    </div>
                </div>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>P</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link to={pathname.includes('patient') ? '/patient/profile' : '/doctor/profile'}> My Profile </Link>
                            </DropdownMenuItem>
                            <div className='block md:hidden'>
                                <DropdownMenuSeparator />
                                {navLinks.map((link, index) => (
                                    <DropdownMenuItem key={index}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                            </div>
                            <DropdownMenuItem className='text-red-500'>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
