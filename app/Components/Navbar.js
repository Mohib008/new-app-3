import { NavigationMenuDemo } from "./NavigationMenuDemo";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">MyLogo</h1>
                <ul className="hidden md:flex space-x-6">
                <NavigationMenuDemo />
                    <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
