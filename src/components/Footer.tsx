export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-muted text-sm font-medium">
          © {currentYear} Jaswanth Ganta.
        </p>
        <p className="text-muted/60 text-sm">
          Built with passion for Engineering, AI, and Software Development.
        </p>
      </div>
    </footer>
  );
}
