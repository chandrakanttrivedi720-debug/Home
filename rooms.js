// =====================================================
//  ROOMS CONFIG — Edit karo yahan se availability
//  true  = Room KHALI hai (Available)
//  false = Room BHARI hai (Not Available)
// =====================================================

const ROOMS_CONFIG = {

  room1: {
    available: false,          // <-- true ya false karo
    name: "1 Room + Kitchen + Bathroom",
    type: "Type A – 1BHK",
    price: 3000,
    floor: "Ground Floor",
    description: "Spacious front-facing room with a fully separate kitchen and a private bathroom — perfect for a single person or couple who wants complete independence and privacy.",
    features: [
      { icon: "🛏️", text: "1 Separate Room (~150 sq ft)" },
      { icon: "🍳", text: "Separate Kitchen" },
      { icon: "🚿", text: "Private Bathroom" },
      { icon: "🪟", text: "Front-Facing (Street View)" },
      { icon: "🔒", text: "Independent Flat" },
      { icon: "💡", text: "Electricity Extra" }
    ],
    meta: ["🏢 Ground Floor", "📦 Unfurnished", "🗓️ Long Term"],
    whatsappMsg: "Hello! I am interested in the 1BHK room (Type A) at ₹3000/month."
  },

  room2: {
    available: true,           // <-- true ya false karo
    name: "2 Rooms + Kitchen + Bathroom",
    type: "Type B – 2 Rooms ✨ Featured",
    price: 4700 ,
    floor: "1st Floor",
    description: "Two-room flat on the first floor — one big main room and one smaller room with an integrated kitchen. Separate private bathroom. Great for a small family. (negotiable available)",
    features: [
      { icon: "🛏️", text: "Big Room (~150 sq ft)" },
      { icon: "🛋️", text: "Small Room + Kitchen (integrated)" },
      { icon: "🚿", text: "Separate Bathroom" },
      { icon: "🏢", text: "First Floor" },
      { icon: "🔒", text: "Independent Flat" },
      { icon: "💡", text: "Electricity Extra" }
    ],
    meta: ["🏢 1st Floor", "📦 Unfurnished", "🗓️ Long Term"],
    whatsappMsg: "Hello! I am interested in the 2-Room flat (Type B) at ₹4000/month. Is it still available?"
  }

};
