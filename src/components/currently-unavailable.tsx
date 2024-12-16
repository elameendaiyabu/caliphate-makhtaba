import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function UnavailablePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="animate-pulse">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Currently Unavailable
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          We&apos;re sorry, but the service you&apos;re trying to access is currently unavailable. Our team is working hard to resolve the issue.
        </p>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            Please try again later or contact support if the problem persists.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="text-base font-medium text-blue-600 hover:text-blue-500"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

