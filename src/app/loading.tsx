import { Loader2 } from 'lucide-react'

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
                <p className="text-gray-500 mt-2">Please wait while we fetch your content.</p>
            </div>
        </div>
    )
}

