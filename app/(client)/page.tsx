export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <div className="bg-hero-image before mt-3 overflow-hidden rounded-3xl bg-cover bg-center">
        <div className="bg-primary-500/40 h-[410px] w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 to-black/50 sm:h-[486px]">
          <div className="p flex flex-col items-center justify-center pt-16 sm:pt-24 md:px-10 md:pt-32 lg:px-20 xl:px-60">
            <div className="px-3 md:px-0">
              <h1 className="text-center text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
                Building a great community by helping each and everyone in service
                <span className="text-secondary-400">.</span>
              </h1>
              <p className="mt-3 text-center text-white md:text-lg">
                Our mission is to create a cohesive community by addressing the needs of every member through service
                and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
