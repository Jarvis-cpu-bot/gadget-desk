import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { RecentVerdicts } from "@/components/RecentVerdicts";
import { SpecMethod } from "@/components/SpecMethod";
import { EmailPreview } from "@/components/EmailPreview";
import { Testimonials } from "@/components/Testimonials";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RecentVerdicts />
        <SpecMethod />
        <EmailPreview />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
