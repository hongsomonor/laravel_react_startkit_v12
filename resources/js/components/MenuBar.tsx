import { Link } from '@inertiajs/react'
import { Search , Heart , ShoppingCart } from 'lucide-react'

const MenuBar = () => {
    return (
        <div className='text-black'>
            <nav className='w-full px-[250px] py-6 m-auto shadow-md flex justify-between items-center'>
                <div className="text-3xl font-extrabold text-gray-800">eCommerce</div>
                <ul className='flex font-bold text-gray-600 gap-5 text-xl'>
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
                        {/* <span className=' absolute bg-orange-600 rounded-full text-white font-bold size-[30px] pt-[2px] top-0 right-0 text-center'>0</span> */}
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <Search></Search>
                        </div>
                    </div>
                    <div className='p-3 relative'>
                        <span className=' absolute bg-orange-600 rounded-full text-white font-bold size-[30px] pt-[2px] top-0 right-0 text-center'>0</span>
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <Heart></Heart>
                        </div>
                    </div>
                    <div className='p-3 relative'>
                        <span className=' absolute bg-orange-600 rounded-full text-white font-bold size-[30px] pt-[2px] top-0 right-0 text-center'>0</span>
                        <div className='bg-gray-200 transition-all duration-[0.4s] p-3 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer'>
                            <ShoppingCart></ShoppingCart>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuBar
