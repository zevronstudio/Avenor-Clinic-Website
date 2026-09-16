'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, HeartPulse, Menu, Phone, ShieldCheck, Sparkles, Star, Stethoscope, X } from 'lucide-react'

const services = [
  { icon: HeartPulse, title: 'Primary care', text: 'Thoughtful, ongoing care for every stage of life.' },
  { icon: Sparkles, title: 'Preventive health', text: 'Personalized screenings and plans to help you thrive.' },
  { icon: Stethoscope, title: 'Specialty medicine', text: 'Expert support from a connected team of specialists.' },
]

const doctors = [
  {
    name: 'Dr. Maya Patel',
    role: 'Family Medicine',
    tag: 'Lead Physician',
    education: 'MD · Harvard Medical School',
    experience: '14+ yrs experience',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Dr. Elliot Brooks',
    role: 'Internal Medicine',
    tag: 'Internal Medicine',
    education: 'MD · Johns Hopkins Medicine',
    experience: '11+ yrs experience',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Dr. Lena Ortiz',
    role: 'Women’s Health',
    tag: 'OB/GYN Specialist',
    education: 'MD · Columbia University',
    experience: '9+ yrs experience',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85',
  },
]

const faqs = [
  ['What insurance plans do you accept?', 'We work with most major insurance providers. Our care team can verify your coverage before your visit and answer any questions about your benefits.'],
  ['How quickly can I see a provider?', 'Many new and returning patients can find an appointment within the same week. Use our request form and we will be in touch with the best available time.'],
  ['Do you offer virtual visits?', 'Yes. Virtual visits are available for many primary and follow-up appointments, giving you expert care wherever you are.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [department, setDepartment] = useState('Primary care')
  const [submitted, setSubmitted] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const today = useMemo(() => new Date().toISOString().split('T')[0], [])
  const doctorsByDepartment = department === 'Women’s health' ? ['Dr. Lena Ortiz'] : department === 'Internal medicine' ? ['Dr. Elliot Brooks'] : ['Dr. Maya Patel', 'Dr. Elliot Brooks']

  function submitAppointment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#123b3d]">
      <header className="sticky top-0 z-50 border-b border-[#dce7e3]/80 bg-[#fbfaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Avenor Medical Clinic home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0e4d4f] text-[#f2c8ae]"><HeartPulse size={21} strokeWidth={2.5} /></span>
            <span><span className="block text-[15px] font-bold tracking-[0.16em] text-[#0e4d4f]">AVENOR</span><span className="block text-[10px] font-medium tracking-[0.18em] text-[#718887]">MEDICAL CLINIC</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#466564] lg:flex" aria-label="Main navigation">
            <a href="#care" className="transition-colors hover:text-[#0e4d4f]">Our care</a><a href="#about" className="transition-colors hover:text-[#0e4d4f]">About us</a><a href="#doctors" className="transition-colors hover:text-[#0e4d4f]">Our doctors</a><a href="#faq" className="transition-colors hover:text-[#0e4d4f]">FAQs</a>
          </nav>
          <div className="hidden items-center gap-5 lg:flex"><a href="tel:+16175550184" className="flex items-center gap-2 text-sm font-semibold text-[#466564]"><Phone size={16} /> (617) 555-0184</a><a href="#appointment" className="rounded-full bg-[#0e4d4f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176466]">Book an appointment</a></div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#dce7e3] px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#care" onClick={() => setMenuOpen(false)}>Our care</a><a href="#about" onClick={() => setMenuOpen(false)}>About us</a><a href="#doctors" onClick={() => setMenuOpen(false)}>Our doctors</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a><a href="#appointment" onClick={() => setMenuOpen(false)} className="w-fit rounded-full bg-[#0e4d4f] px-5 py-3 text-white">Book an appointment</a></div></nav>}
      </header>

      <section id="top" className="overflow-hidden border-b border-[#dce7e3] bg-[#e5f0ed]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#bb7052]">
              <span className="h-px w-8 bg-[#bb7052]" /> Care that sees you
            </div>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.03] tracking-[-0.04em] text-[#0e4d4f] sm:text-6xl lg:text-[76px]">
              Your health, <em className="font-normal text-[#bb7052]">whole.</em>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#466564]">
              Modern care. Trusted expertise. Better health. Avenor brings thoughtful primary and specialty care together around what matters most: you.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-[#0e4d4f] px-6 py-4 font-semibold text-white shadow-lg shadow-[#0e4d4f]/15 transition hover:-translate-y-0.5 hover:bg-[#176466]">
                Find your care <ArrowRight size={18} />
              </a>
              <a href="#care" className="inline-flex items-center gap-2 rounded-full border border-[#9bb9b3] px-6 py-4 font-semibold text-[#0e4d4f] transition hover:bg-white/60">
                Explore services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-7 border-t border-[#b7cfca] pt-5 text-sm text-[#466564]">
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#bb7052]" /> Board-certified team</span>
              <span className="flex items-center gap-2"><Clock3 size={18} className="text-[#bb7052]" /> Same-week visits</span>
            </div>
          </div>

          <div className="relative">
            {/* Background ambient glow */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#bb7052]/20 via-[#0e4d4f]/15 to-transparent blur-xl opacity-70 -z-10" />
            
            {/* Main Hero Photo Container */}
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-[#0e4d4f]/15">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1300&q=85"
                alt="Doctor speaking with a patient in a bright modern clinic"
                className="aspect-[4/3] sm:aspect-[1.22] w-full object-cover object-center"
              />
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute -top-3.5 -right-2 sm:-right-4 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-xl border border-[#dce7e3] text-xs font-bold text-[#0e4d4f]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Accepting New Patients
            </div>

            {/* Bottom Left Floating Social Proof Badge */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 rounded-2xl bg-white p-4 shadow-2xl shadow-[#0e4d4f]/20 border border-[#dce7e3]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80"
                    alt="Patient"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80"
                    alt="Patient"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80"
                    alt="Patient"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0e4d4f] text-[11px] font-bold text-white ring-2 ring-white">
                    +12k
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#bb7052]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-[#0e4d4f]">4.9</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#718887]">Trusted by 12,000+ patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="care" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#bb7052]">Care, made personal</p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#0e4d4f] sm:text-5xl">The right care for your <em className="font-normal text-[#bb7052]">every day.</em></h2>
          </div>
          <p className="max-w-sm leading-7 text-[#607876]">From checkups to complex care, our team makes it easier to feel informed, supported, and well.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-3xl border border-[#dce7e3] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0e4d4f]/5">
              <span className="mb-12 grid h-12 w-12 place-items-center rounded-2xl bg-[#f9e4d8] text-[#bb7052]"><Icon size={23} /></span>
              <h3 className="text-xl font-bold text-[#0e4d4f]">{title}</h3>
              <p className="mt-3 leading-7 text-[#607876]">{text}</p>
              <a href="#appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0e4d4f]">
                Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#0e4d4f] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/15 bg-[#092f31] shadow-2xl shadow-black/25">
              <img
                src="/images/avenor-about-clinician.png"
                alt="Clinician consulting with patient in modern clinic"
                className="aspect-[4/3] sm:aspect-[1.28] w-full object-cover object-center"
              />
            </div>
            
            {/* Bottom floating badge */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto rounded-2xl bg-[#092f31]/95 backdrop-blur-md border border-white/20 p-4 text-white shadow-2xl flex items-center gap-3.5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2c8ae] text-[#0e4d4f]">
                <Stethoscope size={22} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-[#f2c8ae] uppercase">Compassionate Care</p>
                <p className="text-sm font-bold text-white">Dedicated 1-on-1 Consultations</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#f2c8ae]">A better standard of care</p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              Care that feels like it was made for <em className="font-normal text-[#f2c8ae]">you.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#c5d9d5]">
              We believe healthcare should be clear, connected, and human. That means listening first, explaining the next step, and making room for the whole person behind every appointment.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="border-l border-[#6e9b94] pl-4">
                <p className="text-3xl font-bold text-[#f2c8ae]">4.9/5</p>
                <p className="mt-1 text-sm text-[#c5d9d5]">Patient experience rating</p>
              </div>
              <div className="border-l border-[#6e9b94] pl-4">
                <p className="text-3xl font-bold text-[#f2c8ae]">25+</p>
                <p className="mt-1 text-sm text-[#c5d9d5]">Years serving our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#bb7052]">Meet your team</p>
            <h2 className="font-serif text-4xl tracking-[-0.03em] text-[#0e4d4f] sm:text-5xl">Experts who listen.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#607876]">
            Every physician at Avenor is board-certified, patient-focused, and committed to high-standard personalized care.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group flex flex-col rounded-[2rem] border border-[#dce7e3] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9bb9b3] hover:shadow-xl hover:shadow-[#0e4d4f]/8"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#e5f0ed] aspect-[4/5]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#0e4d4f] shadow-sm">
                  {doctor.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between px-2 pt-4 pb-2">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#718887]">
                    <span className="font-semibold text-[#bb7052]">{doctor.role}</span>
                    <span>{doctor.experience}</span>
                  </div>
                  <h3 className="mt-1.5 text-xl font-bold text-[#0e4d4f]">{doctor.name}</h3>
                  <p className="mt-1 text-xs text-[#607876]">{doctor.education}</p>
                </div>

                <a
                  href="#appointment"
                  onClick={() => {
                    if (doctor.name.includes('Ortiz')) setDepartment('Women’s health')
                    else if (doctor.name.includes('Brooks')) setDepartment('Internal medicine')
                    else setDepartment('Primary care')
                  }}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4e9e2] py-2.5 text-xs font-bold text-[#0e4d4f] transition hover:bg-[#0e4d4f] hover:text-white"
                >
                  Book with {doctor.name.split(' ')[1]} <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="appointment" className="bg-[#f4e9e2] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#bb7052]">Start your care journey</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#0e4d4f] sm:text-5xl">Let&apos;s find a time that works for <em className="font-normal text-[#bb7052]">you.</em></h2><p className="mt-5 max-w-md leading-7 text-[#607876]">Tell us a little about what you need. Our patient coordinators will reach out to confirm your visit.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#0e4d4f]"><CalendarDays size={20} className="text-[#bb7052]" /> New patients welcome</div></div><div className="rounded-3xl bg-white p-6 shadow-xl shadow-[#bb7052]/10 sm:p-8">{submitted ? <div className="flex min-h-[330px] flex-col items-center justify-center text-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#e5f0ed] text-[#0e4d4f]"><Check /></span><h3 className="mt-5 text-2xl font-bold text-[#0e4d4f]">Request received</h3><p className="mt-3 max-w-sm leading-7 text-[#607876]">Thank you for choosing Avenor Medical Clinic. A care coordinator will be in touch shortly.</p><button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-[#bb7052]">Submit another request</button></div> : <form onSubmit={submitAppointment} className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-[#466564]">Full name<input required className="field" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-semibold text-[#466564]">Email address<input required type="email" className="field" placeholder="you@example.com" /></label><label className="grid gap-2 text-sm font-semibold text-[#466564]">Care needed<select className="field" value={department} onChange={(e) => setDepartment(e.target.value)}><option>Primary care</option><option>Internal medicine</option><option>Women’s health</option></select></label><label className="grid gap-2 text-sm font-semibold text-[#466564]">Preferred doctor<select className="field">{doctorsByDepartment.map((name) => <option key={name}>{name}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold text-[#466564]">Preferred date<input required type="date" min={today} className="field" /></label><label className="grid gap-2 text-sm font-semibold text-[#466564]">Phone number<input required type="tel" className="field" placeholder="(555) 555-5555" /></label><button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0e4d4f] px-5 py-4 font-semibold text-white transition hover:bg-[#176466] sm:col-span-2">Request an appointment <ArrowRight size={17} /></button><p className="text-center text-xs text-[#718887] sm:col-span-2">By submitting, you agree to be contacted by Avenor Medical Clinic.</p></form>}</div></div></section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:py-28"><div className="text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#bb7052]">Good to know</p><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#0e4d4f] sm:text-5xl">Your questions, answered.</h2></div><div className="mt-12 divide-y divide-[#dce7e3] border-y border-[#dce7e3]">{faqs.map(([question, answer], index) => <div key={question}><button className="flex w-full items-center justify-between gap-5 py-6 text-left font-semibold text-[#0e4d4f]" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={20} className={`shrink-0 transition ${openFaq === index ? 'rotate-180 text-[#bb7052]' : ''}`} /></button>{openFaq === index && <p className="max-w-2xl pb-6 leading-7 text-[#607876]">{answer}</p>}</div>)}</div></section>

      <section className="bg-[#e5f0ed] px-5 py-16 text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#bb7052]">Here when you need us</p><h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl tracking-[-0.03em] text-[#0e4d4f] sm:text-5xl">Modern care. Trusted expertise. Better health.</h2><a href="#appointment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0e4d4f] px-6 py-4 font-semibold text-white">Book your visit <ArrowRight size={18} /></a></section>

      <footer className="bg-[#092f31] px-5 py-12 text-[#c5d9d5] lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]"><div><div className="flex items-center gap-3 text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f2c8ae] text-[#0e4d4f]"><HeartPulse size={21} /></span><span className="text-[15px] font-bold tracking-[0.16em]">AVENOR</span></div><p className="mt-5 max-w-xs text-sm leading-6">Modern Care. Trusted Expertise. Better Health.</p></div><div><h3 className="font-semibold text-white">Explore</h3><div className="mt-4 grid gap-3 text-sm"><a href="#care">Our care</a><a href="#about">About us</a><a href="#doctors">Our doctors</a></div></div><div><h3 className="font-semibold text-white">Visit us</h3><p className="mt-4 text-sm leading-6">125 Beacon Street<br />Boston, MA 02116</p></div><div><h3 className="font-semibold text-white">Contact</h3><p className="mt-4 text-sm leading-6">(617) 555-0184<br />hello@avenorclinic.com</p></div></div><div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-[#315b5b] pt-6 text-xs sm:flex-row"><span>© 2026 Avenor Medical Clinic. All rights reserved.</span><span>Privacy · Accessibility</span></div></footer>
    </main>
  )
}
