import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaHtml5, FaReact, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiAppwrite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
    return (
        <div className="py-10 -mt-5 mb-10 px-5">
            <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <TbBrandNextjs className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiJavascript className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaHtml5 className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <IoLogoCss3 className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiTailwindcss className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <DiNodejs className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaReact className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <DiMongodb className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaDocker className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiAppwrite className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <TbBrandReactNative className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaAws className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaDatabase className="h-10 w-10" />
                </div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiTypescript className="h-10 w-10" />
                </div>
            </div>
        </div>
    )
}
