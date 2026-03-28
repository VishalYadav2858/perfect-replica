import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

interface PageHeaderProps {
  /** Small label above the title, e.g. "Creative Agency" */
  eyebrow?: string;
  /** Main page name, e.g. "About Us" */
  title: string;
  /** Breadcrumb trail: array of { label, href } — last item is current page */
  crumbs?: { label: string; href: string }[];
}

export default function PageHeader({ eyebrow, title, crumbs }: PageHeaderProps) {
  return (
    <div className="w-full">
      {/* Accent rule — thin purple line full-width */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-[3px] w-full bg-accent mb-0"
      />

      {/* Page identity strip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-foreground/[0.03] border-b border-black/6 px-6 lg:px-12 py-3 flex items-center justify-between gap-4"
      >
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
          <Link to="/" className="text-foreground/40 hover:text-accent transition-colors">
            <Home className="w-3 h-3" />
          </Link>
          {crumbs?.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-foreground/20" />
              {i === crumbs.length - 1 ? (
                <span className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.18em] text-foreground/70">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className="font-montserrat text-[10px] font-[700] uppercase tracking-[0.18em] text-foreground/40 hover:text-accent transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Page label — right side */}
        <div className="flex items-center gap-2 shrink-0">
          {eyebrow && (
            <span className="hidden sm:block font-montserrat text-[9px] font-[600] uppercase tracking-[0.2em] text-foreground/30">
              {eyebrow} —
            </span>
          )}
          <span className="font-montserrat text-[10px] font-[800] uppercase tracking-[0.2em] text-foreground/60">
            {title}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </div>
  );
}
