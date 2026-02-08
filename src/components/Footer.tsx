const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-oswald text-xl font-black tracking-tighter text-foreground">
          AD.KO
        </span>
        <p className="font-inter text-xs text-muted-foreground">
          © 2025 ADKO. All rights reserved.
        </p>
        <div className="flex gap-6 font-inter text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
