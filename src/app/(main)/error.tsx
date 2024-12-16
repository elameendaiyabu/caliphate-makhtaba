'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-6">We apologize for the inconvenience. An error has occurred.</p>
          <div className="space-y-4 w-full">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
            <Button
              variant="default"
              className="w-full"
              onClick={() => reset()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

