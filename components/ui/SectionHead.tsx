import Reveal from "./Reveal";

type Props = {
  tag?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** "pill" = navy rounded tag (.dot-titl-non), "label" = plain letter-spaced (.sub-title) */
  tagStyle?: "pill" | "label";
  dark?: boolean;
  className?: string;
};

export default function SectionHead({
  tag,
  title,
  lead,
  align = "left",
  tagStyle = "pill",
  dark = false,
  className = "",
}: Props) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-[900px] text-center" : ""} ${className}`}>
      {tag &&
        (tagStyle === "pill" ? (
          <span className="pill mb-6">{tag}</span>
        ) : (
          <h6 className={`sub-label mb-4 ${dark ? "text-cyan" : ""}`}>{tag}</h6>
        ))}
      <h2 className={`text-[30px] font-semibold leading-tight md:text-[40px] ${dark ? "text-white" : ""}`}>{title}</h2>
      {lead && <p className={`copy mt-4 ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
    </Reveal>
  );
}
