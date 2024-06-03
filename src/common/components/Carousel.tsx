"use client";

import {
  DotButton,
  useDotButton,
} from "@/common/components/CarouselDotButtons";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function ProjectCard({
  title,
  description,
  year,
  icons,
  url,
}: {
  title: string;
  description: string;
  year: string;
  icons?: string[];
  url: string;
}) {
  return (
    <div className="bg-neutral-[#131313] hover:bg-neutral-950 transition-colors border border-neutral-900 rounded-3xl py-6 px-8 flex flex-col justify-between w-full select-none">
      <div className="flex flex-col gap-3">
        <Link
          href={url}
          className="font-semibold text-neutral-100 flex w-full justify-between items-center"
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
          <ExternalLinkIcon width={16} />
        </Link>
        <p className="text-sm text-neutral-400 leading-loose">{description}</p>
        <p className="text-xs text-neutral-500">{year}</p>
        <div className="flex gap-4 py-2">
          {icons?.map((icon) => (
            <Image
              key={icon}
              src={icon}
              alt=""
              width={icon === "/images/icon/ic-midtrans.png" ? 72 : 20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-4 cursor-grab">
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="localvocal"
            description="Localvocal is a local brand e-commerce site made with Medusa and Next.js"
            year="2023"
            url="https://github.com/localvocalid"
            icons={[
              "/images/icon/ic-medusa.png",
              "/images/icon/ic-nextjs.png",
              "/images/icon/ic-react.png",
              "/images/icon/ic-tailwind.png",
              "/images/icon/ic-postgres.png",
              "/images/icon/ic-digitalocean.png",
            ]}
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="dokter rasa"
            description="Yet another restaurant list progressive web app with review and bookmark feature."
            year="2021"
            url="https://dokterrasa.web.app/"
            icons={[
              "/images/icon/ic-webpack.png",
              "/images/icon/ic-pwa.png",
              "/images/icon/ic-sass.png",
              "/images/icon/ic-jasmine.png",
              "/images/icon/ic-karma.png",
            ]}
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="celenganku"
            description="Students finance management or money saving progressive web app."
            year="2021"
            url="https://github.com/shamahdev/celenganku"
            icons={[
              "/images/icon/ic-firebase.png",
              "/images/icon/ic-webpack.png",
              "/images/icon/ic-pwa.png",
              "/images/icon/ic-tailwind.png",
              "/images/icon/ic-midtrans.png",
            ]}
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="dokter kimo"
            description="Game-based learning mobile app for Kihajar Mobile App Competition 2020.."
            year="2020"
            url="https://github.com/shamahdev/dokter-kimo"
            icons={[
              "/images/icon/ic-unity.png",
              "/images/icon/ic-csharp.png",
              "/images/icon/ic-animate.png",
            ]}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-8">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              "w-2 h-2 rounded-full bg-neutral-50",
              index === selectedIndex ? "opacity-100" : "opacity-50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
