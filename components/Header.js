import Link from 'next/link';
export default function Header(){return <header className="header"><Link href="/" className="brand"><span className="brandmark">+</span>findavet<span>.</span></Link><nav><a href="#how">How it works</a><a href="#clinics">For clinics</a><button className="lang">EN⌄</button><button className="outline">List your clinic</button></nav></header>}
