export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-500">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-purple-600 rounded-full animate-spin [animation-duration:1.5s]"></div>
            </div>
            <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Preparing Collection</h2>
                <p className="text-gray-500 animate-pulse">Designing your experience...</p>
            </div>
        </div>
    );
}
