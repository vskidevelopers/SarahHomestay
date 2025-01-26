import TeamsProfileCard from "@/components/TeamsProfileCard";
import React from "react";

const TeamsProfileSection = () => {
  const staffMembers = [
    {
      name: "Sarah Johnson",
      designation: "Senior Developer",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      socialLinks: {
        facebook: "https://facebook.com/sarah",
        twitter: "https://twitter.com/sarah",
        linkedin: "https://linkedin.com/in/sarah",
      },
    },
    {
      name: "Michael Chen",
      designation: "UX Designer",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      socialLinks: {
        facebook: "https://facebook.com/michael",
        twitter: "https://twitter.com/michael",
        linkedin: "https://linkedin.com/in/michael",
      },
    },
    {
      name: "Emma Wilson",
      designation: "Product Manager",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      socialLinks: {
        facebook: "https://facebook.com/emma",
        twitter: "https://twitter.com/emma",
        linkedin: "https://linkedin.com/in/emma",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {staffMembers.map((member, index) => (
            <TeamsProfileCard
              key={index}
              name={member.name}
              designation={member.designation}
              imageUrl={member.imageUrl}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsProfileSection;
