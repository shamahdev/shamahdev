"use client";

import {
  DotButton,
  useDotButton,
} from "@/common/components/CarouselDotButtons";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect } from "react";

function ProjectCard({
  title,
  description,
  year,
}: {
  title: string;
  description: string;
  year: string;
}) {
  return (
    <div className="bg-neutral-950 border border-neutral-900 rounded-3xl py-6 px-8 flex flex-col justify-between w-full select-none">
      <div className="flex flex-col gap-3">
        <Link href="#" className="font-semibold text-neutral-100">
          {title}
        </Link>
        <p className="text-sm text-neutral-400 leading-loose">{description}</p>
        <p className="text-xs text-neutral-500">{year}</p>
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
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="dokter rasa"
            description="Yet another restaurant list progressive web app with review and bookmark feature."
            year="2021"
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="celenganku"
            description="Students finance management or money saving progressive web app."
            year="2021"
          />
        </div>
        <div className="embla__slide flex-[0_0_33%] min-w-0">
          <ProjectCard
            title="dokter kimo"
            description="Game-based learning mobile app for Kihajar Mobile App Competition 2020.."
            year="2020"
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
