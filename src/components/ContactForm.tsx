import { useState } from 'react';

type Stage = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [stage, setStage] = useState<Stage>('idle');
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);

    if (!name.trim()) return setErr('Please enter your name.');
    if (!/.+@.+\..+/.test(email)) return setErr('Please enter a valid email.');
    if (!message.trim()) return setErr('Please enter a message.');

    setStage('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          message: message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setStage('success');
        setName(''); setEmail(''); setPhone(''); setMessage('');
      } else {
        setStage('error');
        setErr(typeof data?.error === 'string' ? data.error : 'Send failed. Please try again.');
      }
    } catch {
      setStage('error');
      setErr('Network error. Please try again.');
    }
  }

  if (stage === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Thank you for reaching out. Dr. Gore will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStage('idle')}
          className="text-primary hover:underline font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  const disabled = stage === 'sending';

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-2">
        <label htmlFor="cname" className="text-base font-medium block text-foreground">Name *</label>
        <input
          id="cname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your full name"
          maxLength={100}
          disabled={disabled}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cemail" className="text-base font-medium block text-foreground">Email *</label>
        <input
          id="cemail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="your.email@example.com"
          maxLength={255}
          disabled={disabled}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cphone" className="text-base font-medium block text-foreground">Phone (optional)</label>
        <input
          id="cphone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="(555) 123-4567"
          disabled={disabled}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cmessage" className="text-base font-medium block text-foreground">Message *</label>
        <textarea
          id="cmessage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[120px] px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          placeholder="Please share what brings you here today..."
          maxLength={5000}
          disabled={disabled}
        />
      </div>

      {err && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-700">{err}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {disabled ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}
