
import React from 'react';

const InfoCard: React.FC<{
  step: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}> = ({ step, title, description, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold text-xl shadow-md">
      {step}
    </div>
    <div className="flex-grow pt-2">
      <h3 className="text-lg font-semibold text-red-400">{title}</h3>
      <p className="text-slate-400">{description}</p>
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-black">
      <div className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-red-500/10 border border-slate-700 overflow-hidden">
        <header className="p-6 sm:p-8 text-center bg-slate-900/50 border-b border-slate-700">
          <div className="flex justify-center items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" transform="rotate(90 12 12)"/>
            </svg>
            <h1 className="text-3xl font-bold text-white tracking-tight">YouTube Shorts Blocker</h1>
          </div>
          <p className="mt-3 text-md text-slate-400">
            Your guide to installing the productivity-boosting Chrome extension.
          </p>
        </header>

        <main className="p-6 sm:p-8">
          <div className="space-y-8">
            <InfoCard
              step="1"
              title="Check Your Extension Files"
              description="All the necessary files for the extension (manifest.json, background.js, content.js) are in your project directory. No build step is needed!"
            />

            <InfoCard
              step="2"
              title="Open Chrome Extensions"
              description="In your Chrome browser, navigate to the extensions page."
            >
               <div className="mt-2 p-3 bg-slate-700/50 rounded-md text-sm">
                <p className="font-mono text-emerald-400">
                  chrome://extensions
                </p>
              </div>
            </InfoCard>

            <InfoCard
              step="3"
              title="Enable Developer Mode"
              description="On the extensions page, find and toggle on the 'Developer mode' switch, usually located in the top-right corner."
            />

            <InfoCard
              step="4"
              title="Load the Extension"
              description="Click the 'Load unpacked' button and select the directory containing your manifest.json and the other extension files."
            />
          </div>
        </main>
        
        <footer className="p-6 bg-slate-900/50 border-t border-slate-700 text-center">
            <p className="text-lg font-semibold text-emerald-400">✅ Installation Complete!</p>
            <p className="text-slate-400 mt-1">The extension is now active. Visit YouTube and enjoy a Shorts-free experience.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
