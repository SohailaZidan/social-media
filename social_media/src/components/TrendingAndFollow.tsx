import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const TrendingAndFollow = () => {
  return (
    <>
    <div className="relative m-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-600 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              className="w-full bg-gray-200 dark:bg-[#253341] border-gray-200 dark:border-[#253341] text-gray-100  focus:outline-none  font-normal h-9  pl-12 text-sm rounded-full"
              placeholder="Search ...."
            />
          </div>
          <div className="bg-gray-50 dark:bg-[#192734] rounded-2xl m-2">
            <h3 className="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-[#38444d]">
              #Trends
            </h3>
            <div className="p-3 border-b border-gray-200 dark:border-[#38444d]">
              <h4 className="font-bold  text-gray-800 dark:text-white">
                #Palestine
              </h4>
              <p className="text-xs text-gray-400">29.7K Tweets</p>
            </div>
            <div className="p-3 border-b border-gray-200 dark:border-[#38444d]">
              <h4 className="font-bold  text-gray-800 dark:text-white">
                #Palestine
              </h4>
              <p className="text-xs text-gray-400">29.7K Tweets</p>
            </div>
            <div className="p-3 border-b border-gray-200 dark:border-[#38444d]">
              <h4 className="font-bold  text-gray-800 dark:text-white">
                #Palestine
              </h4>
              <p className="text-xs text-gray-400">29.7K Tweets</p>
            </div>
            <div className="text-blue-400  p-3 cursor-pointer">Show more</div>
          </div>
          <div className="bg-gray-50 dark:bg-[#192734] rounded-2xl m-2">
            <h3 className="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-[#38444d]">
              Who to follow
            </h3>
            <div className="p-5 border-b border-gray-200 dark:border-[#38444d] ">
              <div className="flex gap-x-4 animate-pulse">
                <div className="rounded-full bg-gray-400 h-12 w-12"></div>
                <div className="flex-1  space-y-2 py-1">
                  <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-400 rounded w-4/6"></div>
                </div>
              </div>
            </div>

            <div className="text-blue-400  p-3 cursor-pointer">Show more</div>
          </div>
    </>
  )
}

export default TrendingAndFollow
