const LoadingCard = () => {
  return (
    <div className="space-y-6 mt-10 px-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 dark:border-[#38444d] rounded-2xl p-4 animate-pulse"
        >
          <div className="flex items-center mb-4">
            <div className="h-9 w-9 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ml-3 w-1/3 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
          <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
          <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingCard;
