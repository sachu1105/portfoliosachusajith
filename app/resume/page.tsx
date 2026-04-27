import type { Metadata } from "next";
import ResumePageClient from "@/components/ResumePageClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my resume (PDF).",
};

export default function ResumePage() {
  return <ResumePageClient />;
}
