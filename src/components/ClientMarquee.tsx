import marriottLogo from "../assets/marriott-logo.png";
import lo from "../assets/lo.png"
import lo1new from "../assets/lo1new.png"
import lo2new from "../assets/lo2new.png"
import lo3 from "../assets/lo3.png"

const clients = [
  { name: "MARRIOTT", logo: lo },
  { name: "AUDI", logo: lo1new },
  { name: "MILTON", logo: lo2new },
  { name: "CARLTON", logo: lo3 },
];

const ClientMarquee = () => {
  return (
    <section className="py-6 border-y border-black/5 overflow-hidden bg-background relative">


      
      <div 
        className="flex animate-marquee items-center" 
        style={{ 
          width: "fit-content",
          willChange: "transform",
          transform: "translate3d(0,0,0)"
        }}
      >
        {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
          <div 
            key={`${client.name}-${i}`} 
            className="flex-shrink-0 mx-12 md:mx-20 flex items-center justify-center opacity-100 transition-opacity duration-500"
            style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-auto h-12 md:h-16 object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientMarquee;