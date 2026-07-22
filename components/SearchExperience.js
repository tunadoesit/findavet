'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight, Car, ChevronDown, Heart, Languages, List,
  Map, MapPin, Search, SlidersHorizontal, Star, TrainFront, X
} from 'lucide-react';
import { vets } from '../lib/vets';

const greek = {
  'Paws & Care': 'Paws & Care', 'Athens Vet Centre': 'Athens Vet Centre',
  'Urban Pets Clinic': 'Urban Pets Clinic', 'North Paws': 'North Paws',
  'Seaside Vet': 'Seaside Vet', 'Little Creatures': 'Little Creatures',
  Kypseli: 'Κυψέλη', Pangrati: 'Παγκράτι', Koukaki: 'Κουκάκι',
  Chalandri: 'Χαλάνδρι', 'Palaio Faliro': 'Παλαιό Φάληρο', 'Neos Kosmos': 'Νέος Κόσμος',
  'Home visits': 'Κατ’ οίκον', 'Cats & dogs': 'Σκύλοι & γάτες',
  Emergency: 'Επείγοντα', Surgery: 'Χειρουργείο', 'Exotic pets': 'Εξωτικά ζώα',
  Dental: 'Οδοντιατρική', Imaging: 'Απεικόνιση', Rabbits: 'Κουνέλια',
  Greek: 'Ελληνικά', English: 'Αγγλικά', French: 'Γαλλικά', German: 'Γερμανικά',
};

const positions = [
  { left: '43%', top: '20%' }, { left: '56%', top: '43%' }, { left: '46%', top: '58%' },
  { left: '64%', top: '16%' }, { left: '39%', top: '77%' }, { left: '60%', top: '69%' },
];

const transport = ['Βικτώρια · 8 λεπτά', 'Ευαγγελισμός · 11 λεπτά', 'Συγγρού-Φιξ · 4 λεπτά', 'Χαλάνδρι · 7 λεπτά', 'Τροκαντερό · 5 λεπτά', 'Νέος Κόσμος · 3 λεπτά'];
const parking = ['Στάθμευση στον δρόμο', 'Ιδιωτικό πάρκινγκ', 'Περιορισμένη στάθμευση', 'Δωρεάν πάρκινγκ', 'Στάθμευση στον δρόμο', 'Πάρκινγκ με χρέωση κοντά'];
const areaAliases = {
  Kypseli: ['κυψέλη', 'κυψελη', 'kypseli', 'kipseli'],
  Pangrati: ['παγκράτι', 'παγκρατι', 'pangrati'],
  Koukaki: ['κουκάκι', 'κουκακι', 'koukaki'],
  Chalandri: ['χαλάνδρι', 'χαλανδρι', 'chalandri', 'halandri'],
  'Palaio Faliro': ['παλαιό φάληρο', 'παλαιο φαληρο', 'palaio faliro', 'paleo faliro'],
  'Neos Kosmos': ['νέος κόσμος', 'νεος κοσμος', 'neos kosmos'],
};

function ResultCard({ vet, index, selected, onSelect }) {
  return <article className={`search-card ${selected ? 'selected' : ''}`} onMouseEnter={onSelect} onClick={onSelect}>
    <div className={`search-card-photo ${vet.tone}`}>
      <span>{vet.emoji}</span>
      <div className={`status ${vet.open ? 'is-open' : ''}`}>{vet.open ? 'ΑΝΟΙΧΤΑ ΤΩΡΑ' : 'ΚΛΕΙΣΤΑ'}</div>
      <button aria-label="Αποθήκευση"><Heart size={18}/></button>
    </div>
    <div className="search-card-copy">
      <div className="search-card-head">
        <div><p><MapPin size={13}/>{greek[vet.area]}</p><h2>{greek[vet.name]}</h2></div>
        <span className="search-rating"><Star size={13} fill="currentColor"/> {vet.rating} <small>({vet.reviews})</small></span>
      </div>
      <div className="search-tags">{vet.tags.slice(0,2).map(tag => <span key={tag}>{greek[tag]}</span>)}</div>
      <div className="search-facts">
        <span><TrainFront/>{transport[index]}</span>
        <span><Car/>{parking[index]}</span>
        <span><Languages/>{vet.languages.slice(0,2).map(x => greek[x]).join(' · ')}</span>
      </div>
      <div className="search-price"><Link href={`/vets/${vet.slug}`}>Προβολή κλινικής <ArrowUpRight size={15}/></Link></div>
    </div>
  </article>
}

export default function SearchExperience() {
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState('list');
  const [active, setActive] = useState('');
  const [area, setArea] = useState('');
  const shown = useMemo(() => vets.filter(v => {
    const query = area.trim().toLocaleLowerCase('el');
    const matchesArea = !query || areaAliases[v.area].some(alias => alias.includes(query));
    return matchesArea && (active !== 'open' || v.open);
  }), [active, area]);

  return <main className="search-page">
    <header className="search-header">
      <Link href="/" className="brand"><span className="brandmark">+</span>findavet<span>.</span></Link>
      <label className="search-field"><Search size={19}/><input value={area} onChange={event => setArea(event.target.value)} placeholder="Αναζήτηση περιοχής, π.χ. Κυψέλη" aria-label="Αναζήτηση περιοχής"/>{area && <button type="button" onClick={() => setArea('')} aria-label="Καθαρισμός αναζήτησης"><X size={16}/></button>}</label>
      <nav><button>ΕΛ <ChevronDown size={14}/></button><button className="outline">Καταχώριση κλινικής</button></nav>
    </header>
    <label className="mobile-area-search"><Search size={18}/><input value={area} onChange={event => setArea(event.target.value)} placeholder="Περιοχή, π.χ. Κυψέλη" aria-label="Αναζήτηση περιοχής για κινητό"/>{area && <button type="button" onClick={() => setArea('')} aria-label="Καθαρισμός αναζήτησης"><X size={15}/></button>}</label>
    <section className="filterbar">
      <button onClick={() => setActive(active === 'open' ? '' : 'open')} className={active === 'open' ? 'active' : ''}>Ανοιχτά τώρα</button>
      <button>Επείγοντα</button><button>Κατ’ οίκον</button><button>Εξωτικά ζώα</button><button>Γλώσσες <ChevronDown size={13}/></button>
      <button className="all-filters"><SlidersHorizontal size={15}/> Όλα τα φίλτρα</button>
    </section>
    <div className="mobile-switch"><button className={mode === 'list' ? 'active' : ''} onClick={() => setMode('list')}><List/> Λίστα</button><button className={mode === 'map' ? 'active' : ''} onClick={() => setMode('map')}><Map/> Χάρτης</button></div>
    <div className="search-layout">
      <section className={`search-list ${mode === 'map' ? 'mobile-hidden' : ''}`}>
        <div className="results-intro"><div><p>{area ? `ΚΤΗΝΙΑΤΡΟΙ · ${area.toLocaleUpperCase('el')}` : 'ΚΤΗΝΙΑΤΡΟΙ ΣΤΗΝ ΑΘΗΝΑ'}</p><h1>{shown.length ? `${shown.length} επιλογές για εσένα` : 'Δεν βρέθηκαν κλινικές'}</h1></div><button>Προτεινόμενα <ChevronDown size={14}/></button></div>
        <p className="trust-note">Πρακτικές πληροφορίες για να ξέρεις τι να περιμένεις πριν επισκεφθείς την κλινική.</p>
        <div className="result-stack">{shown.map(v => { const index = vets.indexOf(v); return <ResultCard key={v.slug} vet={v} index={index} selected={selected === index} onSelect={() => setSelected(index)}/> })}</div>
      </section>
      <aside className={`map-panel ${mode === 'list' ? 'mobile-hidden' : ''}`}>
        <div className="map-water"></div><div className="map-park park-one"></div><div className="map-park park-two"></div>
        {Array.from({length: 9}).map((_,i) => <span className={`road road-${i+1}`} key={i}></span>)}
        <div className="map-label label-centre">ΑΘΗΝΑ</div><div className="map-label label-north">ΧΑΛΑΝΔΡΙ</div><div className="map-label label-south">ΝΕΟΣ ΚΟΣΜΟΣ</div>
        <button className="map-search"><Search size={15}/> Αναζήτηση σε αυτή την περιοχή</button>
        {shown.map(vet => { const index = vets.indexOf(vet); return <button key={vet.slug} aria-label={vet.name} style={positions[index]} onClick={() => setSelected(index)} className={`price-marker clinic-marker ${selected === index ? 'selected' : ''}`}>{greek[vet.name]}</button> })}
        <div className="map-key"><span></span> Επιλεγμένη κλινική</div>
      </aside>
    </div>
    <button className="floating-toggle" onClick={() => setMode(mode === 'list' ? 'map' : 'list')}>{mode === 'list' ? <><Map/> Χάρτης</> : <><List/> Λίστα</>}</button>
  </main>;
}
