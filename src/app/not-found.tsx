import Link from "next/link";
import { Home, Search, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="text-8xl font-bold text-gray-200 md:text-9xl">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="h-16 w-16 text-primary/30 md:h-20 md:w-20" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-black md:text-4xl">
        Page Not Found
      </h1>
      
      <p className="mt-4 max-w-md text-base text-gray-600 md:text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
      </p>
      
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="btn-primary"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/solutions"
          className="btn-outline-dark"
        >
          <FileText className="mr-2 h-4 w-4" />
          View Solutions
        </Link>
      </div>
    </div>
  );
}
