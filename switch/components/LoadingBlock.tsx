export const LoadingBlock = () => (
    <div className="flex flex-col border m-8 border-black max-w-[350px] "> 
      <div className="bg-slate-700 text-white text-lg font-bold p-4 animate-pulse">
        Loading...
      </div>
      <div className="bg-white text-gray-800 p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-[350px]"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );