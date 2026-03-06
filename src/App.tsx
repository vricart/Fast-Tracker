import TimerCircle from './components/TimerCircle';


function App() {
  return (
    <div className="min-h-screen text-slate-50">
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/* Header */}
        <header>
          <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-500">
            INTERMITTENT
          </p>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-[26px] font-semibold">
              FAST TRACKER
            </h1>

            {/* Right-side icons placeholders */}
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full border border-slate-600/60" />
              <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]" />
            </div>
          </div>
        </header>
        <main className="flex justify-center pt-4">
          <TimerCircle value={20} unit="HOURS" />
        </main>
      </div>
    </div>
  )
}

export default App