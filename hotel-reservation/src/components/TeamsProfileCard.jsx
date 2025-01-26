import React from "react";
import { Card } from "../ui/card";
import SocialMediaStrip from "./SocialMediaStrip";

const TeamsProfileCard = ({
  name = "John Doe",
  designation = "Software Engineer",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
}) => {
  return (
    <Card className="w-80 bg-white overflow-visible">
      {/* Top Image Section */}
      <div className="relative pt-8 pb-12 bg-gray-50 rounded-t-lg">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating Social Media Strip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <SocialMediaStrip
          facebookUrl={socialLinks.facebook}
          twitterUrl={socialLinks.twitter}
          linkedinUrl={socialLinks.linkedin}
        />
      </div>

      {/* Bottom Text Section */}
      <div className="px-6 py-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{designation}</p>
      </div>
    </Card>
  );
};

export default TeamsProfileCard;
