import {
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@nextui-org/react";
import { PiGridFourFill } from 'react-icons/pi';
import { FaSearch, FaCog, FaBell, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';



export default function MainNavBar() {
    return (
        <Navbar className="px-4 py-2 bg-[#11334f]">
            <NavbarBrand className="flex items-center space-x-2">
                <PiGridFourFill className="w-8 h-8  text-white" />
                <h1 className="text-xl font-bold text-white">Test</h1>
            </NavbarBrand>
            <NavbarContent as="div" justify="end" className="flex items-center space-x-3">
                <FaSearch className="w-5 h-5 text-gray-400" />
                <div className="border-l border-gray-300 h-5 mx-2"></div>
                <FaCog className="w-5 h-5 text-gray-400" />
                <FaBell className="w-5 h-5 text-gray-400" />
                <FaCalendarAlt className="w-5 h-5 text-gray-400" />
                <div className="border-l border-gray-300 h-5 mx-2"></div>
                <div className="relative w-8 h-8">
                    <Image
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="Profile"
                        layout="fill"
                        className="rounded-full"
                    />
                </div>
            </NavbarContent>
        </Navbar>
    );
}