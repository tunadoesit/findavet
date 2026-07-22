import './globals.css';

export const metadata = {
  title: 'FindAVet | Find the right vet in Athens',
  description: 'Compare veterinary clinics by services, access, languages and transparent pricing.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
