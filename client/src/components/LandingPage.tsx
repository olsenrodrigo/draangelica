import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Baby, Check, ClipboardCheck, Clock3, Flower2, GraduationCap, HeartHandshake, HeartPulse, Instagram, MapPin, Menu, MoonStar, Network, Quote, Sprout, Star, X } from "lucide-react";
import heroImage from "@/assets/images/angelica-consultorio-1.jpg";
import portraitImage from "@/assets/images/angelica-retrato.jpeg";
import officeImage from "@/assets/images/angelica-consultorio-2.jpg";
import brandIcon from "@/assets/images/iconeoficial.png";
import { CRM, EMAIL, geo, INSTAGRAM, RQE, site, SITE_URL, whatsappUrl, WHATSAPP_NUMBER } from "@/content/site";

const iconMap = { heart: HeartPulse, flower: Flower2, moon: MoonStar, check: ClipboardCheck, sprout: Sprout };
const differentialIcons = [Network, GraduationCap, Clock3, MapPin];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <div className="container nav-inner"><a href="#top" className="brand"><img src={brandIcon} alt="" className="brand-icon" /><span className="wordmark">{site.doctor}</span></a>
      <nav className="desktop-nav" aria-label={site.footer.linksTitle}>{site.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="button button-small" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.actions.schedule}</a></nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? site.accessibility.closeMenu : site.accessibility.openMenu}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label={site.footer.linksTitle}>{site.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href={whatsappUrl()} target="_blank" rel="noreferrer">{site.actions.schedule}</a></nav>}
  </header>;
}

function Hero() {
  return <section id="top" className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">{site.hero.eyebrow}</span><h1>{site.hero.title}</h1><p className="hero-subtitle">{site.hero.subtitle}</p><p>{site.hero.text}</p><span className="crm">{CRM} · {RQE}</span><div className="hero-actions"><a className="button" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.actions.hero}<ArrowRight /></a><a className="text-link" href="#sobre">{site.actions.about}</a></div></div><div className="hero-photo"><img src={heroImage} alt={site.hero.imageAlt} fetchPriority="high" /></div></div></section>;
}

function About() {
  return <section id="sobre" className="section"><div className="container about-grid"><div className="portrait"><img src={portraitImage} alt={site.about.imageAlt} loading="lazy" /></div><div><SectionHeading eyebrow={site.about.eyebrow} title={site.about.title} />{site.about.paragraphs.map(p => <p key={p}>{p}</p>)}<div className="credentials">{site.about.credentials.map(item => <span key={item}><Check />{item}</span>)}</div></div></div></section>;
}

function Conditions() {
  return <><section id="como-posso-ajudar" className="section alt"><div className="container"><SectionHeading {...site.conditionsIntro} /><div className="condition-grid">{site.conditions.map(item => { const Icon = iconMap[item.icon]; return <article className="condition-card" key={item.title}><Icon strokeWidth={1.5} /><h2>{item.title}</h2><strong>{item.lead}</strong><p>{item.text}</p><h3>{item.whenTitle}</h3><p>{item.when}</p></article>; })}</div></div></section><section className="children-strip"><div className="container children-inner"><Baby strokeWidth={1.5}/><div><h2>{site.children.title}</h2><p>{site.children.text}</p></div></div></section></>;
}

function Differentials() {
  return <section className="differentials section"><div className="container"><h2>{site.differentials.title}</h2><div className="differential-grid">{site.differentials.items.map((item, i) => { const Icon = differentialIcons[i]; return <div key={item}><Icon strokeWidth={1.5}/><p>{item}</p></div>; })}</div></div></section>;
}

function Locations() {
  return <section id="locais" className="section"><div className="container locations-grid"><div><SectionHeading eyebrow={site.locations.eyebrow} title={site.locations.title}/><div className="location-list">{site.locations.items.map(item => <article key={item.name}><MapPin strokeWidth={1.5}/><div><h3>{item.name}</h3><p>{item.schedule}</p><address>{item.address}</address></div></article>)}</div></div><img className="office-image" src={officeImage} alt={site.locations.imageAlt} loading="lazy" /></div></section>;
}

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const onSelect = useCallback(() => emblaApi && setSelected(emblaApi.selectedScrollSnap()), [emblaApi]);
  useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on("select", onSelect); const timer = window.setInterval(() => emblaApi.scrollNext(), 6000); return () => { window.clearInterval(timer); emblaApi.off("select", onSelect); }; }, [emblaApi, onSelect]);
  if (!site.showTestimonials) return null;
  return <section id="depoimentos" className="section alt"><div className="container"><SectionHeading eyebrow={site.testimonials.eyebrow} title={site.testimonials.title}/><div className="embla" ref={emblaRef}><div className="embla-container">{site.testimonials.items.map(([name, quote]) => <article className="testimonial" key={name}><Quote strokeWidth={1.5}/><div className="stars" aria-hidden="true">{[0,1,2,3,4].map(n => <Star key={n} fill="currentColor" />)}</div><blockquote>{quote}</blockquote><footer><strong>{name}</strong><span>{site.testimonials.verified}</span></footer></article>)}</div></div><div className="dots">{site.testimonials.items.map((item, i) => <button key={item[0]} className={selected === i ? "active" : ""} onClick={() => emblaApi?.scrollTo(i)} aria-label={`${site.testimonials.title}: ${i + 1}`} />)}</div></div></section>;
}

function FinalCta() { return <section className="final-cta"><div className="container"><img src={brandIcon} alt="" className="cta-icon" loading="lazy" /><h2>{site.finalCta.title}</h2><p>{site.finalCta.text}</p><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.actions.whatsapp}<ArrowRight /></a><small>{site.finalCta.note}</small></div></section>; }

function FAQ() {
  return <section id="faq" className="section"><div className="container faq-wrap"><SectionHeading eyebrow={site.faq.eyebrow} title={site.faq.title}/><Accordion type="single" collapsible>{site.faq.items.map(([question, answer], i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

const formSchema = z.object({ name: z.string().min(1), phone: z.string().min(1), email: z.string().email(), reason: z.string().min(1), message: z.string() });
type FormValues = z.infer<typeof formSchema>;
function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema), defaultValues: { name: "", phone: "", email: "", reason: "", message: "" } });
  const submit = (data: FormValues) => { const f = site.form.messageFields; const message = `${site.form.messagePrefix} ${f.name}: ${data.name} | ${f.reason}: ${data.reason} | ${f.email}: ${data.email} | ${f.phone}: ${data.phone} | ${f.message}: ${data.message}`; window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; };
  return <section id="agendar" className="section alt"><div className="container form-wrap"><h2>{site.form.title}</h2><form onSubmit={handleSubmit(submit)} noValidate>{(["name", "phone", "email"] as const).map(key => <label key={key}>{site.form.labels[key]}<input type={key === "email" ? "email" : "text"} {...register(key)} aria-invalid={!!errors[key]} />{errors[key] && <span>{key === "email" ? site.form.invalidEmail : site.form.required}</span>}</label>)}<label>{site.form.labels.reason}<select {...register("reason")} defaultValue="" aria-invalid={!!errors.reason} required><option value="" disabled>{site.form.reasonPlaceholder}</option>{site.form.reasons.map(reason => <option key={reason}>{reason}</option>)}</select>{errors.reason && <span>{site.form.required}</span>}</label><label>{site.form.labels.message}<textarea {...register("message")} rows={4}/></label><button className="button" type="submit">{site.form.submit}<ArrowRight /></button></form></div></section>;
}

function Footer() { return <footer className="footer"><div className="container footer-grid"><div><span className="brand"><img src={brandIcon} alt="" className="brand-icon" loading="lazy" /><span className="wordmark">{site.doctor}</span></span><p>{site.specialty}</p><span>{CRM} · {RQE}</span></div><div><strong>{site.footer.contactTitle}</strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram />{site.footer.instagram}</a></div><div><strong>{site.footer.linksTitle}</strong>{site.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div className="container footer-bottom"><span>{site.footer.credit}</span><span>{site.footer.copyright}</span></div></footer>; }

// Nós auxiliares do JSON-LD: campos vazios são omitidos para não sujar o grafo.
const nodes = (type: string, values: readonly string[]) => values.length ? values.map(name => ({ "@type": type, name })) : undefined;

function StructuredData() {
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: site.faq.items.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  // knowsAbout alimenta o GEO com o conteúdo do blog do site anterior (ver content/site.ts).
  const knowsAbout = [
    ...geo.conditions.map(item => ({
      "@type": "MedicalCondition", name: item.name, alternateName: item.alternateName || undefined, description: item.description,
      signOrSymptom: nodes("MedicalSignOrSymptom", item.symptoms), riskFactor: nodes("MedicalRiskFactor", item.riskFactors),
      typicalTest: nodes("MedicalTest", item.tests), possibleTreatment: nodes("MedicalTherapy", item.treatments),
      possibleComplication: item.complications.length ? item.complications.join(", ") : undefined,
    })),
    ...geo.expertise.map(item => ({ "@type": "Thing", name: item.name, description: item.description })),
  ];
  const physician = {
    "@context": "https://schema.org", "@type": "Physician", name: site.doctor, medicalSpecialty: site.specialty,
    description: site.hero.subtitle, url: SITE_URL, sameAs: [INSTAGRAM], telephone: `+${WHATSAPP_NUMBER}`, email: EMAIL,
    identifier: [{ "@type": "PropertyValue", propertyID: "CRM", value: CRM }, { "@type": "PropertyValue", propertyID: "RQE", value: RQE }],
    areaServed: { "@type": "City", name: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    knowsAbout,
    address: site.locations.items.map(item => ({ "@type": "PostalAddress", name: item.name, streetAddress: item.address, addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" })),
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}/></>;
}

export function LandingPage() { return <><StructuredData/><Navbar/><main><Hero/><About/><Conditions/><Differentials/><Locations/><Testimonials/><FinalCta/><FAQ/><Contact/></main><Footer/></>; }
