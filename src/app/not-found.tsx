import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-[#f7f5f0] px-4 text-stone-950">
      <section className="max-w-lg border-t border-stone-300 pt-8">
        <p className="font-mono text-xs uppercase text-stone-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          This route is not in the portfolio.
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          The homepage has the current case studies, services, and contact form.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">
            <ArrowLeft size={17} weight="bold" />
            Back home
          </Link>
        </Button>
      </section>
    </main>
  );
}
