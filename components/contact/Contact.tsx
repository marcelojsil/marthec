"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact1() {
  return (
    <section
      id="contato"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}