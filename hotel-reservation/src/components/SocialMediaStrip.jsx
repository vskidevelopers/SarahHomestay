import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SocialMediaStrip = ({
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
}) => {
  return (
    <div className="bg-white w-full h-10 flex items-center justify-center gap-6 shadow-md rounded-full px-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialMediaStrip;
