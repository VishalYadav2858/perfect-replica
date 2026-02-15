import marriottLogo from "../assets/marriott-logo.png";
import google from "../assets/google.png"
// import audiLogo from "@/assets/clients/audi-logo.png";
// import miltonLogo from "@/assets/clients/milton-logo.png";
// import googleLogo from "@/assets/clients/google-logo.png";
// import carltonLogo from "@/assets/clients/carlton-logo.png";
// import paytmLogo from "@/assets/clients/paytm-logo.png";
// import britimeLogo from "@/assets/clients/britime-logo.png";
// import blueseaLogo from "@/assets/clients/bluesea-logo.png";
// import fairfieldLogo from "@/assets/clients/fairfield-logo.png";
// import lexusLogo from "@/assets/clients/lexus-logo.png";
// import vipbagsLogo from "@/assets/clients/vipbags-logo.png";
// import totsLogo from "@/assets/clients/tots-logo.png";

const clients = [
  { name: "MARRIOTT", logo: marriottLogo },
  { name: "AUDI", logo: marriottLogo },
  { name: "MILTON", logo: marriottLogo },
  { name: "GOOGLE", logo: google },
  { name: "CARLTON", logo: marriottLogo },
  { name: "PAYTM", logo: marriottLogo },
  { name: "BRITIME", logo: marriottLogo },
  { name: "BLUE SEA", logo: marriottLogo },
  { name: "FAIRFIELD", logo: marriottLogo },
  { name: "LEXUS", logo: marriottLogo },
  { name: "VIP BAGS", logo: marriottLogo },
  { name: "TOTS", logo: marriottLogo },
];

const ClientMarquee = () => {
  return (
    <section className="py-12 border-y border-border/60 overflow-hidden bg-background">
      <div className="flex animate-marquee items-center" style={{ width: "fit-content" }}>
        {[...clients, ...clients, ...clients].map((client, i) => (
          <div 
            key={`${client.name}-${i}`} 
            className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center group"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-auto h-16 md:h-20   transition-all duration-500  "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientMarquee;