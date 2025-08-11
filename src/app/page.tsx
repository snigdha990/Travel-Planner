"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import img1 from '../../public/images/clay-banks-E2XjWOFT-RU-unsplash.jpg'
import { useTheme } from "next-themes";
import {
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const steps = [
  {
    title: "Step 1: Enter Trip Details",
    description:
      "Start by entering your source, destination, travel purpose, budget, and trip duration. Our planner uses this data to tailor your itinerary.",
  },
  {
    title: "Step 2: Generate Itinerary",
    description:
      "Click the 'Create Itinerary' button. Our AI instantly generates a day-by-day travel plan optimized for your preferences and purpose.",
  },
  {
    title: "Step 3: Customize & Adjust",
    description:
      "Manually reorder events, change timings, or swap activities. The planner reflects live route updates and keeps your trip optimized.",
  },
  {
    title: "Step 4: Explore Suggestions",
    description:
      "Get real-time recommendations for flights, stays, and activities that fit your budget. Booking links are integrated right into the itinerary.",
  },
  {
    title: "Step 5: Export & Travel Smart",
    description:
      "Export your plan as a PDF or mobile-friendly view. Access or edit it anytime during your trip for seamless travel experiences.",
  },
];

export default function Home() {
  const { theme } = useTheme();

  return (
   <main className="mx-auto">
   <VantaFog />
            <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
  <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
    <span
      className={cn(
        "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
      )}
      style={{
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "subtract",
        WebkitClipPath: "padding-box",
      }}
    />
    🌍 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
    <AnimatedGradientText className="text-sm font-medium">
      The Ultimate AI Travel Planner — Personalized, Real-Time, Hassle-Free.
    </AnimatedGradientText>
    <ChevronRight
      className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
    />
  </div>

  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
    Instantly Create <AuroraText>Smart Travel</AuroraText> Itineraries Tailored to Your Journey.
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
    From budget-friendly vacations to business trips with leisure time — auto-generate, customize, and update day-by-day travel plans in real-time.
  </p>

  <div className="">
    <Link href={"/plan"}>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start Planning
        </span>
      </ShimmerButton>
    </Link>
  </div>
</section>

 <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left space-y-4">
    <h2 className="text-3xl md:text-5xl font-bold text-primary">
      Smart Travel Planner – Instantly create & customize itineraries tailored to your preferences.
    </h2>
    <p className="text-muted-foreground text-sm md:text-base">
      Personalized day-by-day plans optimized for leisure, business, or adventure – with live updates, editable routes, and export-ready formats.
    </p>
    <Link href="/plan">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Plan Your Trip
        </span>
      </ShimmerButton>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0">
    <Image
      src={img1} // Replace with relevant travel planner image
      alt="Smart Travel Planner Illustration"
      className="w-full max-w-md mx-auto"
    />
  </div>
</section>

<section className="px-4 md:px-36 mt-16">
  <Accordion
    type="single"
    collapsible
    className="w-full"
    defaultValue="item-1"
  >
    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

    <AccordionItem value="item-1">
      <AccordionTrigger>
        1. What does the Smart Travel Planner do?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          It automatically generates customized travel itineraries based on your preferences like source, destination, travel purpose, budget, and duration. You get a detailed day-by-day plan including transport, accommodation, activities, and more—instantly.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        2. How is the itinerary generated?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Our AI analyzes your input and creates a tailored itinerary optimized for your travel style—be it leisure, business, adventure, or family trips—while aligning with your budget and preferences.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        3. Can I edit the itinerary after it&apos;s generated?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes! You can manually edit, reorder, or remove events. The planner also reflects live route and time changes so your updates stay accurate and relevant.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        4. Does it include booking options?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. The planner suggests flights, accommodations, and experiences that match your budget, and integrates live booking links for a seamless experience.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        5. Can I export my itinerary?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. You can export your trip plan as a PDF or view it in mobile-friendly format, so it&apos;s accessible on-the-go—even offline.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        6. Who is this planner for?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Anyone! Whether you&apos;re a family looking for budget travel, a professional with a mixed business-leisure schedule, or a solo traveler craving adventure, the planner adapts to your travel goals.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        7. Is the travel data updated in real time?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. The app pulls live data for transportation, accommodations, and events, so your itinerary reflects the most current and accurate options available.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        8. Do I need to sign up or pay?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You can generate and customize travel itineraries for free. We may introduce premium features like collaborative trip planning or advanced optimization in the future.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>



   </main>
  );
}
