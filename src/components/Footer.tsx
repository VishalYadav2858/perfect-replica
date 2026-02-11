const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex flex-col leading-[0.85] cursor-pointer">
          <span className="font-montserrat text-[18px] font-[900] tracking-[-0.06em] text-foreground">AD.</span>
          <span className="font-montserrat text-[18px] font-[900] tracking-[-0.06em] text-foreground">KO</span>
        </a>
        <p className="font-montserrat text-[11px] font-[400] text-muted-foreground tracking-[0.05em]">
          © 2025 ADKO. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[11px] font-[500] text-muted-foreground hover:text-foreground transition-colors tracking-[0.05em]">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[11px] font-[500] text-muted-foreground hover:text-foreground transition-colors tracking-[0.05em]">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-[11px] font-[500] text-muted-foreground hover:text-foreground transition-colors tracking-[0.05em]">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
