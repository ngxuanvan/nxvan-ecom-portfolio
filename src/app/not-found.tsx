import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-[#f7f5f0] px-4 text-stone-950">
      <section className="max-w-lg border-t border-stone-300 pt-8">
        <p className="font-mono text-xs uppercase text-stone-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Đường dẫn này không có trong portfolio.
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          Trang chính đang chứa đầy đủ thông tin giới thiệu, dự án, kỹ năng và
          liên hệ.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">
            <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
            Về trang chính
          </Link>
        </Button>
      </section>
    </main>
  );
}
