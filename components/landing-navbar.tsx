"use client"
import { useEffect, useState } from "react";

import Image from "next/image" 
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const LandingNavbar = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                <Link 
                    href="/"
                    className="flex items-center"
                    >
                        <div className="relative h-11 w-60 mr-4 bg-orange">
                            <Link href="/">
                                <Image 
                                    className="rounded-md"
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                />
                            </Link>
                        </div>
                        {/* <h1 className={cn("text-2xl font-bold text-white", font.className)}>Vaut</h1> */}
                </Link>
                <div className="flex gap-x-2 gap-2 pt-10 sm:pt-0">
                    <Link href="https://syntheticstartupstaff.com/">
                        <Button variant="default" className="rounded-full">
                            Demo
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}