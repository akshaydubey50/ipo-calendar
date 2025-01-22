"use client"

import { Check } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"

interface TimelineStep {
    title: string
    date: string
    step: number
}

interface TimelineProps {
    steps: TimelineStep[]
    initialStep?: number
}

export default function Timeline({ steps, initialStep = 1 }: TimelineProps) {
    const [currentStep, setCurrentStep] = useState(initialStep)

    const handleStepClick = (stepNumber: number) => {
        setCurrentStep(stepNumber)
    }

    const isCompleted = (step: number) => {
        return step <= currentStep
    }

    return (
        <div >

            <div className="hidden md:flex items-center justify-between relative mb-8">
                <div className="absolute left-0 right-0 top-5 h-[2px] bg-gray-200" />
                {steps.map((step) => (
                    <div
                        key={step.step}
                        className="relative flex flex-col items-center z-10 cursor-pointer"
                        onClick={() => handleStepClick(step.step)}
                    >
                        <div
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                isCompleted(step.step) ? "bg-[#22C55E]" : "bg-gray-200",
                            )}
                        >
                            {isCompleted(step.step) && <Check className="w-5 h-5 text-white" />}
                        </div>
                        <p className="mt-2 text-sm font-medium">{step.title}</p>
                        <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                ))}
            </div>

            <div className="md:hidden space-y-4 relative">
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

                {steps.map((step) => (
                    <div
                        key={step.step}
                        className="flex relative items-start gap-4 z-10 cursor-pointer"
                        onClick={() => handleStepClick(step.step)}
                    >
                        <div
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                isCompleted(step.step) ? "bg-[#22C55E]" : "bg-gray-200",
                            )}
                        >
                            {isCompleted(step.step) && <Check className="w-5 h-5 text-white" />}
                        </div>
                        <div>
                            <p className="text-sm font-medium">{step.title}</p>
                            <p className="text-xs text-gray-500">{step.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

