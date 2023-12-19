import MaxWidthWrapper from "./MaxWidthWrapper"


const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
            <MaxWidthWrapper className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                    {/* Mobile Navigation */}
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar