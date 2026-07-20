import Link from 'next/link';
import {MapPin, TrainFront, Car, Languages, ArrowUpRight, Star} from 'lucide-react';
export default function VetCard({vet}){return <Link className="vet-card" href={`/vets/${vet.slug}`}>
  <div className={`vet-photo ${vet.tone}`}><span>{vet.emoji}</span><div className={`status ${vet.open?'is-open':''}`}>{vet.open?'Open now':'Closed'}</div><button aria-label="Save" className="heart">♡</button></div>
  <div className="vet-body"><div className="vet-heading"><div><p className="eyebrow"><MapPin size={13}/>{vet.area}</p><h3>{vet.name}</h3></div><div className="rating"><Star size={14} fill="currentColor"/> {vet.rating}<small>({vet.reviews})</small></div></div>
  <div className="chips">{vet.tags.map(t=><span key={t}>{t}</span>)}</div>
  <div className="facts"><p><TrainFront/>{vet.metro}</p><p><Car/>{vet.parking}</p><p><Languages/>{vet.languages.join(' · ')}</p></div>
  <div className="card-foot"><div><small>Consultation</small><strong>{vet.price}</strong></div><span>View clinic <ArrowUpRight size={16}/></span></div></div>
  </Link>}
