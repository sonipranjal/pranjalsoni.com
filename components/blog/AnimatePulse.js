export default function AnimatePulse() {
  return (
    <div className="w-full mx-5 bg-white shadow-lg select-none lg:w-[350px] h-[260px] rounded-2xl">
      <div className="flex flex-col flex-1 gap-5 p-2">
        <div className="flex flex-col flex-1 gap-3">
          <div className="w-full h-16 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
