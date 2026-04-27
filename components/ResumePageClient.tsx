"use client";

import dynamic from "next/dynamic";

const ResumePdfViewer = dynamic(() => import("@/components/ResumePdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto flex min-h-[min(70vh,48rem)] w-full max-w-5xl items-center justify-center px-4 pt-24 md:pt-28">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading resume…</p>
    </div>
  ),
});

export default function ResumePageClient() {
  return <ResumePdfViewer />;
}
