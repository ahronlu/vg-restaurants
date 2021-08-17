const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 24,
      restaurant_name: "Go Falafel",
      chain: null,
      description:
        "Go Falafel incorporates a concept of quality and freshness into its menu; Fresh falafel, juice and salads to meet the demand of healthy fast food.",
      phone_number: "01612286888",
      email: null,
      address: "68 Queen Victoria St, London EC4N 4SJ, UK",
      vegan: true,
      approved: true,
      label_approved: true,
    },
    {
      id: 28,
      restaurant_name: "Jam Delish",
      chain: null,
      description:
        "Vegan Caribbean cuisine serving a vegan twist to traditional Caribbean dishes",
      phone_number: "07957 439777",
      email: "",
      address: "725 Garratt Ln, London SW17 0PD",
      vegan: true,
      approved: true,
      label_approved: true,
    },
    {
      id: 33,
      restaurant_name: "The Gnarbecue",
      chain: null,
      description:
        "100% Vegan fast food with unique homemade Seitan steaks and patties. Big burgers, sarnies, corndogs and loaded fries.",
      phone_number: "07716 427529",
      email: null,
      address: "Unit 68, BOXPARK, 99 George St, London CR0 1LD",
      vegan: true,
      approved: true,
      label_approved: true,
    },
    {
      id: 35,
      restaurant_name: "Cafe Van Gogh",
      chain: null,
      description:
        "Warm, brick-clad & not-for-profit cafe serving hearty vegan cuisine in a relaxed environment",
      phone_number: "07593010566",
      email: null,
      address: "88 Brixton Rd, Vassal, London SW9 6BE",
      vegan: true,
      approved: true,
      label_approved: true,
    },
    {
      id: 47,
      restaurant_name: "Flower Burger",
      chain: null,
      description: "The original rainbow vegan burger.",
      phone_number: "390299257187",
      email: "smile@flowerburger.it",
      address: "43 Charlotte St, Fitzrovia, London W1T 1RS, UK",
      vegan: true,
      approved: true,
      label_approved: false,
    },
    {
      id: 50,
      restaurant_name: "OSU Coconuts",
      chain: null,
      description:
        '"The best pancakes in the world." Vegan coconut pancakes and Caribbean roti wraps.',
      phone_number: "07931 729709",
      email: null,
      address: "1 Sclater St, Poplar, London E1 6HT, UK",
      vegan: true,
      approved: true,
      label_approved: false,
    },
    {
      id: 68,
      restaurant_name: "Marees Sauces And Food",
      chain: null,
      description:
        "Diverse menu providing organic vegan food with Afro-Caribbean flavors.",
      phone_number: "07474 433450",
      email: null,
      address: "91 Whitechapel High St, Shadwell, London E1 7RA, UK",
      vegan: true,
      approved: true,
      label_approved: false,
    },
    {
      id: 86,
      restaurant_name: "Holy Carrot",
      chain: null,
      description:
        "Globally inspired plant based dishes that taste good and feel good.",
      phone_number: "020 3897 0404",
      email: "info@holycarrot.rest",
      address: "2-4 Hans Cres, Knightsbridge, London SW1X 0LH, UK",
      vegan: true,
      approved: true,
      label_approved: false,
    },
  ]);
});

module.exports = router;
