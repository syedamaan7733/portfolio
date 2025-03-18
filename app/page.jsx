import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

// component
import Social from "@/components/Social";
function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Content */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Syed Amaan Ali</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experinces and I am proficient
              in various frameworks, programminng languages and technologies.
            </p>

            {/* Buttons and Solical */}
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle={"flex gap-6"} iconStyle={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
              </div>
            </div>
          </div>

          {/* Picture */}
          <div>pic</div>
        </div>
      </div>
    </section>
  );
}

export default page;
