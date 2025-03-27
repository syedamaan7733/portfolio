"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image
            src="/assets/work/Amaan-ggpng"
            className="object-contain"
            priority
            fill
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}
