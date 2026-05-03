'use client';

import { useState } from 'react';
import { Search, ExternalLink, MapPin, User } from 'lucide-react';

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
];

export default function FindVoterPage() {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [tab, setTab] = useState<'name' | 'pincode'>('name');

  const handleNameSearch = () => {
    const params = new URLSearchParams();
    if (name) params.append('name', name);
    if (state) params.append('state', state);
    window.open(`https://electoralsearch.eci.gov.in/?${params.toString()}`, '_blank');
  };

  const handlePincodeSearch = () => {
    window.open(`https://booth.eci.gov.in/`, '_blank');
  };

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4 uppercase tracking-widest border-b-4 border-foreground inline-block pb-2">
          Find Your Vote
        </h1>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mt-4">
          Check your name on the voter list, find your polling booth, or locate your constituency.
        </p>
      </div>

      {/* Tab Toggle */}
      <div className="flex border-4 border-foreground mb-8" style={{ boxShadow: '6px 6px 0px var(--foreground)' }}>
        <button
          onClick={() => setTab('name')}
          className={`flex-1 py-4 font-black uppercase tracking-widest text-lg transition-colors ${tab === 'name' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
        >
          <User className="inline w-5 h-5 mr-2" />Search by Name
        </button>
        <button
          onClick={() => setTab('pincode')}
          className={`flex-1 py-4 font-black uppercase tracking-widest text-lg transition-colors border-l-4 border-foreground ${tab === 'pincode' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
        >
          <MapPin className="inline w-5 h-5 mr-2" />Find Booth
        </button>
      </div>

      {tab === 'name' ? (
        <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '12px 12px' }}
          />
          <h2 className="text-2xl font-black font-display uppercase mb-6">Check Voter Roll</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-black uppercase text-sm tracking-widest mb-2 block">Your Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="As it appears on documents..."
                className="w-full border-4 border-foreground p-4 text-lg font-medium bg-background focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="font-black uppercase text-sm tracking-widest mb-2 block">State / UT *</label>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                className="w-full border-4 border-foreground p-4 text-lg font-medium bg-background focus:outline-none focus:border-primary appearance-none"
              >
                <option value="">Select your state...</option>
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <button
              onClick={handleNameSearch}
              disabled={!name || !state}
              className="mt-4 flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black text-xl uppercase tracking-widest px-8 py-5 border-4 border-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            >
              Search on ECI Portal <ExternalLink className="w-6 h-6" />
            </button>
            <p className="text-sm font-medium text-foreground/50 text-center">
              This will open the official Election Commission of India electoral search portal.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-card border-4 border-foreground p-8" style={{ boxShadow: '8px 8px 0px var(--foreground)' }}>
          <h2 className="text-2xl font-black font-display uppercase mb-6">Find Your Polling Booth</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-black uppercase text-sm tracking-widest mb-2 block">Pin Code</label>
              <input
                type="text"
                value={pincode}
                onChange={e => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit pin code..."
                className="w-full border-4 border-foreground p-4 text-lg font-medium bg-background focus:outline-none focus:border-primary tracking-widest"
                maxLength={6}
              />
            </div>
            <button
              onClick={handlePincodeSearch}
              className="mt-4 flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black text-xl uppercase tracking-widest px-8 py-5 border-4 border-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_var(--foreground)]"
            >
              Find My Booth <ExternalLink className="w-6 h-6" />
            </button>
            <p className="text-sm font-medium text-foreground/50 text-center">
              Redirects to ECI's official booth locator portal.
            </p>
          </div>
        </div>
      )}

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: '📱', title: 'Voter Helpline App', desc: 'Download the official app to check your name, find booth, and request Voter ID.', link: 'https://play.google.com/store/apps/details?id=com.voterIdHelplineApp' },
          { icon: '📞', title: 'Call 1950', desc: 'Dial the National Voter Helpline from any phone — available in multiple languages.', link: 'tel:1950' },
          { icon: '🌐', title: 'NVSP Portal', desc: 'Register, update, or download your e-EPIC (digital Voter ID) at the NVSP portal.', link: 'https://voters.eci.gov.in' },
        ].map((card, i) => (
          <a key={i} href={card.link} target="_blank" rel="noopener noreferrer"
            className="bg-card border-4 border-foreground p-6 hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_var(--foreground)] group block">
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="font-black font-display uppercase tracking-wide text-lg mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
            <p className="text-sm font-medium text-foreground/70">{card.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
