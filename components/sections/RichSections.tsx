import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import type { Block } from "@/data/services";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** Numbered vertical timeline (".process-section"). */
export function ProcessSection({ tag, title, lead, steps }: Extract<Block, { type: "process" }>) {
  return (
    <section className="section-pad bg-page">
      <div className="container-tl">
        <SectionHead tag={tag} title={title} lead={lead} align="center" tagStyle="label" className="mb-14" />
        <div className="relative mx-auto max-w-[1100px]">
          <span className="absolute bottom-0 left-[29px] top-0 w-[2px] bg-line md:left-[39px]" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.title} y={20}>
              <div className="relative mb-8 flex gap-5 md:mb-[50px] md:gap-10">
                <span className="relative z-[2] flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-royal text-[18px] font-bold text-white md:h-20 md:w-20 md:text-[24px]">
                  {pad(i)}
                </span>
                <div className="flex-1 rounded-[20px] border border-line bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,.08)] md:px-[30px] md:py-[25px]">
                  <h3 className="mb-3 text-[20px] font-bold md:text-[28px]">{s.title}</h3>
                  <p className="copy !font-normal !leading-[1.8]">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dark gradient card grid (".cyber-approach-section"). */
export function DarkCardsSection({ tag, title, lead, items }: Extract<Block, { type: "darkCards" }>) {
  return (
    <section className="relative overflow-hidden bg-night py-[70px] md:py-[100px]">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[rgba(0,255,200,0.08)] blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[rgba(0,140,255,0.1)] blur-[80px]" />
      <div className="container-tl relative">
        <Reveal className="mx-auto mb-14 max-w-[850px] text-center">
          {tag && <span className="mb-4 block text-[14px] font-semibold uppercase tracking-[3px] text-[#00e6b8]">{tag}</span>}
          <h2 className="text-[32px] font-bold text-white md:text-[48px]">{title}</h2>
          {lead && <p className="mt-4 text-[16px] leading-[1.8] text-white/70">{lead}</p>}
        </Reveal>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] px-[30px] py-10 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,230,184,.4)]">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#00e6b8] to-[#00b7ff]" />
                <span className="absolute right-6 top-4 text-[55px] font-extrabold text-white/5">{pad(i)}</span>
                {it.icon && (
                  <span className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#00e6b8] to-[#00b7ff] text-[26px] text-white shadow-[0_10px_30px_rgba(0,230,184,.25)]">
                    <i className={it.icon} aria-hidden="true" />
                  </span>
                )}
                <h3 className="mb-4 text-[22px] font-bold text-white">{it.title}</h3>
                {it.text && <p className="text-[15px] leading-[1.8] text-white/70">{it.text}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Bordered boxes with large faded numbers (".benefits-grid"). */
export function NumberedSection({ tag, title, lead, items }: Extract<Block, { type: "numbered" }>) {
  return (
    <section className="section-pad bg-page">
      <div className="container-tl">
        <SectionHead tag={tag} title={title} lead={lead} align="center" tagStyle="label" className="mb-14" />
        <div className="grid gap-[30px] md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 0.08}>
              <div className="relative h-full overflow-hidden rounded-[20px] border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.08)] md:p-10">
                <span className="absolute right-5 top-4 text-[60px] font-extrabold leading-none text-royal/10 md:text-[70px]">
                  {pad(i)}
                </span>
                <h3 className="relative mb-4 pr-16 text-[22px] font-bold md:text-[28px]">{it.title}</h3>
                {it.text && <p className="relative leading-[1.8] text-[#666]">{it.text}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Horizontal rows with icon + number (".engagement-models"). */
export function ModelsSection({ tag, title, lead, items }: Extract<Block, { type: "models" }>) {
  return (
    <section className="section-pad bg-[#05508b0a]">
      <div className="container-tl">
        <SectionHead tag={tag} title={title} lead={lead} align="center" tagStyle="label" className="mb-14" />
        <div className="mx-auto flex max-w-[1100px] flex-col gap-[25px]">
          {items.map((it, i) => (
            <Reveal key={it.title} y={20}>
              <div className="flex flex-col items-center gap-5 rounded-[20px] border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.08)] md:flex-row md:p-[35px] md:text-left">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[18px] bg-royal/10 text-[32px] text-royal md:mr-2.5">
                  <i className={it.icon ?? "fa-solid fa-layer-group"} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="mb-2.5 text-[22px] font-bold md:text-[28px]">{it.title}</h3>
                  {it.text && <p className="copy !font-normal !leading-[1.8]">{it.text}</p>}
                </div>
                <span className="text-[60px] font-extrabold leading-none text-[#f1f5f9]">{pad(i)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** White icon cards on pale blue (".cloud-benefits-section"). */
export function BenefitCardsSection({ tag, title, lead, items }: Extract<Block, { type: "benefitCards" }>) {
  return (
    <section className="bg-[#f8fbff] py-[70px] md:py-[100px]">
      <div className="container-tl">
        <Reveal className="mx-auto mb-14 max-w-[800px] text-center">
          {tag && <span className="mb-3 block text-[14px] font-semibold uppercase tracking-[2px] text-royal">{tag}</span>}
          <h2 className="text-[30px] font-bold text-[#111] md:text-[42px]">{title}</h2>
          {lead && <p className="copy mt-4">{lead}</p>}
        </Reveal>
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-[#edf2f7] bg-white px-[30px] py-[35px] shadow-[0_10px_30px_rgba(0,0,0,.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,.12)]">
                <i className={`${it.icon ?? "fa-solid fa-circle-check"} mb-5 block text-[38px] text-royal`} aria-hidden="true" />
                <h3 className="mb-3 text-[20px] font-semibold">{it.title}</h3>
                {it.text && <p className="leading-[1.8] text-[#666]">{it.text}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Platform cards with "Best for" footer (".platforms-section"). */
export function PlatformsSection({ tag, title, lead, items }: Extract<Block, { type: "platforms" }>) {
  return (
    <section className="bg-[#f8fafc] py-[70px] md:py-20">
      <div className="container-tl">
        <Reveal className="mx-auto mb-12 max-w-[800px] text-center">
          {tag && <span className="mb-3 block text-[14px] font-semibold uppercase tracking-[2px] text-royal">{tag}</span>}
          <h2 className="text-[30px] font-bold text-[#111827] md:text-[40px]">{title}</h2>
          {lead && <p className="copy mt-4">{lead}</p>}
        </Reveal>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-[20px] border border-line bg-white p-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:border-royal/30 hover:shadow-[0_20px_40px_rgba(0,0,0,.08)]">
                <h3 className="mb-4 text-[22px] font-bold text-[#111827]">{it.title}</h3>
                {it.text && <p className="mb-5 flex-1 leading-[1.8] text-[#4b5563]">{it.text}</p>}
                {it.bestFor && (
                  <div className="rounded-xl bg-royal/5 px-4 py-3 text-[13px] leading-[1.7] text-[#374151]">
                    <strong className="text-royal">Best for: </strong>
                    {it.bestFor}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** ERPNext vs Odoo table (".erp-comparison"). */
export function ComparisonSection({ title, lead, columns, rows, note }: Extract<Block, { type: "comparison" }>) {
  return (
    <section className="bg-[#f8fafc] py-[70px] md:py-20">
      <div className="container-tl max-w-[1100px]">
        <Reveal className="mb-12 text-center">
          <h2 className="text-[28px] font-bold text-[#111827] md:text-[38px]">{title}</h2>
          {lead && <p className="copy mt-4">{lead}</p>}
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-[20px] border border-line bg-white shadow-[0_10px_30px_rgba(0,0,0,.05)]">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  {columns.map((c) => (
                    <th key={c} className="px-6 py-4 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="border-t border-line even:bg-[#f8fafc]">
                    <th scope="row" className="px-6 py-4 font-semibold">{r.feature}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className="px-6 py-4 text-[#4b5563]">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {note && (
            <p className="mt-6 rounded-xl border-l-4 border-royal bg-royal/5 px-5 py-4 leading-[1.8] text-[#374151]">
              <strong>Note: </strong>
              {note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
