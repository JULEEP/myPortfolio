import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://github.com/JULEEP" className="hover:text-primary">
                <GitHubLogoIcon className="h-4 w-4" />
            </Link>
            <Link href="www.linkedin.com/in/julee-perween" className="hover:text-primary">
                <FaLinkedin className="h-4 w-4" />
            </Link>
        </div>
    );
}
