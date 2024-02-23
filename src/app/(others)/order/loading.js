export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed top-0 z-[1000000] left-0 h-screen w-screen bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
           <p className="text-lg font-semibold text-white">Loading...</p>
        </div>
    )
  }