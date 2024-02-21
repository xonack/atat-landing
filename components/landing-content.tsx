"use client"
import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
    {
        benefit: "Frictionless Integration",
        description: "Leverage the global adoption of email to power AI integration into your business",
    },
    {
        benefit: "Y",
        description: "YYY",
    },
    {
        benefit: "Z",
        description: "ZZZ",
    },
]

export const LandingContent = () => {  
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    } 
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-gray-700 font-extrabold mt-20 mb-10 text-4xl">
                Use ATAT for:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3
                    lg:grid-cols-3 gap-4">
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.description} className="bg-black border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex text-orange-500 items-center gap-x-2">
                                <div>
                                    <p className="text-lg">
                                      {testimonial.benefit}  
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {testimonial.description}
                            </CardContent>                        
                        </CardHeader>
                    </Card>
                  ))
                }  
            </div>
            <div className="flex items-center justify-center gap-x-2 pt-20">
                <Link href="https://github.com/C0deMunk33/bespoke_automata">
                    <Button variant="default" className="rounded-full">
                        GitHub
                    </Button>
                </Link>
                <Link href="https://discord.gg/NHFMcsh8pJ">
                    <Button variant="default" className="rounded-full">
                        Discord
                    </Button>
                </Link>
                <Link href="https://twitter.com/icodeagents">
                    <Button variant="default" className="rounded-full">
                        X
                    </Button>
                </Link>
            </div>
        </div>
    )
}
