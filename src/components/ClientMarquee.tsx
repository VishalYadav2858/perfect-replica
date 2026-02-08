const clients = [
  "MARRIOTT", "AUDI", "MILTON", "GOOGLE", "CARLTON", "PAYTM",
  "BRITIME", "BLUE SEA", "FAIRFIELD", "LEXUS", "VIP BAGS", "TOTS",
];

const ClientMarquee = () => {
  return (
    <section className="py-8 border-y border-border/60 overflow-hidden">
      <div className="flex animate-marquee items-center" style={{ width: "fit-content" }}>
        {[...clients, ...clients, ...clients].map((client, i) => (
          <div key={i} className="flex-shrink-0 mx-10 md:mx-14 flex items-center">
            <span className="font-montserrat text-[13px] md:text-[15px] font-[700] uppercase tracking-[0.2em] text-muted-foreground/40 whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientMarquee;
