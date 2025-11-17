

export default function Card() {
  return (
    <div className="rounded-3xl bg-white  shadow-sm p-6 max-w-md relative overflow-hidden">
      {/* Stacked Cards Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-4 left-4 right-4 h-20 rounded-2xl bg-gray-100 blur-sm" />
        <div className="absolute top-10 left-6 right-6 h-20 rounded-2xl bg-gray-200 blur-sm" />
      </div>

      {/* Real Card Content */}
      <div className="relative">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200 mb-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Important Reads</h3>
            <p className="text-sm text-gray-500">
              Save articles and blogs you want to revisit.
            </p>
          </div>
          <div className="text-xs flex bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full i">
            ⏱️ 15s
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200 mb-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Watch Later</h3>
            <p className="text-sm text-gray-500">
              Store YouTube videos and tutorials instantly.
            </p>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            ⏱️ 5s
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-900">Work Resources</h3>
            <p className="text-sm text-gray-500">
              Save docs and links from Google Docs, Notion, GitHub & more.
            </p>
          </div>
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
            ⏱️ 20s
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
            Productivity
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
            Docs
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
            Videos
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
            Favorites
          </span>
        </div>
      </div>
    </div>
  );
}
