import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import FC from "../../public/img/face-card.svg"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters" })
      .max(50, { message: "Username must be at most 50 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),
});

const signupSchema = z.object({
  email: z.string().email({message: 'invalid email address'}),
  fullName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must be at most 50 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(50, { message: "Username must be at most 50 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),
});
function Header(props) {
  const [isLoginView, setIsLoginView] = useState(true);
  const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
    })
    const signup = useForm({
      resolver: zodResolver(signupSchema),
      defaultValues: {
        email: "",
        fullName: "",
        username: "",
        password: ""
      },
    })
   
    function onSubmit(values) {
      console.log("submitted!", values);
      form.reset()
    }
    function onSignUp(values){
      console.log("submitted!", values);
      signup.reset()
    }

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
                            <Link to={"/resume-templates"} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={"intent"}>
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
                    to={"/resume-templates"}
                    className="group text-[#282828] inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={"intent"}
                    >
                    Templates
                    </Link>                    
                    <Link
                    to={"/"}
                    className="group text-[#282828] inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                    >
                    Testimonials
                    </Link>
                </nav>
                <Dialog className='flex items-center justify-between gap-3'>
                  <div className='gap-3 flex'>
                      <DialogTrigger asChild>
                          <Button onClick={()=>setIsLoginView(true)} className='bg-transparent shadow-none text-[#282828] border-none' variant="outline">Login</Button>
                      </DialogTrigger>
                      <Button className='bg-transparent border md:py-4 py-3 text-[#282828]'>Create a Resume</Button>
                  </div>
                  {  isLoginView ?
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogTitle>Login</DialogTitle>
                        <Form {...form}>                        
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Ade12@" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormDescription>
                                  Must contain at least 8 characters, uppercase, lowercase, number, and a symbol.
                                </FormDescription>
                                <div>
                                  <p>If you do not have an account <Link className='underline text-[#2C4BFF]' onClick={() => setIsLoginView(false)}>sign up</Link></p>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                            />
                            <Button type="submit">Submit</Button>
                          </form>
                      </Form>
                    </DialogContent> :
                    <DialogContent>
                      <DialogTitle>Sign Up</DialogTitle>
                      <Form {...signup}>
                        <form onSubmit={signup.handleSubmit(onSignUp)} className="space-y-8">
                          <CustomInput control={signup.control} name="email" label="Email Address" placeholder="example@gmail.com" />
                          <CustomInput control={signup.control} name="username" label="Username" placeholder="Ade123@" />
                          
                          <FormField
                            control={signup.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ade john" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />  
                          <FormField
                          control={signup.control}
                          name="password"
                          render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormDescription>
                              Must contain at least 8 characters, uppercase, lowercase, number, and a symbol.
                            </FormDescription>                              
                            <FormMessage />
                          </FormItem>
                          )}
                          />
                          <Button  type="submit">Submit</Button>
                        </form>                        
                      </Form>                     
                    </DialogContent> 
                  }
                </Dialog>
            </header>
        </div>
    );
}

const CustomInput = ({ control, name, label, placeholder, type = "text" }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

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