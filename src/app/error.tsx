"use client";

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="text-8xl font-bold text-gray-200 md:text-9xl">500</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-16 w-16 text-red-400 md:h-20 md:w-20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-black md:text-4xl">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-base text-gray-600 md:text-lg">
        We apologize for the inconvenience. An unexpected error occurred. Please try again later.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
