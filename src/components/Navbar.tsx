import Link from "next/link"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"
import { getServerSideUser } from "@/lib/payload-utils"
import { cookies } from 'next/headers'
import UserAccountNav from "./UserAccountNav"
import MobileNav from "./MobileNav"
import { ModeToggle } from "./ToggleMode"

const Navbar = async () => {
    const nextCookies = cookies()
    const {user} = await getServerSideUser(nextCookies);

  return (
    <div className="bg-opacity-100  sticky z-50 top-0 inset-x-0 h-16 ">
        <header className="relative  border-b">
            <MaxWidthWrapper>
                <div >
                    <div className="flex h-16 items-center">
                        {/* Mobile Navigation */}
                        <MobileNav/>
                        <div className="ml-4 flex lg:ml-0">
                            <Link href='/'>
                                <Image src='/logoblue1.png' alt="Logo" height={120} width={120}/>
                            </Link>
                        </div>

                        {/* Additional items in navbar like UI Kits and Icon */}
                        {/* <div className="hidden z-50 lg:ml-0 lg:block lg:self-stretch">
                            <NavItems/>
                        </div> */}

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                                {user ? null : <Link href='/sign-in' className={buttonVariants({variant: 'outline',})}>Sign In</Link>}
                            

                                {user ? null : (
                                    <span className="h-6 w-px bg-gray-200" aria-hidden='true'/>
                                )}

                                {user ? (
                                 <UserAccountNav user={user} />
                                ) : (
                                <Link href='/sign-up' className={buttonVariants({variant: 'outline'})}> Create Account</Link>)}

                                {user ? <span className="h-6 w-px bg-gray-200" aria-hidden='true'/> : null}

                                {user ? null : (
                                    <div className="flex lg:ml-6">
                                        <span className="h-6 w-px bg-gray-200" aria-hidden='true'/>
                                    </div> 
                                )}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Cart/>
                                </div>
                                <div className="ml-4 flow-root lg:ml-6">
                                    <ModeToggle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar