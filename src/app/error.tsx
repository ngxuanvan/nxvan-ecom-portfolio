"use client";

import { AlertCircle } from "lucide-react";

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
        <AlertCircle aria-hidden="true" size={32} strokeWidth={1.8} />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Portfolio chưa tải thành công.
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          Hãy thử tải lại để khôi phục nội dung hiện tại.
        </p>
        <Button className="mt-7" onClick={reset}>
          Tải lại
        </Button>
      </section>
    </main>
  );
}
