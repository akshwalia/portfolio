"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechIcon({ src, alt, delay, className = "" }) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="bubble rounded-full bg-primary-green w-12 sm:w-28 h-12 sm:h-28 flex flex-col items-center justify-center"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay }}
          >
            <Image
              src={src}
              width={70}
              height={70}
              alt={alt}
              className={`w-[27px] sm:w-[70px] ${className}`}
            />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-white/80 text-xs z-50 text-primary-green border-2 border-primary-green rounded-full font-bold">
          <p>{alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
