import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/common/components/carousel";
import { Container } from "@/common/components/container";
import { Hero } from "@/common/components/hero";
import { WorkExperienceSection } from "@/common/components/work-experience-section";

export default function Home() {
  return (
    <Hero className="flex min-h-screen px-8 flex-col items-center">
      <Container>
        <div className="w-full flex flex-col gap-24">
          <div className="flex flex-col gap-16 pt-12">
            <Image
              src="/images/shamahdev.png"
              alt="Shaddam Amru Hasibuan"
              width={32}
              height={32}
              priority
            />
            <div className="flex flex-col py-8 gap-2">
              <h1 className="text-[42px] text-neutral-100 font-bold">Shaddam Amru Hasibuan</h1>
              <p className="text-neutral-100 text-2xl font-secondary">
                Frontend Product Engineer{" "}
                <span className="text-neutral-400">— based in Indonesia</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-neutral-100">about me</h2>
              <p className="text-neutral-400 max-w-3xl leading-loose">
                Hey, im Shaddam 👋, also known as Shamah. Love building innovative
                products and learn new blazing fast technologies. I enjoy volunteering as a speaker,
                and mentor to help others grow in their careers.
              </p>
              <Link
                href="https://drive.google.com/file/d/1z-Jsr22Sc1EyFJDuhJV7Td4zxnk96KTQ/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className="text-neutral-100 border border-neutral-100 py-2 px-3 flex w-fit rounded-md text-sm font-semibold items-center justify-center hover:brightness-75 transition-[filter]"
              >
                get a copy of my resume
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[450px]">
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">frontend ✨</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  Frontend development is my specialty and expertise.
                  <br className="mb-4" />I have extensive professional experience and can
                  effectively function as a lead, work with a team, or even operate independently to
                  deliver results quickly.
                </p>
              </div>
            </div>
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">ui ux</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  As i&apos;m passionated at building products, i&apos;m having a decent experience
                  and knowledge with UI & UX Design.
                </p>
                <Link
                  href="https://dribbble.com/shamahdotdev"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  behance
                </Link>
                <Link
                  href="https://www.behance.net/shamahdotdev"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  dribbble
                </Link>
              </div>
            </div>
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">vr/ar</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  On my early career from 2019, I often do side hustling and working on project as a
                  freelance for companies. Im used to work with Unity, Vuforia and Spark AR.
                  <br className="mb-4" />
                  Companies i&apos;ve been work with:
                </p>
              </div>
              <div className="flex flex-wrap w-full gap-4 items-center">
                <div className="relative" style={{ width: 63.5, aspectRatio: 63.5 / 40 }}>
                  <Image
                    src="/images/ar-nestle.png"
                    alt="Nestle"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 66.5, aspectRatio: 66.5 / 40 }}>
                  <Image
                    src="/images/ar-sentral.png"
                    alt="Sentral Tunjungan"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 135, aspectRatio: 135 / 40 }}>
                  <Image
                    src="/images/ar-wyeth.png"
                    alt="Wyeth Nutrition"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-950">brand design</h3>
                <p className="text-sm text-neutral-800 leading-loose">
                  I&apos;ve designed 20+ logo & brand for companies around the world, 3 full brand
                  identity client from logo to stationery and social media design.
                  <br className="mb-4" />
                  Featured brand logo i&apos;ve made:
                </p>
              </div>
              <div className="flex flex-wrap w-full gap-4 items-center">
                <div className="relative" style={{ width: 96, aspectRatio: 96 / 24 }}>
                  <Image
                    src="/images/work-smeshub.png"
                    alt="Smeshub"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 106, aspectRatio: 106 / 40 }}>
                  <Image
                    src="/images/brand-mantenkuh.png"
                    alt="Mantenkuh"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 58.5, aspectRatio: 58.5 / 40 }}>
                  <Image
                    src="/images/brand-siomay.png"
                    alt="Somay Lonjong"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 114.5, aspectRatio: 114.5 / 40 }}>
                  <Image
                    src="/images/brand-printingmart.png"
                    alt="printingmart"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div className="relative" style={{ width: 70, aspectRatio: 70 / 40 }}>
                  <Image
                    src="/images/brand-artire.png"
                    alt="Smeshub"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <WorkExperienceSection />
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">selected projects</h2>
            <Carousel />
          </div>
        </div>
      </Container>

      <Container>
        <footer className="w-full flex flex-col gap-4 py-24">
          <p className="font-bold text-xl text-neutral-100">hello@shamah.dev</p>
          <p className="text-sm text-neutral-400 leading-loose max-w-3xl">
            Open for new opportunity and project-based works, Feel free to inbox me whether you have
            a question or just want to say hi!
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/shamahdev/"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              linkedin
            </Link>
            <Link
              href="https://github.com/shamahdev"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              github
            </Link>
            <Link
              href="https://x.com/shamahdev"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />x
            </Link>
          </div>
        </footer>
      </Container>
    </Hero>
  );
}
