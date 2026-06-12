import Navbar from "../../components/Navbar";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 h-4 w-48 rounded-lg bg-[#39B54A]/40" />
            <div className="h-14 max-w-2xl rounded-lg bg-white/15" />
            <div className="mt-6 h-6 max-w-xl rounded-lg bg-white/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="h-10 w-72 rounded-lg bg-gray-200" />
            <div className="mt-4 h-5 w-96 max-w-full rounded-lg bg-gray-200" />
          </div>
          <div className="h-11 w-40 rounded-lg bg-white shadow-sm" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="h-64 w-full bg-gray-200" />
              <div className="space-y-4 p-6">
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-8 w-48 rounded bg-gray-200" />
                <div className="h-20 rounded bg-gray-100" />
                <div className="h-12 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
