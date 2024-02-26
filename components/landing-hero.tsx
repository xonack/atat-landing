"use client"
import { useEffect, useState } from "react"
import TypewriterComponent from "typewriter-effect"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export const LandingHero = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="text-gray-900 font-bold pt-24 sm:pt-36 text-center space-y-5">
            <div className="text-transparent bg-clip-text bg-gradient-to-r
                from-zinc-200 to-[#10344c] pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                space-y-2 font-extrabold">
                <TypewriterComponent 
                    options={{
                        strings: [
                            "We Scale Amazing Minds",
                            "Email Clients for AI",
                            "Synthetic Team Members",
                            "Universal AI Interface",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-10">
                <div className="mx-auto">
                    <img src="https://raw.githubusercontent.com/semanticsean/ATAT/main/static/logos/atat-glyph.png" alt="atat" />
                </div>
                <div className="mt-10">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                    space-y-5 font-extrabold">
                        <h1>
                            Email AI Agents
                        </h1>
                    </div>
                    <div className="text-sm md:text-xl front-light text-gray-700 pt-10">
                    Integrate AI Agents into all Business Functions
                    </div>
                    <div className="flex items-center justify-center space-x-4 pt-10">
                        <div className="text-orange text-xs md:text-sm font-normal">
                        Leverage Intelligence via the Universal Interface of Business:
                        </div>
                        <div>
                            <Link href="https://github.com/semanticsean/ATAT">
                                    <Button variant="default">
                                        GitHub
                                    </Button>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}