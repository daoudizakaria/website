// Field notes: the photography page.
//
// Photos live in public/uploads/field-notes/ as two WebP sizes each (long
// edge 1200px and 2400px), metadata stripped.
//
// layout: "full"  : spans the page width
//         "pair"  : consecutive "pair" photos sit side by side (two frames
//                   of the same shape)
//         "solo"  : a single portrait frame, centred at a narrower width

const fieldNotesHeader = {
  title: "Field notes",
  location: "Tanzania",
  intro:
    "Photographs from a safari in Tanzania (the Serengeti, Ngorongoro, Tarangire and Lake Manyara), taken with a telephoto lens. Like much of experimental physics, wildlife photography is mostly a matter of patient observation.",
};

const fieldNotes = {
  // Shown beside the intro rather than in the gallery.
  observer: {
    file: "observer-elephants",
    w: 1200,
    h: 1200,
    large: { w: 2252, h: 2252 },
    alt:
      "Zakaria, seen over his shoulder from inside a safari vehicle, watching an elephant mother and calf graze on open grassland",
    caption: "Watching an elephant and her calf graze.",
  },
  photos: [
    {
      file: "lion-grassland",
      layout: "full",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "A male lion with a dark mane walking straight toward the camera through golden grass",
      caption: "A male lion that walked straight towards us for a full minute.",
    },
    {
      file: "zebras-buffalo",
      layout: "full",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "Two zebras standing in dry grass looking toward the camera, with buffalo grazing out of focus behind them",
      caption: "Zebras in dry grass. Each animal's stripe pattern is unique.",
    },
    {
      file: "lion-pride-mound",
      layout: "pair",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "A pride of lions on and around a termite mound under a blue sky: three lionesses on top looking out, several young lions asleep in the grass below",
      caption:
        "A pride at rest: most are asleep, while the lionesses on the mound keep watch.",
    },
    {
      file: "giraffe-profile",
      layout: "pair",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "A giraffe standing in profile in dry grass among acacia shrubs, under a pale blue sky",
      caption:
        "A giraffe's neck has seven vertebrae, as a human neck does; each is much longer.",
    },
    {
      file: "leopard-resting",
      layout: "full",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "A leopard lying along a lichen-covered branch, tail hanging down, looking at the camera against green foliage",
      caption: "A leopard resting along a branch.",
    },
    {
      file: "leopard-acacia",
      layout: "full",
      w: 1200,
      h: 768,
      large: { w: 2400, h: 1536 },
      alt:
        "A leopard sitting upright in a bare acacia tree, staring at the camera through tangled branches",
      caption:
        "Leopards haul their prey up into trees, out of reach of lions and hyenas. This one was keeping watch over its meal.",
    },
    {
      file: "hyena-hiding",
      layout: "pair",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "A spotted hyena lying low in tall dry grass, looking straight at the camera",
      caption:
        "A spotted hyena, the reason leopards keep their prey in the trees.",
    },
    {
      file: "jackal-grass",
      layout: "pair",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "A jackal pausing in dry grass, looking back at the camera with its mouth open",
      caption: "A jackal glances back on its way through the grass.",
    },
    {
      file: "lilac-breasted-roller",
      layout: "solo",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "A lilac-breasted roller perched on a bare branch, its lilac, turquoise and deep blue plumage bright against soft green",
      caption: "A lilac-breasted roller.",
    },
    {
      file: "crocodiles-gaping",
      layout: "full",
      w: 1200,
      h: 675,
      large: { w: 2400, h: 1350 },
      alt:
        "Two Nile crocodiles basking on rocks at the water's edge, the one behind with its jaws wide open, both reflected in the rippled water",
      caption:
        "Nile crocodiles on the bank. Gaping helps them shed heat; it is not a threat display.",
    },
    {
      file: "lake-sunset",
      layout: "pair",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "The sun setting over Lake Manyara, framed by the silhouettes of acacia branches, its light reflected in the water",
      caption: "End of the day, over Lake Manyara.",
    },
    {
      file: "camp-sunset",
      layout: "pair",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "The sun setting behind a tent at a bush camp in the Serengeti, framed by acacia trees, the sky glowing orange above the dark grassland",
      caption: "Our bush camp in the Serengeti at sunset.",
    },
  ],
};

export { fieldNotesHeader, fieldNotes };
