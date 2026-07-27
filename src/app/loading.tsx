export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <div className="relative h-16 w-16 md:h-20 md:w-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
      <p className="mt-6 text-sm font-medium text-gray-600 md:text-base">
        Loading...
      </p>
    </div>
  );
}
