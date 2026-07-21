"use client";

import { WarningCircle } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-[#f7f5f0] px-4 text-stone-950">
      <section className="max-w-lg border-t border-stone-300 pt-8">
        <WarningCircle size={32} weight="duotone" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          The portfolio did not load cleanly.
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          Try again and the page will rebuild the view from the current route.
        </p>
        <Button className="mt-7" onClick={reset}>
          Reload page
        </Button>
      </section>
    </main>
  );
}
