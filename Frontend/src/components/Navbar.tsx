import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex space-x-4">
                    {/* Logo */}
                    <div>
                        <a href="#" className="flex items-center">
                            <span className="font-bold text-lg">MediAnalytix</span>
                        </a>
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
                            <DropdownMenuItem>My Profile</DropdownMenuItem>
                            {/* <DropdownMenuSeparator /> */}
                            <DropdownMenuItem className='text-red-500'>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
