const games = [
  {
    title: "7 Wonders",
    link: "https://boardgamegeek.com/boardgame/68448/7-wonders",
    image: "https://cf.geekdo-images.com/thumb/img/Grz-qM9xwxlvQGK7B-MiljtO9pQ=/fit-in/200x150/pic860217.jpg"
  },
  {
    title: "Castle Panic",
    link: "https://boardgamegeek.com/boardgame/43443/castle-panic",
    image: "https://cf.geekdo-images.com/itemrep/img/-R08U6Aeo0vBF8IapvOsQCzmKgI=/fit-in/246x300/pic496923.jpg"
  },
  {
    title: "Dawn of the Zeds (Third Edition)",
    link: "https://boardgamegeek.com/boardgame/175095/dawn-zeds-third-edition",
    image: "https://cf.geekdo-images.com/itemrep/img/5uk7-LfdLn2nRbZFgrMYYl8BOZ8=/fit-in/246x300/pic2453079.jpg"
  },
  {
    title: "Munchkin Deluxe",
    link: "https://boardgamegeek.com/boardgame/1927/munchkin",
    image: "https://cf.geekdo-images.com/itemrep/img/kPfLihonl0sXH47uh6fvXlJCQvQ=/fit-in/246x300/pic1871016.jpg"
  },
  {
    title: "King of Tokyo",
    link: "https://boardgamegeek.com/boardgame/70323/king-tokyo",
    image: "https://cf.geekdo-images.com/itemrep/img/wOXROwYuEDNoDY6LhhUPGETrSnM=/fit-in/246x300/pic3043734.jpg"
  },
  {
    title: "Takenoko",
    link: "https://boardgamegeek.com/boardgame/70919/takenoko",
    image: "https://cf.geekdo-images.com/itemrep/img/DGncmXwZ0_s3BCzsUi9AXdX2Tdk=/fit-in/246x300/pic1912529.jpg"
  },
  {
    title: "Tsuro of the Seas",
    link: "https://boardgamegeek.com/boardgame/124172/tsuro-seas",
    image: "https://cf.geekdo-images.com/itemrep/img/rhuXwuozq_RxGqmMOeqNutmkqyg=/fit-in/246x300/pic1301853.jpg"
  },
  {
    title: "Munchkin: Adventure Time",
    link: "https://boardgamegeek.com/boardgame/146735/munchkin-adventure-time",
    image: "https://cf.geekdo-images.com/itemrep/img/7kqVtIg9UFk-IIdFhHPU4I8Fz70=/fit-in/246x300/pic2020343.jpg"
  },
  {
    title: "Rick and Morty: Mr. Meeseeks' Box o' Fun Dice and Dares Game",
    link: "https://boardgamegeek.com/boardgame/194228/rick-and-morty-mr-meeseeks-box-o-fun-dice-and-dare",
    image: "https://cf.geekdo-images.com/itemrep/img/qMbnCfkHpWcsHOAFSyodRzNLXdM=/fit-in/246x300/pic3056810.png"
  },
  {
    title: "Blokus",
    link: "https://boardgamegeek.com/boardgame/2453/blokus",
    image: "https://cf.geekdo-images.com/itemrep/img/rQJ2f8rlN5dCYYyBFl0o4EwlGvU=/fit-in/246x300/pic2197702.jpg"
  },
  {
    title: "Jaipur",
    link: "https://boardgamegeek.com/boardgame/54043/jaipur",
    image: "https://cf.geekdo-images.com/itemrep/img/Q6ENW-VtBFWhypRh3zu_9WMu478=/fit-in/246x300/pic725500.jpg"
  },
  {
    title: "Forbidden Island",
    link: "https://boardgamegeek.com/boardgame/65244/forbidden-island",
    image: "https://cf.geekdo-images.com/itemrep/img/gZdBSpXLStMXF5s54qwZ5-5sIuY=/fit-in/246x300/pic646458.jpg"
  },
  {
    title: "Dark Dealings",
    link: "https://boardgamegeek.com/boardgame/173460/dark-dealings",
    image: "https://cf.geekdo-images.com/itemrep/img/X_kTDqHYHLMK9aIL7L2Siq-6ByI=/fit-in/246x300/pic2772460.jpg"
  },
  {
    title: "Blood Rage",
    link: "https://boardgamegeek.com/boardgame/170216/blood-rage",
    image: "https://cf.geekdo-images.com/itemrep/img/IBtRtMGWMXEXCVHroWqbbPT8I1g=/fit-in/246x300/pic2439223.jpg"
  },
  {
    title: "Spaceteam",
    link: "https://boardgamegeek.com/boardgame/184491/spaceteam",
    image: "https://cf.geekdo-images.com/itemrep/img/Hu5_xBE5Kj93f9wwRc8H8IXVFK8=/fit-in/246x300/pic2722498.png"
  },
  {
    title: "Ravine",
    link: "https://boardgamegeek.com/boardgame/237728/ravine",
    image: "https://cf.geekdo-images.com/itemrep/img/QurImc95mHJP3dq7xEyH0Jlpn5s=/fit-in/246x300/pic4350610.png"
  },
  {
    title: "Love Letter: Batman",
    link: "https://boardgamegeek.com/boardgame/168584/love-letter-batman",
    image: "https://cf.geekdo-images.com/itemrep/img/bx6xgepIUwMdumhSfEMGmll_5bo=/fit-in/246x300/pic2290765.jpg"
  },
  {
    title: "Exploding Kittens",
    link: "https://boardgamegeek.com/boardgame/172225/exploding-kittens",
    image: "https://cf.geekdo-images.com/itemrep/img/W6Stka2LUIxTWXMscoTqKqNosAY=/fit-in/246x300/pic2691976.png"
  },
  {
    title: "Regular Show Fluxx",
    link: "https://boardgamegeek.com/boardgame/156108/regular-show-fluxx",
    image: "https://cf.geekdo-images.com/itemrep/img/iOziA096eWCup3RyHI4ZQBTRChI=/fit-in/246x300/pic1951623.jpg"
  },
  {
    title: "Cards Against Humanity",
    link: "https://boardgamegeek.com/boardgame/50381/cards-against-humanity",
    image: "https://cf.geekdo-images.com/itemrep/img/MV1e5HmRs-KYiSxts6bcQfctDMY=/fit-in/246x300/pic2909692.jpg"
  },
  {
    title: "Secret Hitler",
    link: "https://boardgamegeek.com/boardgame/188834/secret-hitler",
    image: "https://cf.geekdo-images.com/itemrep/img/fXYFJpDCT_bF8xin02ab_7kbU74=/fit-in/246x300/pic2771488.png"
  },
  {
    title: "Bears Vs Babies",
    link: "https://boardgamegeek.com/boardgame/211534/bears-vs-babies",
    image: "https://cf.geekdo-images.com/itemrep/img/FIjpVTCL9S_y8uQGIYq7u72mg68=/fit-in/246x300/pic3231155.png"
  },
  {
    title: "Deluxe Pit",
    link: "https://boardgamegeek.com/boardgame/140/pit",
    image: "https://cf.geekdo-images.com/itemrep/img/O534gejs6P2PI2forVcAub8sHQk=/fit-in/246x300/pic423644.jpg"
  },
  {
    title: "Wizard School",
    link: "https://boardgamegeek.com/boardgame/185154/wizard-school",
    image: "https://cf.geekdo-images.com/itemrep/img/lDNlKbjGiuKZBKb2NY3nuPkDFQY=/fit-in/246x300/pic2691084.png"
  },
  {
    title: "Binding of Isaac: Four Souls",
    link: "https://boardgamegeek.com/boardgame/255664/binding-isaac-four-souls",
    image: "https://cf.geekdo-images.com/itemrep/img/sVRbM1JHI9JhdGJedg1qIZnNWkw=/fit-in/246x300/pic4197173.jpg"
  },
  {
    title: "Sushi Go!",
    link: "https://boardgamegeek.com/boardgame/133473/sushi-go",
    image: "https://cf.geekdo-images.com/itemrep/img/m0iWupkf91Km8pS-hH5EOwLPEUo=/fit-in/246x300/pic1900075.jpg"
  },
  {
    title: "5 Minute Dungeon",
    link: "https://boardgamegeek.com/boardgame/207830/5-minute-dungeon",
    image: "https://cf.geekdo-images.com/itemrep/img/AYx5N-AO9WNjb_QHUJJTpRx8kIU=/fit-in/246x300/pic3370214.jpg"
  },
  {
    title: "One Night Ultimate Werewolf",
    link: "https://boardgamegeek.com/boardgame/147949/one-night-ultimate-werewolf",
    image: "https://cf.geekdo-images.com/itemrep/img/0dzPRSXpW_gsHM1ogk4dz1MQ8hY=/fit-in/246x300/pic1809823.jpg"
  },
  {
    title: "Pass The Pigs",
    link: "https://boardgamegeek.com/boardgame/2593/pass-pigs",
    image: "https://cf.geekdo-images.com/itemrep/img/FaEJ0iNlioJJaTxoPhMTR-Ujs7w=/fit-in/246x300/pic697422.jpg"
  },
  {
    title: "Potato Pirates",
    link: "https://boardgamegeek.com/boardgame/234465/potato-pirates",
    image: "https://cf.geekdo-images.com/itemrep/img/cxuMEBKSJmRm7TY_v6ZtDn_pjmU=/fit-in/246x300/pic3731034.png"
  },
  {
    title: "Joking Hazard",
    link: "https://boardgamegeek.com/boardgame/193621/joking-hazard",
    image: "https://cf.geekdo-images.com/itemrep/img/vilCaSo5wO6FV1rYOgM-MCqPUUo=/fit-in/246x300/pic3218812.jpg"
  },
  {
    title: "Santa Vs Jesus",
    link: "https://boardgamegeek.com/boardgame/197435/santa-vs-jesus",
    image: "https://cf.geekdo-images.com/itemrep/img/mvev7NtjJDJ-BpDgsuA6lI0Qj9k=/fit-in/246x300/pic3787987.png"
  },
  {
    title: "Uno",
    link: "https://boardgamegeek.com/boardgame/2223/uno",
    image: "https://cf.geekdo-images.com/itemrep/img/NvECHeCH0GfmLdh5onMpMPH03Hc=/fit-in/246x300/pic981505.jpg"
  },
  {
    title: "Skip-Bo",
    link: "https://boardgamegeek.com/boardgame/1269/skip-bo",
    image: "https://cf.geekdo-images.com/itemrep/img/or6sr22SRh9N2GOcm--vkaUzcZI=/fit-in/246x300/pic2440687.jpg"
  },
  {
    title: "Ticket to Ride",
    link: "https://boardgamegeek.com/boardgame/9209/ticket-ride",
    image: "https://cf.geekdo-images.com/itemrep/img/-7kWI_TKVJ9M3DLFdPTfky18324=/fit-in/246x300/pic38668.jpg"
  },
  {
    title: "Clank!",
    link: "https://boardgamegeek.com/boardgame/201808/clank-deck-building-adventure",
    image: "https://cf.geekdo-images.com/itemrep/img/LIm_ppd46H3ui7_ajQ6OzAezGlA=/fit-in/246x300/pic4449526.jpg"
  },
  {
    title: "Mare Nostrum: Empires",
    link: "https://boardgamegeek.com/boardgame/174785/mare-nostrum-empires",
    image: "https://cf.geekdo-images.com/itemrep/img/pgILDgSf9kTvuaS_FPdPtHdTI4k=/fit-in/246x300/pic2648963.jpg"
  },
  {
    title: "Dixit",
    link: "https://boardgamegeek.com/boardgame/39856/dixit",
    image: "https://cf.geekdo-images.com/itemrep/img/pOiJxM-COUIpG4Rsb4vGdHH4894=/fit-in/246x300/pic3483909.jpg"
  },
  {
    title: "Adventure Time Card Wars: BMO vs. Lady Rainicorn",
    link: "https://boardgamegeek.com/boardgame/154560/adventure-time-card-wars-bmo-vs-lady-rainicorn",
    image: "https://cf.geekdo-images.com/itemrep/img/tbpeTTiD3_T_kKyuBOjCYA8TJk8=/fit-in/246x300/pic1919612.jpg"
  },
  {
    title: "Livestock Uprising",
    link: "https://boardgamegeek.com/boardgame/153213/livestock-uprising",
    image: "https://cf.geekdo-images.com/itemrep/img/B8w1c-mQr62AuBAjWYimqsbXfXc=/fit-in/246x300/pic2232226.jpg"
  },
  {
    title: "Terraforming Mars",
    link: "https://boardgamegeek.com/boardgame/167791/terraforming-mars",
    image: "https://cf.geekdo-images.com/itemrep/img/bhemoxL7PG1a_79L0D9syPTADSY=/fit-in/246x300/pic3536616.jpg"
  },
  {
    title: "The Fox in the Forest",
    link: "https://boardgamegeek.com/boardgame/221965/fox-forest",
    image: "https://cf.geekdo-images.com/itemrep/img/VYu3d9_-pmgLdQbykJtp9RKsxZg=/fit-in/246x300/pic3496085.jpg"
  },
  {
    title: "Star Trek Fluxx",
    link: "https://boardgamegeek.com/boardgame/246531/star-trek-fluxx",
    image: "https://cf.geekdo-images.com/itemrep/img/80gEE2Hs6OFWyqOPT2rkK6aUDeg=/fit-in/246x300/pic4167392.jpg"
  },
  {
    title: "Rick and Morty: Total Rickall",
    link: "https://boardgamegeek.com/boardgame/194232/rick-and-morty-total-rickall-card-game",
    image: "https://cf.geekdo-images.com/itemrep/img/Wt3peQN1lQ8Cj1WTvdD2of6Iagg=/fit-in/246x300/pic3979905.jpg"
  },
  {
    title: "Codenames",
    link: "https://boardgamegeek.com/boardgame/178900/codenames",
    image: "https://cf.geekdo-images.com/itemrep/img/j3KnNONTvPaOqyY_pwhS9C9s5bk=/fit-in/246x300/pic2582929.jpg"
  }
];

export default games;
