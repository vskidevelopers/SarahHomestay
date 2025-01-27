import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex min-w-full gap-4`}
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${
            isPaused ? contentWidth / 4 : 0
          }px)`,
          animation: `scroll-${direction} ${
            contentWidth / speed
          }s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="w-80 p-4 bg-card rounded-lg border border-border shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-foreground">{name}</h3>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm text-muted-foreground">{review}</p>
  </div>
);

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sophia Carter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
      rating: 5,
      review:
        "I stayed in the one-bedroom apartment in Kilimani, and it was perfect! 🏙️ The decor was modern, the bed was so comfy, and I loved how quiet the area was despite being so central. Definitely a 5-star experience! 🌟",
    },
    {
      id: 2,
      name: "Ethan Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ethan",
      rating: 4,
      review:
        "We booked a villa in Nanyuki for a family retreat, and it was absolutely stunning! 🏡✨ The views of Mount Kenya were breathtaking, and the private garden was perfect for our kids to play. I wish the Wi-Fi had been a bit faster, but overall, a wonderful stay! 🌄",
    },
    {
      id: 3,
      name: "Olivia Martin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
      rating: 5,
      review:
        "The studio apartment in Kilimani was just what I needed for a short business trip. 🖥️ It was cozy, clean, and had all the amenities I could ask for. Plus, the check-in process was super smooth. I’d definitely book again! 💼",
    },
    {
      id: 4,
      name: "Liam Walker",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liam",
      rating: 4,
      review:
        "We stayed at the villa in Nanyuki for a weekend getaway, and it was amazing! 🐾🌿 The spacious living area, outdoor BBQ setup, and proximity to nature made it unforgettable. The only downside was that it rained, so we couldn't fully enjoy the pool. Still, I’d recommend it to anyone looking for a peaceful escape! 🌧️🔥",
    },
  ];
  
  

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col gap-8 items-center justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-6">
            What Our Customers Say
          </h2>
          <Marquee direction="left" className="py-4" speed={30}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                avatar={review.avatar}
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
