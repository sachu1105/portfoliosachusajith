"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

import { Download, ExternalLink, FileWarning } from "lucide-react";

const PDF_PATH = "/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const documentOptions = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export default function ResumePdfViewer() {
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(720);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(PDF_PATH, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setPdfExists(res.ok);
      })
      .catch(() => {
        if (!cancelled) setPdfExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setPageWidth(Math.floor(w));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [pdfExists]);

  const onDocumentLoadSuccess = useCallback(({ numPages: nextNumPages }: { numPages: number }) => {
    setNumPages(nextNumPages);
  }, []);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-24 md:pt-28">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            Resume
          </h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            View online or download a copy.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={PDF_PATH}
            download="resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            Download PDF
          </a>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            Open in new tab
          </a>
        </div>
      </div>

      {pdfExists === null && (
        <div
          className="flex min-h-[min(70vh,48rem)] items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/50"
          aria-busy="true"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading preview…</p>
        </div>
      )}

      {pdfExists === false && (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-900/50 dark:bg-amber-950/30">
          <FileWarning className="h-10 w-10 text-amber-700 dark:text-amber-400" aria-hidden />
          <div className="max-w-md space-y-2">
            <p className="font-medium text-neutral-900 dark:text-white">No resume PDF found yet</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Add your file to the project as{" "}
              <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-xs dark:bg-neutral-800">
                public/resume.pdf
              </code>{" "}
              (exact name). Refresh this page and the preview will appear here.
            </p>
          </div>
        </div>
      )}

      {pdfExists === true && (
        <div className="rounded-2xl  ">
          <div className="p-4 md:p-6">
            <div ref={measureRef} className="mx-auto w-full max-w-3xl">
              <Document
                file={PDF_PATH}
                options={documentOptions}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <p className="py-16 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Rendering PDF…
                  </p>
                }
                error={
                  <p className="py-16 text-center text-sm text-red-600 dark:text-red-400">
                    Could not display this PDF. Try &quot;Open in new tab&quot; or download.
                  </p>
                }
              >
                <div className="flex flex-col gap-6">
                  {Array.from({ length: numPages }, (_, i) => (
                    <div
                      key={i + 1}
                      className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-neutral-200/80 dark:ring-neutral-700"
                    >
                      <Page
                        pageNumber={i + 1}
                        width={pageWidth}
                        renderTextLayer
                        renderAnnotationLayer={false}
                        className="[&_.react-pdf\_\_Page\_\_canvas]:mx-auto [&_.react-pdf\_\_Page\_\_canvas]:block"
                      />
                    </div>
                  ))}
                </div>
              </Document>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
