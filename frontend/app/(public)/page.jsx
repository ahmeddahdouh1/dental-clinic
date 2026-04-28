import Link from 'next/link';
import Image from 'next/image';
import { PublicNavbar } from '../../components/layout/PublicNavbar';
import { CLINIC_IMAGES } from '../../lib/constants';

export const metadata = { title: 'DentaCare — Your Smile, Our Priority' };

const DOCTORS = [
  {
    name  : 'Dr. Yousef Haddad',
    spec  : 'Orthodontics',
    exp   : '12 years',
    rating: '4.9',
    img   : 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=75&fit=crop&auto=format',
  },
  {
    name  : 'Dr. Amira Nasser',
    spec  : 'Endodontics',
    exp   : '8 years',
    rating: '4.8',
    img   : 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=75&fit=crop&auto=format',
  },
  {
    name  : 'Dr. Khalid Mansour',
    spec  : 'Prosthodontics',
    exp   : '10 years',
    rating: '4.9',
    img   : 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=75&fit=crop&auto=format',
  },
  {
    name  : 'Dr. Lina Barakat',
    spec  : 'Pediatric Dentistry',
    exp   : '6 years',
    rating: '5.0',
    img   : 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=500&q=75&fit=crop&auto=format',
  },
];

export default function HomePage() {
  return (
    <>
      <PublicNavbar />
      <main className="pt-20 bg-surface min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-7 animate-slide-up">
            <div className="inline-block px-4 py-1.5 bg-secondary-container text-secondary rounded-full text-label-sm font-bold tracking-widest uppercase">
              Trusted Dental Care Since 2016
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight font-manrope">
              Your Smile,<br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Book appointments online in minutes. Choose your specialist, select your time slot,
              and receive instant email confirmation.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/register"
                className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl shadow-lg hover:scale-[0.98] transition-transform flex items-center gap-2">
                Book Appointment
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a href="#doctors"
                className="px-8 py-4 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors">
                Meet Our Doctors
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10" />
            <div className="aspect-[4/3] rounded-4xl overflow-hidden shadow-cloud-lg relative">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80&fit=crop&auto=format"
                alt="Modern dental clinic"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-surface-container-lowest/90 backdrop-blur rounded-2xl px-5 py-3 shadow-cloud flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">500+ Patients</p>
                  <p className="text-label-sm text-outline">98% Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-12 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Happy Patients' },
              { number: '8',    label: 'Specialists'    },
              { number: '10+',  label: 'Years Experience' },
              { number: '98%',  label: 'Satisfaction'   },
            ].map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <div className="text-3xl font-black text-primary font-manrope">{s.number}</div>
                <div className="text-label-sm font-bold text-on-surface-variant tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Clinic photos strip ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&fit=crop&auto=format',
              'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&fit=crop&auto=format',
            ].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container">
                <img
                  src={src}
                  alt="Dental clinic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Doctors section ───────────────────────────────────────────── */}
        <section id="doctors" className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-4">
              <p className="text-label-sm font-bold text-primary tracking-widest uppercase">Our Team</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-manrope">
                Meet Our Specialists
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                World-class dental experts dedicated to restorative and aesthetic excellence.
              </p>
            </div>
            <Link href="/register" className="text-primary font-bold flex items-center gap-2 hover:underline whitespace-nowrap">
              Book with Any Doctor
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doc) => (
              <div key={doc.name} className="group card hover:shadow-cloud-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Doctor image */}
                <div className="aspect-[3/4] overflow-hidden relative bg-surface-container">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm font-bold">{doc.rating}</span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-manrope text-on-surface">{doc.name}</h3>
                    <p className="text-sm text-on-surface-variant font-medium">{doc.spec}</p>
                    <p className="text-xs text-outline mt-0.5">{doc.exp} experience</p>
                  </div>
                  <Link href="/register">
                    <button className="w-full py-2.5 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors text-sm">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA strip ─────────────────────────────────────────────────── */}
        <section className="relative mx-6 sm:mx-8 mb-16 rounded-4xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80&fit=crop&auto=format" alt="Clinic" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-manrope">Ready for Your Next Visit?</h2>
            <p className="text-primary-fixed/80 mb-8 max-w-md mx-auto text-lg">
              Book online in under 2 minutes. No phone calls. Instant email confirmation.
            </p>
            <Link href="/register">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors text-lg shadow-lg">
                Get Started — It's Free
              </button>
            </Link>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <footer className="border-t border-outline-variant/10 py-8 px-8 text-center text-on-surface-variant text-sm">
          <p>© 2026 DentaCare — Clinical Sanctuary. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
