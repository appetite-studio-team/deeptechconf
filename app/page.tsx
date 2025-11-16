export default function Page() {
  return (
    <main className="space-y-16">
      <img src="/banner.png" alt="DeepTech Hackers Day Bengaluru" className="w-full rounded-lg -mb-12" />
      <header className="space-y-4 text-center">
        <h1 className="sr-only">DeepTech Hackers Day Bengaluru</h1>
        <div className="space-y-2">
          <p className="text-xl font-medium text-accent">Event Concluded</p>
          <p className="text-neutral-400">
            a one day offline jam for builders dreamers and curious minds exploring what is next in ai web3 and quantum
          </p>
        </div>
      </header>

      <section className="space-y-4 text-center -mt-12">
        <h2 className="text-xl font-medium">thank you</h2>
        <p className="text-sm text-neutral-400">thanks all for making this event amazing</p>
      </section>

      <div className="space-y-4">
        <img src="/event photo.jpg" alt="DeepTech Conference Event Photo" className="w-full rounded-lg" />
      </div>

      <div className="border-t border-neutral-800 pt-8">
        <section className="space-y-4 text-center">
          <h2 className="text-2xl font-medium">tech for good hackathon</h2>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-medium">Tech for Good Award</h3>
            <p className="text-sm text-neutral-400 max-w-2xl mx-auto">
              awarded to the top project that defines what tech for good means using ai web3 or quantum to solve a real problem with honest impact and clean execution.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-medium">E-FDT</p>
              <a 
                href="https://dorahacks.io/buidl/36212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent text-bg px-4 py-2 font-medium hover:bg-white transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="pt-6 border-t border-neutral-800 space-y-6">
        <div className="text-center pb-4">
          <p className="text-neutral-400 text-sm mb-2">for future events and announcements</p>
          <a href="https://linktr.ee/appetite_studio" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white text-sm underline">
            follow us
          </a>
        </div>
        <div className="text-sm text-neutral-500 text-center">
          organised by <a href="https://appetite.studio/" target="_blank" className="underline hover:text-white">Appetite for Good</a> 🪴
        </div>
      </footer>
    </main>
  );
}

