import { Link } from '@inertiajs/react'
import { Search , Heart , ShoppingCart , Menu } from 'lucide-react'

const MenuBar = () => {
    return (
        <div className='text-black'>
            <nav className='w-full px-3 sm:px-[100px] lg:px-[130px] py-1 sm:py-2 md:py-4 m-auto shadow-md flex justify-between items-center'>
                <Menu className='lg:hidden block mt-1 cursor-pointer size-[30px]'></Menu>
                <div className="text-[28px] font-extrabold text-gray-800">eCommerce</div>
                <ul className='lg:flex hidden font-bold text-gray-600 gap-5 text-xl'>
                    <li>
                        <Link href='/home'>Home</Link>
                    </li>
                    <li><Link href='/products'>Product</Link></li>
                    <li><Link href='/page'>Page</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                    <li><Link href='/contact'>Contact Us</Link></li>
                </ul>
                <div className='flex'>
                    <div className='p-3 relative'>
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <Search className='size-[18px]'></Search>
                        </div>
                    </div>
                    <div className='p-3 relative'>
                        <span className=' absolute bg-orange-600 rounded-full text-white font-bold size-[23px] pt-[1px] top-0 right-0 text-center'>0</span>
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <Heart className='size-[18px]'></Heart>
                        </div>
                    </div>
                    <div className='p-3 relative'>
                        <span className=' absolute bg-orange-600 rounded-full text-white font-bold size-[23px] pt-[1px] top-0 right-0 text-center'>0</span>
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <ShoppingCart className='size-[18px]'></ShoppingCart>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuBar
