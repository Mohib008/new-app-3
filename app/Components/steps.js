"use client";

import { Button } from '@/components/ui/button';
import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useCallback, useState } from 'react';

const messages = [
  "Learn React",
  "Apply for Job",
  "Invest for new income?",
];

export default function Home() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
   if (step > 1) setStep(step - 1);
  };
  function handleNext() {
    if (step < 3) setStep(step + 1); 
  };
    return (
        <div className="flex flex-col items-center justify-center gap-y-40 bg-stone-200 text-black shadow-lg">
          <div className="flex flex-col-3 items-center justify-center gap-x-60 p-8">
          <Avatar>
            <AvatarImage alt="@shadcn" />
            <AvatarFallback><div className={step >= 1 ? "active" : ""}>1</div></AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage alt="@shadcn" />
            <AvatarFallback><div className={step >= 2 ? "active" : ""}>2</div></AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage alt="@shadcn" />
            <AvatarFallback><div className={step >= 3 ? "active" : ""}>3</div></AvatarFallback>
          </Avatar>
          </div>
          <p className="font-bold text-blue-500"> Step {step}: {messages[step-1]} </p>
          <div className="flex flex-row items-center justify-center gap-x-60 p-8">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
    )
}