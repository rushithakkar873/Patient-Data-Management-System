import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white">
            <div className="flex justify-between items-center px-6 py-3">
                <div className="flex space-x-4 items-center">
                    {/* Logo */}
                    <div>
                        <Link to={'/patient/dashboard'} className="flex items-center">
                            <span className="font-bold text-xl">𝐆𝐏𝐓-𝐌𝐞𝐝𝐀𝐬𝐬𝐢𝐬𝐭</span>
                        </Link>
                    </div>
                    {/* Primary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to={'/patient/dashboard'} className="py-5 px-3 hover:text-gray-300">Dashboard</Link>
                        <Link to={'/patient/cases-history'} className="py-5 px-3 hover:text-gray-300">Cases History</Link>
                        <Link to={'/patient/medical-info'} className="py-5 px-3 hover:text-gray-300">Medical Information</Link>
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
                                <Link to={'/patient/profile'}> My Profile </Link>
                            </DropdownMenuItem>
                            <div className='block md:hidden'>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link to={'/patient/dashboard'}>Dashboard</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to={'/patient/cases-history'}>Cases History</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to={'/patient/medical-info'}>Medical Information</Link>
                                </DropdownMenuItem>
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
