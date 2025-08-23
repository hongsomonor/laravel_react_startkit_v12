import MainLayout from "@/layouts/MainLayout"

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home

Home.layout = (page: React.ReactElement) => <MainLayout children={page} />;
