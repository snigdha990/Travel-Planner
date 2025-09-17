"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { type StaticImageData } from "next/image";
import ReactMarkdown from "react-markdown";

import img1 from '../../../public/images/Peyto-Lake-Banff-National-Park.jpeg'
import img2 from '../../../public/images/The-Most-Beautiful-Places-to-Visit-in-Santorini-Greece.webp'
import img3 from '../../../public/images/bali-1-1679062958.profileImage.2x-1536x884.webp'
import img4 from '../../../public/images/dcjuwqdnlt67agkcfbme.webp'
import img5 from '../../../public/images/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'
import img6 from '../../../public/images/yasaka-pagoda-higashiyama-kyoto-japan.jpg'



const reviews = [
    {
        name: "Santorini, Greece",
        body: "A romantic sunset over whitewashed buildings and blue domes.",
        img: img2, // Replace with actual travel photo URLs
    },
    {
        name: "Kyoto, Japan",
        body: "Ancient temples surrounded by cherry blossoms in spring.",
        img: img6,
    },
    {
        name: "Banff, Canada",
        body: "Turquoise lakes and towering mountains in the heart of nature.",
        img: img1,
    },
    {
        name: "Cappadocia, Turkey",
        body: "Hot air balloons drifting over unique rock formations.",
        img: img4,
    },
    {
        name: "Bali, Indonesia",
        body: "Lush rice terraces and vibrant beach life.",
        img: img3,
    },
    {
        name: "Paris, France",
        body: "Iconic Eiffel Tower and charming streets filled with art.",
        img: img5,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: StaticImageData;
  name: string;
  body: string;
}) => {
  return (
    <div className="relative w-64 h-40 overflow-hidden rounded-xl shadow-lg group">
      <Image
  src={img}
  alt={name}
  fill
  sizes="256px"
  priority
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/80">{body}</p>
      </div>
    </div>
  );
};


interface Itinerary {
    day: string;
    activities: string[];
}

export default function TravelPlannerPage() {
    const [form, setForm] = useState({
        origin: "",
        cities: "",
        date_range: "",
        interests: "",
        accommodation_budget: "",
        dietary_preferences: "",
        food_budget: "",
    });

    // const [itinerary, setItinerary] = useState<Itinerary[] | null>(null);
    const [itinerary, setItinerary] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        setItinerary(null);

        try {
            const response = await axios.post(
                "https://ai-travel-planner-977121587860.europe-west1.run.app/generate-travel-plan",
                form
            );
            console.log("API RESPONSE:", response.data);
            setItinerary(response.data.itinerary);
        } catch (err) {
            setError(
                "Failed to generate itinerary. Please check inputs or try again later."
            );
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <VantaFog />
            <div className=" mx-auto px-4 md:px-36  mt-10 space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary text-center">
                    <AuroraText>Smart Travel Planner</AuroraText>
                </h1>
                <p className="text-center text-muted-foreground text-lg">
                    Instantly create customized itineraries tailored to your
                    budget, purpose, and preferences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <input
                        name="origin"
                        placeholder="Origin (e.g. Bangalore, India)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <input
                        name="cities"
                        placeholder="Destination (e.g. Delhi, India)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <input
                        name="date_range"
                        placeholder="Date Range (e.g. 2025-06-26 to 2025-07-02)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <input
                        name="interests"
                        placeholder="Interests (e.g. Street food, Culture)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <input
                        name="accommodation_budget"
                        placeholder="Accommodation Budget (e.g. 1000 INR/night)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <input
                        name="food_budget"
                        placeholder="Food Budget (e.g. 500 INR/day)"
                        onChange={handleChange}
                        className="p-4 border rounded-md"
                    />
                    <textarea
                        name="dietary_preferences"
                        placeholder="Dietary Preferences"
                        onChange={handleChange}
                        className="p-4 border rounded-md col-span-full"
                    />
                </div>

                <RainbowButton
                    variant="outline"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Planning..." : "Generate My Itinerary"}
                </RainbowButton>

                {error && <p className="text-red-500 font-medium">{error}</p>}

                {/* {itinerary && (
                    <div className="mt-10 space-y-6">
                        <h2 className="text-2xl font-semibold">
                            🗺️ Your Day-by-Day Itinerary
                        </h2>
                        {itinerary.map((dayPlan, index) => (
                            <div
                                key={index}
                                className="border rounded p-4 bg-white shadow-sm"
                            >
                                <h3 className="font-bold text-lg">
                                    {dayPlan.day}
                                </h3>
                                <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                    {dayPlan.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )} */}
                {itinerary && (
                <div className="mt-10 space-y-6">
                    <h2 className="text-2xl font-semibold">🗺️ Your Day-by-Day Itinerary</h2>
                    <div className="prose prose-lg max-w-none">
                    <ReactMarkdown>{itinerary}</ReactMarkdown>
                    </div>
                </div>
                )}
            </div>

            <section className="px-4 mt-20 md:px-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review, i) => (
                        <ReviewCard key={i} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review, i) => (
                        <ReviewCard key={i} {...review} />
                    ))}
                </Marquee>
                
            </div>
            </section>
        </div>
    );
}
