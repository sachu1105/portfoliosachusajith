"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ResumePdfViewer = dynamic(() => import("@/components/ResumePdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto flex min-h-[min(70vh,48rem)] w-full max-w-5xl items-center justify-center px-4 pt-24 md:pt-28">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading resume…</p>
    </div>
  ),
});

export default function ResumePageClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const mobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    const shouldOpenPdfDirectly = mobileViewport || mobileUserAgent;

    setIsMobile(shouldOpenPdfDirectly);

    if (shouldOpenPdfDirectly) {
      window.location.replace("/resume.pdf");
    }
  }, []);

  if (isMobile) {
    return (
      <div className="mx-auto flex min-h-[50vh] w-full max-w-5xl items-center justify-center px-4 pt-24 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Opening resume in your browser...
        </p>
      </div>
    );
  }

  return <ResumePdfViewer />;
}
