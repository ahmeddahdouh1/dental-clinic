// ─── Doctor images (Unsplash — optimized 400px) ───────────────────────────

export const DOCTOR_IMAGES = {
  'Dr. Yousef Haddad'  : 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=75&fit=crop&auto=format',
  'Dr. Khalid Mansour' : 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=75&fit=crop&auto=format',
  'Dr. Sami Odeh'      : 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=75&fit=crop&auto=format',
  'Dr. Tariq Musleh'   : 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=75&fit=crop&auto=format',
  'Dr. Amira Nasser'   : 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=75&fit=crop&auto=format',
  'Dr. Lina Barakat'   : 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&q=75&fit=crop&auto=format',
  'Dr. Reem Zohbi'     : 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=75&fit=crop&auto=format',
  'Dr. Hana Abu Saleh' : 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=75&fit=crop&auto=format',
};

export const getDoctorImage = (name) =>
  DOCTOR_IMAGES[name] ?? 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=75&fit=crop&auto=format';

// ─── Clinic / Hero images ─────────────────────────────────────────────────

export const CLINIC_IMAGES = {
  hero    : 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&fit=crop&auto=format',
  clinic  : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&fit=crop&auto=format',
  dental  : 'https://images.unsplash.com/photo-1588776814546-1ffbb5ff32d1?w=900&q=80&fit=crop&auto=format',
  chair   : 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&fit=crop&auto=format',
};

// ─── Dental conditions ────────────────────────────────────────────────────

export const DENTAL_CONDITIONS = [
  { value: 'crown',      label: 'Crown',             icon: 'crown' },
  { value: 'cleaning',   label: 'Teeth Cleaning',    icon: 'cleaning_services' },
  { value: 'extraction', label: 'Tooth Extraction',  icon: 'dentistry' },
  { value: 'braces',     label: 'Braces / Alignment',icon: 'straighten' },
  { value: 'rootcanal',  label: 'Root Canal',        icon: 'healing' },
  { value: 'other',      label: 'Other / Consultation', icon: 'help_outline' },
];

export const conditionLabel = (value) =>
  DENTAL_CONDITIONS.find((c) => c.value === value)?.label ?? value;

// ─── Appointment statuses ─────────────────────────────────────────────────

export const STATUS_MAP = {
  pending   : { label: 'Pending Review', color: 'badge-pending',   icon: 'pending_actions' },
  confirmed : { label: 'Confirmed',      color: 'badge-confirmed', icon: 'check_circle'    },
  rejected  : { label: 'Rejected',       color: 'badge-rejected',  icon: 'cancel'          },
  completed : { label: 'Completed',      color: 'badge-completed', icon: 'task_alt'        },
};

// ─── Days of week ─────────────────────────────────────────────────────────

export const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// ─── Navigation ───────────────────────────────────────────────────────────

export const PATIENT_NAV = [
  { label: 'Dashboard',        href: '/dashboard',     icon: 'dashboard'        },
  { label: 'Book Appointment', href: '/book',           icon: 'calendar_today'   },
  { label: 'My Doctors',       href: '/doctors',        icon: 'medical_services' },
  { label: 'My Visits',        href: '/appointments',   icon: 'event_note'       },
];

export const SECRETARY_NAV = [
  { label: 'Overview',     href: '/secretary/dashboard',     icon: 'dashboard'        },
  { label: 'Appointments', href: '/secretary/appointments',  icon: 'calendar_today'   },
  { label: 'Doctors',      href: '/secretary/doctors',       icon: 'medical_services' },
  { label: 'Patients',     href: '/secretary/patients',      icon: 'group'            },
];

export const DOCTOR_NAV = [
  { label: 'My Schedule',   href: '/doctor/schedule',      icon: 'calendar_today'   },
  { label: 'My Patients',   href: '/doctor/patients',      icon: 'group'            },
  { label: 'Appointments',  href: '/doctor/appointments',  icon: 'event_note'       },
];
