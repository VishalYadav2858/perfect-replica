const clients = [
  "Marriott", "Audi", "Milton", "Google", "Carlton", "Paytm", "Britime",
  "Blue Sea", "Fairfield", "Lexus", "VIP Bags", "Tots",
];

const ClientMarquee = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee" style={{ width: "fit-content" }}>
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 md:mx-12 flex items-center"
          >
            <span className="font-oswald text-lg md:text-xl font-bold uppercase tracking-wider text-muted-foreground/60">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientMarquee;
