import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F7861E]">
          404 Error
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-[#0F1F29] sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#F7861E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e8750d]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}