import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Rose Avenue, Beauty Street, Mumbai 400001",
  },
  { icon: Phone, label: "Phone", value: "+91 6388989935" },
  { icon: Mail, label: "Email", value: "hello@beautynjoy.in" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 10am–8pm, Sun 11am–6pm" },
];

export function ContactSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const formRef = useScrollReveal<HTMLDivElement>({
    direction: "right",
    delay: 150,
  });
  const infoRef = useScrollReveal<HTMLDivElement>({
    direction: "left",
    delay: 150,
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}. ${form.message} (Email: ${form.email})`,
    );
    window.open(`https://wa.me/6388989935?text=${msg}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-muted/30"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-accent mb-3">
            Reach Out
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Get In <span className="gradient-gold">Touch</span>
          </h2>
          <p className="mt-3 font-body text-muted-foreground max-w-xl mx-auto">
            Have a question or ready to book? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map + Info */}
          <div ref={infoRef} className="flex flex-col gap-6">
            {/* Embedded map */}
            <div className="rounded-2xl overflow-hidden shadow-elegant h-64">
              <iframe
                title="Salon Location"
                src="https://maps.google.com/maps?q=Mumbai+India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INFO.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-card border border-border"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-body text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-sm font-body font-medium text-foreground break-words">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={formRef}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border flex flex-col gap-5"
              data-ocid="contact.form"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-body font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  required
                  className="font-body"
                  data-ocid="contact.name.input"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-body font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="font-body"
                  data-ocid="contact.email.input"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-body font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us what you're looking for..."
                  rows={5}
                  required
                  className="font-body resize-none"
                  data-ocid="contact.message.textarea"
                />
              </div>

              {sent && (
                <div
                  className="text-sm font-body text-accent bg-accent/10 rounded-lg px-4 py-3"
                  data-ocid="contact.success_state"
                >
                  ✓ Opening WhatsApp — we'll be in touch soon!
                </div>
              )}

              <Button
                type="submit"
                className="w-full rounded-full bg-accent text-accent-foreground font-body font-medium
                  hover:opacity-90 transition-smooth"
                data-ocid="contact.submit_button"
              >
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
