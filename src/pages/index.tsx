import Head from "next/head";
import Image from "next/image";
import * as gtag from "@/lib/gtag";
import { FormEvent } from "react";
import Link from "next/link";

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
    gtag.event("submit form", {
      action: "submit",
      category: "form",
      label: "contact form",
    });
  };

  return (
    <>
      <Head>
        <title>Next.js + Google Analytics + TypeScript</title>
        <meta
          name="description"
          content="An Example of how to integrate Google Analytics with Next.js and TypeScript"
        />
      </Head>
      <header>
        <nav>
          <Link
            href={"https://optiminastic.com"}
            aria-label="Optiminastic Logo"
          >
            <Image
              src="/optiminastic.png"
              alt="Optiminastic Logo"
              width={200}
              height={46}
            />
          </Link>
        </nav>
      </header>
      <main className="main-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            required
          />
          <button type="submit">Submit Form</button>
        </form>
      </main>
    </>
  );
}
