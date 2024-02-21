import { Button } from "@/components/ui/button"
import Link from "next/link"

export const LandingFooter = () => {
  return (
    <div className="flex-column text-black">
        <div className="flex justify-center space-x-2 items-center">
            <div>
                <Link href="/terms">
                        Terms
                </Link>
            </div>
            <div>{` • `}</div>
            <div>
                <Link href="/privacy">
                        Privacy
                </Link>
            </div>
        </div>
        <div className="flex justify-center">
            <p>
                {`© 2024 Semantic Life - All rights reserved.`}
            </p>
        </div>
        <div className="flex justify-center">
            <p>
                {`@@™. The terms "Synthetic Time Travel", "ATAT", "@@" are all property of Semantic Life.`}
            </p>
        </div>
    </div>
  )
}