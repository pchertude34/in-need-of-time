export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <div className="bg-hero-image before mt-3 overflow-hidden rounded-3xl bg-cover bg-center">
        <div className="bg-primary-500/40 h-[486px] w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 to-black/50">
          <div className="flex flex-col items-center justify-center px-64 pt-32">
            <h1 className="text-center text-5xl font-bold leading-snug tracking-tight text-white">
              Build a great community by helping each and everyone in service
              <span className="text-secondary-400">.</span>
            </h1>
            <p className="mt-3 text-center text-lg text-white">
              Our mission is to create a cohesive community by addressing the needs of every member through service and
              support.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
