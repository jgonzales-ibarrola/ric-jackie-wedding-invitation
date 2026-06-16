export interface TimelineMilestone {
  time: string;
  title: string;
  description: string;
  image: string;
}

export interface SponsorPair {
	ninong: string;
	ninang: string;
}

export const PLAYLIST = [
	"Beautiful in white - Mild Nawin",
	"Tahanan - Wedding Version - El Manu & Jessy Kang",
	"Can’t help Falling in Love - Mild Nawin",
	"A thousand years – Henry",
	"This Will Be (An Everlasting Love) - Natalie Cole",
	"WALONG BILYON (Wedding Version) - TJ Monterde",
	"Ikaw at Ako - TJ Monterde",
	"Thinking Out Loud - Mild Nawin",
	"I Choose You {The Wedding Song} - Ryann Darling",
	"Count on Me - Mild Nawin",
	"24/7, 365 - Elijah Woods",
	"Perfect - Mild Nawin",
	"You are the reason - Mild Nawin",
	"Valentine - Mild Nawin",
];

export const COLORS = [
	{ name: "Blush Pink", hex: "#E8C5C8", text: "text-[#E8C5C8]" },
	{ name: "Antique Rose", hex: "#B78A8F", text: "text-[#B78A8F]" },
	{ name: "Champagne Beige", hex: "#E5D3B3", text: "text-[#E5D3B3]" },
	{ name: "Sage Green", hex: "#9CAF88", text: "text-[#9CAF88]" },
	{ name: "Muted Taupe", hex: "#8A7968", text: "text-[#8A7968]" },
];

export const PREMIUM_COLORS = [
  { name: "Vibrant Sage", hex: "#4A6B53", bg: "bg-[#4A6B53]", text: "text-[#4A6B53]" },
  { name: "Radiant Gold", hex: "#D4AF37", bg: "bg-[#D4AF37]", text: "text-[#D4AF37]" },
  { name: "Velvet Rose", hex: "#9E4751", bg: "bg-[#9E4751]", text: "text-[#9E4751]" },
  { name: "Warm Champagne", hex: "#F3E5AB", bg: "bg-[#F3E5AB]", text: "text-[#F3E5AB]" },
  { name: "Deep Espresso", hex: "#2E2522", bg: "bg-[#2E2522]", text: "text-[#2E2522]" }
];

export const EXACT_TIMELINE: TimelineMilestone[] = [
  {
    time: "2:00 PM",
    title: "The Ceremony",
    description: "The exchange of sacred vows, the walk down the aisle, and the beginning of our forever covenant.",
    image: "/images/the-ceremony.jpg"
  },
  {
    time: "3:00 PM",
    title: "Portraits",
    description: "Capturing timeless memories with our cherished families, entourage, and loved ones.",
    image: "/images/portraits-family.jpg"
  },
  {
    time: "4:00 PM",
    title: "Cocktail Hour",
    description: "Mingle and enjoy a premium grazing table, signature drinks, and beautiful acoustic melodies.",
    image: "/images/cocktail-hour.jpg"
  },
  {
    time: "5:30 PM",
    title: "The Banquet",
    description: "Gathering in the grand hall for a curated dining experience, heartfelt toasts, and shared joy.",
    image: "/images/the-banquet.jpg"
  },
  {
    time: "7:00 PM",
    title: "The First Dance",
    description: "Our initial moments in the spotlight as husband and wife, followed by traditional celebrations.",
    image: "/images/the-firstdance.jpg"
  },
  {
    time: "8:00 PM",
    title: "The Revelry",
    description: "Opening up the dance floor! Let's toast, celebrate, and dance the night away.",
    image: "/images/the-revelry.jpg"
  }
];

export const ENTOURAGE = {
	couple: {
		bride: "JACKIE I. GONZALES",
		groom: "RIC A. EBALE",
		hashtag: "#FromGlazeToGrace 🍩",
	},
	brideParents: {
		mother: "TRINIDAD I. GONZALES",
		father: "EMETERIO P. GONZALES",
	},
	groomParents: { mother: "ROSENDA A. EBALE", father: "RICARDO P. EBALE" },
	leaders: {
		bestMan: "JOJO G. VILLAMOR",
		maidOfHonor: "JANELLE I. GONZALES",
	},
	groomsmen: [
		"MARK ANGELO EBALE",
		"AARON BASILIO",
		"PATRICK CHATO",
		"ERNEST JOSEPH LAGASCA",
		"TERENCE MENDIOLA",
		"HILTON ACE TUVILLA",
	],
	bridesmaids: [
		"LISSE MAE QUEBRADO",
		"SHAIRA MAGIN BUCTIL-BLANCO",
		"HABELLE GONZALES",
		"JECELLE C. OABEL",
		"LOLITA 'LYTZ' OSAL",
		"SHEILA MAE CAAGBAY",
	],
	sponsors: {
		candle: {
			male: "JOSHUA I. GONZALES",
			female: "TREISHA LALAINE 'AYEN' JAGOBA",
		},
		veil: { male: "JOHN WILLIAM AQUINO", female: "JIANAFEL S. ABSULIO" },
		cord: {
			male: "ROBERT CHITO VILLAVERDE",
			female: "KRIZZA ANN VILLENAS-OBLEA",
		},
	},
	children: {
		ringBearer: "ADRIEL P. CHATO (4-7 yrs old)",
		coinBearer: "ZACHARY MITCHEL S. CADA (5-8 yrs old)",
		bibleBearer: "MARC AERON I. FALLER (7-12 yrs old)",
		flowerGirls: [
			"ZOEY ABARICIA",
			"STYLINA FAYE I. CAAGBAY",
			"WILLEMHYNA AQUINO",
		],
	},
	principalSponsors: [
		{
			ninong: "1. REV. RICHARD NILLO",
			ninang: "1. MRS. ROJEAN ANN F. NILLO",
		},
		{
			ninong: "2. MR. GREGORIO GONZALES",
			ninang: "2. MRS. ELLA CARANDANG MALABANAN",
		},
		{
			ninong: "3. MR. MICHAEL ANGELO SAMBAS",
			ninang: "3. MRS. MARIE DELACRUZ",
		},
		{
			ninong: "4. RET. BG. CHRISTOPHER C. ESTELLA",
			ninang: "4. DR. FE AMIE B. ESTELLA",
		},
		{ ninong: "5. MR. JOSE JIMENEZ, JR.", ninang: "5. MRS. PATRILLA TABI" },
		{ ninong: "6. MR. ROMMEL BAUTISTA", ninang: "6. MRS. RAINE BAUTISTA" },
		{
			ninong: "7. MR. BRIAN MELLIZA",
			ninang: "7. JUDGE CHARITY GRACE RICO",
		},
		{
			ninong: "8. MR. JOSE ANGELITO NADAL",
			ninang: "8. MRS. OLIVIA NADAL",
		},
		{
			ninong: "9. MR. LAWRENCE CHARLIE IBARROLA",
			ninang: "9. MRS. ELENA ALAGAO LIM",
		},
		{
			ninong: "10. MR. GAMBHIE C. GAMBON",
			ninang: "10. MRS. SHIRLEY S. GAMBON",
		},
		{ ninong: "11. MR. JOHANES BALMEO", ninang: "11. MS. LEOPISTA GAELA" },
		{
			ninong: "12. ENGR. GODOFREDO AMION",
			ninang: "12. MRS. ANALYN AMION",
		},
	],
};

