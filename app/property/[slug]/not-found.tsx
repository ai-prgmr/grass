import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Property Not Found
            </h1>
            <p className="text-gray-600">
              Sorry, the property you&apos;re looking for doesn&apos;t exist or
              may have been removed.
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href="/properties"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <ArrowLeft size={18} />
              Back to Properties
            </Link>

            <Link
              href="/"
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Home size={18} />
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
