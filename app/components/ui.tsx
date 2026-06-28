import type { ReactNode } from "react";
import { Check, ImageIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export { EventButton } from "./EventButton";

export function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-lg ring-soft ${className}`}
      style={{
        background:
          "linear-gradient(160deg, rgba(13,22,52,0.95) 0%, rgba(6,10,28,0.95) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,255,175,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,255,175,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-green-500/25 blur-3xl" />
      <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-white/5 text-green-300">
          <ImageIcon className="h-7 w-7" strokeWidth={1.3} aria-hidden />
        </div>
        <span className="px-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5" />
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-green-300">
      {children}
    </span>
  );
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  tag?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {tag ? <SectionTag>{tag}</SectionTag> : null}
      <h2
        className={`${
          tag ? "mt-6" : ""
        } text-balance font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return <Check className={className} strokeWidth={1.3} aria-hidden />;
}

export function TrustItem({
  label,
  icon: Icon,
  small,
}: {
  label: string;
  icon: LucideIcon;
  small?: boolean;
}) {
  return (
    <span className="flex items-center gap-2">
      <Icon
        className={small ? "h-3.5 w-3.5 text-green-400" : "h-4 w-4 text-green-400"}
        strokeWidth={1.3}
        aria-hidden
      />
      {label}
    </span>
  );
}
