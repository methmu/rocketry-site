import React from 'react';

const NewsletterSection: React.FC = () => {
  const formUrl = 'https://forms.cloud.microsoft/r/ESzFQQfQMH';

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-700/50 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm uppercase tracking-[0.2em] backdrop-blur-sm">
                Stay connected
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Sign up to our newsletter
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Get updates on what our team has been up to each quarter. We promise not to spam you.
              </p>
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Sign up
              </a>
            </div>

            {/* <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-slate-700/30 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 shadow-2xl overflow-hidden">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 flex items-center justify-center">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;