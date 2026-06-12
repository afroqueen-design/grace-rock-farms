export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254110401004"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path d="M16.01 3.2A12.72 12.72 0 0 0 5.05 22.37L3.2 29.2l7-1.84A12.73 12.73 0 1 0 16.01 3.2Zm0 2.55a10.18 10.18 0 0 1 8.66 15.55 10.16 10.16 0 0 1-12.98 3.49l-.5-.25-4.15 1.09 1.11-4.04-.28-.52A10.18 10.18 0 0 1 16.01 5.75Zm-4.33 4.7c-.22 0-.58.08-.89.42-.31.33-1.16 1.13-1.16 2.75s1.19 3.19 1.35 3.41c.16.22 2.28 3.65 5.68 4.97 2.82 1.11 3.4.89 4.01.83.61-.05 1.98-.81 2.26-1.59.28-.78.28-1.45.2-1.59-.08-.14-.31-.22-.64-.39-.33-.17-1.98-.98-2.29-1.09-.31-.11-.53-.17-.75.17-.22.33-.86 1.09-1.06 1.31-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.65-1.97-1.84-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.81-1.03-2.48-.27-.65-.55-.56-.75-.57l-.64-.01Z" />
      </svg>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
