function TMobileLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="T-Mobile">
      <rect width="28" height="28" rx="4" fill="#E20074" />
      <path d="M6 8h16v3.5h-6.25V22h-3.5V11.5H6V8z" fill="white" />
    </svg>
  );
}

export function SiteFooter() {
  const links = ['News tips', 'Policy Links', 'Latest news', 'Policy Links', 'News tips', 'Policy Links'];

  return (
    <footer className="mt-16 bg-[#0D0D0D] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6">
        <TMobileLogo />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link, i) => (
            <button
              key={i}
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              {link}
            </button>
          ))}
        </nav>
        <p className="text-[11px] text-white/30">
          © {new Date().getFullYear()} T-Mobile. Headlines — Internal AI News Digest.
        </p>
      </div>
    </footer>
  );
}
