export function WhatsAppButton() {
  const phone = "6388989935";
  const message = encodeURIComponent(
    "Hi! I would like to book an appointment at Beauty N Joy.",
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-ocid="whatsapp.button"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3
        text-white font-body text-sm font-medium
        shadow-elegant transition-smooth hover-lift"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-white flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.48 2.03 7.79L.5 31.5l7.97-2.03A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.1c-2.62 0-5.07-.72-7.17-1.97l-.51-.3-5.3 1.39 1.42-5.17-.34-.54A12.59 12.59 0 0 1 3.4 16C3.4 9.06 9.07 3.4 16 3.4 22.93 3.4 28.6 9.06 28.6 16S22.93 28.6 16 28.6zm6.9-9.4c-.38-.19-2.23-1.1-2.57-1.22-.35-.13-.6-.19-.86.19-.25.37-.98 1.22-1.2 1.47-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.04-1.88-1.12-1-1.88-2.24-2.1-2.62-.22-.38-.02-.58.16-.77.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.09-.19-.86-2.07-1.18-2.83-.31-.74-.63-.64-.86-.65H9.9c-.22 0-.6.09-.91.44-.31.35-1.19 1.16-1.19 2.82 0 1.67 1.22 3.28 1.39 3.51.16.22 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.14.13.65-.1 2-.82 2.28-1.6.28-.78.28-1.46.19-1.6-.09-.13-.31-.22-.69-.41z" />
      </svg>
      <span className="hidden sm:inline">Chat with Us</span>
    </a>
  );
}
