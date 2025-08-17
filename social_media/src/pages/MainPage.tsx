import Sidebar from "../components/Sidebar";
import TrendingAndFollow from "../components/TrendingAndFollow";
import Home from "./Home";

const MainPage = () => {
  return (
    <main className="bg-white dark:bg-[#15202b]">
      <div className="container mx-auto pt-3 h-screen flex xl:max-w-[1200px]">
        <div className="xl:w-1/5 w-20 h-full flex flex-col xl:pr-4">
          <Sidebar />
        </div>
        <div className="w-full xl:w-1/2 h-screen overflow-y-auto">
          <Home />
        </div>
        <div className="hidden w-[30%] xl:block ">
          <TrendingAndFollow />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
