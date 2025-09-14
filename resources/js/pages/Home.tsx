import MainLayout from "@/layouts/MainLayout"
import 'flowbite'

const Home = () => {
    return (
        <div className="w-[97%] m-auto md:h-[500px] lg:h-[750px] bg-[url('/public/assets/banner.jpg')] grid grid-cols-2 bg-cover bg-center">
            <div className="flex flex-col justify-center pl-[250px]">
                <span className="text-[18px] font-bold text-orange-600">Dive In and Explore</span>
                <h2 className="text-6xl font-bold mt-2">Start Shopping Now!</h2>
                <p className="my-7">
                    Explore our curated collections and find the perfect item that speaks to your style and <br /> needs. With just a click, begin your journey.
                </p>
                <button className="px-6 py-3 font-bold text-[18px] w-[150px] cursor-pointer rounded-lg text-white bg-orange-500">Shop Now</button>
            </div>
        </div>
    )
}

export default Home

Home.layout = (page: React.ReactElement) => <MainLayout children={page} />;
