import React from 'react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import FC from "../../public/img/face-card.svg"
function Header(props) {
    return (
        <div>
            <header className="flex h-20 w-full shrink-0 items-center justify-between  px-4 md:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <Link to="#" className=" sm:hidden block lg:flex" prefetch={false}>
                            <img src={FC} className='md:w-[400px] w-[300px] mx-auto mt-8' alt="Face-card-logo" />
                        </Link>
                        <div className="grid gap-2 px-4 py-3">
                            <Link to={"/"} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Features
                            </Link>
                            <Link to={"#"} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={"intent"}>
                            Templates
                            </Link>
                            <Link to={"#"} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={"intent"}>
                            Testimonials
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link to="#" className="mr-6 hidden lg:flex" prefetch={false}>
                    <img src={FC} alt="Face-card-logo" />
                    <span className="sr-only">Face Card</span>
                </Link>
                <nav className=" hidden lg:flex gap-6">
                    <Link
                    to={"#"}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 text-[#282828] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                    >
                    Features
                    </Link>
                    <Link
                    to={"#"}
                    className="group text-[#282828] inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={"intent"}
                    >
                    Templates
                    </Link>
                    
                    <Link
                    to={"#"}
                    className="group text-[#282828] inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                    >
                    Testimonials
                    </Link>
                </nav>
                <div className='flex items-center justify-between gap-3'>
                    <div>
                        <Link className='bg-transparent text-[#282828] '>Login</Link>
                    </div>
                    <div>
                        <Button className='bg-transparent border md:py-4 py-3 text-[#282828]'>Create a Resume</Button>
                    </div>
                </div>
            </header>
        </div>
    );
}
function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
function MountainIcon(props) {
    return (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
)}

export default Header;