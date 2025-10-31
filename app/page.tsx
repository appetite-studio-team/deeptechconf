export default function Page() {
  return (
    <main className="space-y-16">
      <div className="relative">
        <a href="mailto:deeptechconf@appetite.studio" className="absolute top-0 right-0 text-neutral-400 hover:text-white text-sm">
          enquiries?
        </a>
      </div>
      <img src="/banner.png" alt="DeepTech Hackers Day Bengaluru" className="w-full rounded-lg" />
      <header className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">DeepTech Hackers Day Bengaluru</h1>
        <p className="text-neutral-400">
          a one day offline jam for builders dreamers and curious minds exploring what is next in ai web3 and quantum
        </p>
        <p className="text-neutral-400">agenda? venue? head to register</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a href="https://luma.com/cgr5nmdo" target="_blank" className="px-5 py-2 bg-accent text-bg rounded-md font-medium hover:bg-white">
            🎫 Register for the Conference
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">why join</h2>
        <p>it is free to join you will get goodies good food and a space to meet founders investors and people building what matters</p>
        <p>listen to talks see demos and be part of a space where ideas actually move</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">tech for good hackathon</h2>
        <p>online hackathon ₹1,00,000 prize winners will be showcased here</p>
        <a href="https://dorahacks.io/hackathon/hack-for-good/" target="_blank" className="inline-flex items-center gap-2 rounded-md bg-accent text-bg px-4 py-2 font-medium hover:bg-white">
          Join the Hackathon
        </a>
      </section>

      <footer className="pt-12 border-t border-neutral-800 space-y-6">
        <img src="/footer-sponsors.png" alt="Sponsors" className="w-full" />
        <div className="text-sm text-neutral-500 text-center">
          organised by <a href="https://appetite.studio/" target="_blank" className="underline hover:text-white">Appetite for Good</a>
        </div>
      </footer>
    </main>
  );
}

