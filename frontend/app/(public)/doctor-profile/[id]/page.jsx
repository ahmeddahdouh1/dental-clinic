'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PublicNavbar } from '../../../../components/layout/PublicNavbar';
import { Spinner } from '../../../../components/ui';
import { getDoctorImage } from '../../../../lib/constants';
import api from '../../../../lib/api';

const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

export default function DoctorDetailPage() {
  const { id }   = useParams();
  const router   = useRouter();
  const [doctor,  setDoctor]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState('');

  useEffect(() => {
    if (!id) return;
    api.get(`/doctors/${id}`)
      .then(({ data }) => setDoctor(data.data))
      .catch(() => setError('Doctor not found.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <PublicNavbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <Spinner size="lg" className="text-primary" />
        </div>
      </>
    );
  }

  if (error || !doctor) {
    return (
      <>
        <PublicNavbar />
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 gap-4">
          <span className="material-symbols-outlined text-5xl text-outline">person_off</span>
          <h2 className="text-2xl font-bold font-manrope">{error || 'Doctor not found'}</h2>
          <Link href="/#doctors" className="text-primary font-semibold hover:underline">
            ← Back to Doctors
          </Link>
        </div>
      </>
    );
  }

  const imgSrc       = getDoctorImage(doctor.user?.name);
  const workingDays  = doctor.availability ?? [];
  const workingDayNums = workingDays.map(a => a.dayOfWeek);

  return (
    <>
      <PublicNavbar />
      <main className="pt-20 min-h-screen bg-surface">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 space-y-10 animate-fade-in">

          {/* Back button */}
          <button onClick={() => router.back()}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-medium">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back
          </button>

          {/* ── Hero card ─────────────────────────────────────────────── */}
          <div className="card overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-0">

              {/* Doctor image */}
              <div className="w-full sm:w-64 h-72 sm:h-auto flex-shrink-0 relative">
                <img
                  src={imgSrc}
                  alt={doctor.user?.name}
                  className="w-full h-full object-cover"
                />
                {/* Available badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-label-sm font-bold backdrop-blur ${
                    doctor.isAvailable
                      ? 'bg-secondary-container/90 text-secondary'
                      : 'bg-surface-container/90 text-outline'
                  }`}>
                    {doctor.isAvailable ? '● Available' : '○ Unavailable'}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-label-sm font-bold text-primary tracking-widest uppercase">
                      {doctor.specialization}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface font-manrope mt-1">
                      {doctor.user?.name}
                    </h1>
                  </div>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-4">
                    {doctor.yearsExperience > 0 && (
                      <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
                        <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                        <div>
                          <p className="text-label-sm text-outline uppercase tracking-wider">Experience</p>
                          <p className="font-bold text-on-surface text-sm">{doctor.yearsExperience} years</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-xl">medical_services</span>
                      <div>
                        <p className="text-label-sm text-outline uppercase tracking-wider">Specialty</p>
                        <p className="font-bold text-on-surface text-sm">{doctor.specialization}</p>
                      </div>
                    </div>
                    {doctor.user?.phone && (
                      <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
                        <span className="material-symbols-outlined text-primary text-xl">phone</span>
                        <div>
                          <p className="text-label-sm text-outline uppercase tracking-wider">Phone</p>
                          <p className="font-bold text-on-surface text-sm">{doctor.user.phone}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  {doctor.bio && (
                    <p className="text-on-surface-variant leading-relaxed">{doctor.bio}</p>
                  )}
                </div>

                {/* Book button */}
                {doctor.isAvailable && (
                  <Link href="/register">
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
                      <span className="material-symbols-outlined text-sm">calendar_add_on</span>
                      Book an Appointment
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ── Availability ──────────────────────────────────────────── */}
          {workingDays.length > 0 && (
            <div className="card p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-on-surface font-manrope">Availability</h2>
                <div className="h-1 w-10 bg-primary-container mt-2 rounded-full" />
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-2">
                {DAY_SHORT.map((day, i) => {
                  const slot = workingDays.find(a => a.dayOfWeek === i);
                  const works = !!slot;
                  return (
                    <div key={day} className={`rounded-2xl p-3 text-center transition-all ${
                      works
                        ? 'bg-primary/10 border-2 border-primary/20'
                        : 'bg-surface-container-low opacity-40'
                    }`}>
                      <p className={`text-label-sm font-bold uppercase tracking-wider ${
                        works ? 'text-primary' : 'text-outline'
                      }`}>{day}</p>
                      {works && (
                        <p className="text-xs text-on-surface-variant mt-1 leading-tight">
                          {slot.startTime?.slice(0,5)}<br/>–<br/>{slot.endTime?.slice(0,5)}
                        </p>
                      )}
                      {!works && (
                        <p className="text-xs text-outline mt-1">Off</p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Slot duration */}
              {workingDays[0]?.slotDuration && (
                <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  Each appointment slot is <strong>{workingDays[0].slotDuration} minutes</strong>
                </div>
              )}
            </div>
          )}

          {/* ── Specialization info ───────────────────────────────────── */}
          <div className="card p-8 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-on-surface font-manrope">About {doctor.specialization}</h2>
              <div className="h-1 w-10 bg-primary-container mt-2 rounded-full" />
            </div>

            {/* Specialization descriptions */}
            {(() => {
              const descriptions = {
                'Orthodontics'       : 'Orthodontics focuses on diagnosing and treating misaligned teeth and jaws. Common treatments include braces, clear aligners, and retainers to achieve a perfect smile.',
                'Endodontics'        : 'Endodontics specializes in treating the dental pulp and surrounding tissues. Root canal therapy is the most common procedure, saving teeth that would otherwise need extraction.',
                'Prosthodontics'     : 'Prosthodontics deals with restoring and replacing teeth. This includes crowns, bridges, dentures, and dental implants to restore function and aesthetics.',
                'Pediatric Dentistry': 'Pediatric dentistry provides comprehensive oral health care for children from infancy through adolescence, making dental visits comfortable and enjoyable.',
                'Oral Surgery'       : 'Oral surgery encompasses surgical procedures of the mouth and jaw, including tooth extractions, implants, and corrective jaw surgery.',
                'Periodontics'       : 'Periodontics focuses on preventing, diagnosing, and treating gum disease and conditions affecting the supporting structures of the teeth.',
                'Cosmetic Dentistry' : 'Cosmetic dentistry improves the appearance of teeth, gums, and smile through procedures like whitening, veneers, bonding, and smile makeovers.',
                'General Dentistry'  : 'General dentistry provides comprehensive oral health care for the whole family, including checkups, cleanings, fillings, and preventive treatments.',
              };
              const desc = descriptions[doctor.specialization];
              return desc ? (
                <p className="text-on-surface-variant leading-relaxed">{desc}</p>
              ) : null;
            })()}

            {/* Common procedures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {(() => {
                const procedures = {
                  'Orthodontics'       : ['Metal Braces','Clear Aligners','Retainers','Jaw Correction'],
                  'Endodontics'        : ['Root Canal Therapy','Pulp Capping','Apicoectomy','Retreatment'],
                  'Prosthodontics'     : ['Dental Crowns','Bridges','Dentures','Implant Restoration'],
                  'Pediatric Dentistry': ['Fluoride Treatment','Sealants','Space Maintainers','Early Orthodontics'],
                  'Oral Surgery'       : ['Tooth Extraction','Wisdom Tooth Removal','Implants','Bone Grafting'],
                  'Periodontics'       : ['Deep Cleaning','Gum Grafting','Scaling','Laser Treatment'],
                  'Cosmetic Dentistry' : ['Teeth Whitening','Veneers','Bonding','Smile Makeover'],
                  'General Dentistry'  : ['Regular Checkups','Fillings','Cleanings','X-Rays'],
                };
                const procs = procedures[doctor.specialization] ?? [];
                return procs.map(p => (
                  <div key={p} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                    <span className="text-sm font-medium text-on-surface">{p}</span>
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────────────────── */}
          {doctor.isAvailable && (
            <div className="card p-8 bg-primary border-0 text-center space-y-4">
              <h2 className="text-2xl font-bold text-white font-manrope">
                Ready to Book with {doctor.user?.name?.replace('Dr. ', 'Dr. ')}?
              </h2>
              <p className="text-primary-fixed/80">
                Create a free account and book your appointment in under 2 minutes.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/register">
                  <button className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors">
                    Create Account & Book
                  </button>
                </Link>
                <Link href="/login">
                  <button className="px-8 py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                    Already have an account?
                  </button>
                </Link>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
