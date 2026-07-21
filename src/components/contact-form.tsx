"use client";

import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");

    if (!email.includes("@")) {
      setState("error");
      return;
    }

    setState("loading");
    window.setTimeout(() => setState("success"), 650);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 border-t border-stone-300 pt-7"
      noValidate
    >
      <div className="grid gap-2">
        <label className="text-sm font-medium text-stone-900" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Merchant Studio"
          className="h-12 rounded-md border border-stone-300 bg-white px-4 text-sm text-stone-950 outline-none transition focus:border-stone-950"
        />
        <p className="text-xs text-stone-500">Company or personal name.</p>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-stone-900" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="growth@brand.com"
          className="h-12 rounded-md border border-stone-300 bg-white px-4 text-sm text-stone-950 outline-none transition focus:border-stone-950"
        />
        <p className="text-xs text-stone-500">Used only to reply to the brief.</p>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-stone-900" htmlFor="brief">
          Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          placeholder="Tell me what needs to sell better."
          rows={4}
          className="resize-none rounded-md border border-stone-300 bg-white px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950"
        />
        <p className="text-xs text-stone-500">
          Storefront, retention, checkout, or analytics work.
        </p>
      </div>
      {state === "loading" ? (
        <div className="h-11 overflow-hidden rounded-md bg-stone-200">
          <div className="h-full w-1/2 animate-shimmer bg-white/70" />
        </div>
      ) : (
        <Button type="submit" className="w-full justify-between">
          Start a project
          <ArrowRight size={17} weight="bold" />
        </Button>
      )}
      {state === "success" ? (
        <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
          <CheckCircle size={18} weight="fill" />
          Brief captured. This demo keeps it local.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="inline-flex items-center gap-2 text-sm font-medium text-rose-700">
          <WarningCircle size={18} weight="fill" />
          Add a valid email before sending.
        </p>
      ) : null}
    </form>
  );
}
