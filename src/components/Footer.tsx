import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 py-16 px-6 lg:px-12 bg-background relative overflow-hidden">


      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 mb-16">
        <Link to="/" className="flex flex-col leading-[0.85] cursor-pointer group">
          <span className="font-montserrat text-[28px] font-[900] tracking-[-0.06em] text-foreground group-hover:text-accent transition-colors">DelightX</span>
          <span className="font-montserrat text-[10px] font-[600] tracking-[0.2em] uppercase text-foreground/40 mt-1">Media</span>
        </Link>

        {/* Contact Info Group */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-center md:text-left">
          <div className="flex flex-col gap-1.5">
            <span className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30">Connect</span>
            <div className="flex flex-col">
              <a href="tel:+917798351934" className="font-satoshi text-[13px] font-[700] text-foreground/80 hover:text-accent transition-colors">+91-9867949943</a>
              <a href="tel:+917058455963" className="font-satoshi text-[13px] font-[700] text-foreground/80 hover:text-accent transition-colors"></a>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30">Enquire</span>
            <a href="mailto:rushikesh@delightxmedia.in" className="font-satoshi text-[13px] font-[700] text-foreground/80 hover:text-accent transition-colors">contact@delightxmedia.in</a>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-montserrat text-[9px] font-[800] uppercase tracking-[0.25em] text-foreground/30">Location</span>
            <span className="font-satoshi text-[13px] font-[700] text-foreground/80">Mumbai, India</span>
          </div>
        </div>

        <div className="flex gap-10">
          {["Instagram", "LinkedIn", "Twitter"].map((social) => (
             <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="relative font-montserrat text-[11px] font-[700] uppercase tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors group">
               {social}
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
             </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-8 border-t border-black/5 flex justify-center md:justify-start">
        <p className="font-montserrat text-[10px] font-[500] text-foreground/30 tracking-[0.1em] uppercase">
          © 2026 DelightX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
