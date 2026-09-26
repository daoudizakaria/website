// "Field notes" — the personal photography page.
//
// Everything here is a first draft to edit: the intro, every caption, and
// the location line. Photos live in public/uploads/field-notes/ as two WebP
// sizes each (long edge 1200px and 2400px), metadata stripped.
//
// layout: "full"  — spans the page width
//         "pair"  — consecutive "pair" photos sit side by side (two frames
//                   of the same shape)
//         "solo"  — a single portrait frame, centred at a narrower width

const fieldNotesHeader = {
  title: "Field notes",
  // TODO(Zakaria): add the park / country, e.g. "Serengeti, Tanzania".
  location: "On safari",
  intro:
    "Physics is, at heart, the discipline of careful observation — and so is wildlife photography. Both reward patience: you wait, you watch, and every so often the moment arrives. I recently spent time on safari with a camera and a long lens. These are a few of the moments I was patient enough to catch.",
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
    caption: "Watching a mother and her calf. The best seat is the quiet one.",
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
      caption:
        "He walked straight toward us for a full minute. You don't reframe a moment like this — you hold still.",
    },
    {
      file: "zebras-buffalo",
      layout: "full",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "Two zebras standing in dry grass looking toward the camera, with buffalo grazing out of focus behind them",
      caption:
        "No two zebras share the same stripes — every one of them carries its own barcode.",
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
        "A whole pride at rest. Most of them asleep — but someone is always on watch.",
    },
    {
      file: "lilac-breasted-roller",
      layout: "pair",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "A lilac-breasted roller perched on a bare branch, its lilac, turquoise and deep blue plumage bright against soft green",
      caption:
        "The lilac-breasted roller — nature has no problem with a bold colour palette.",
    },
    {
      file: "leopard-resting",
      layout: "full",
      w: 1200,
      h: 800,
      large: { w: 2400, h: 1600 },
      alt:
        "A leopard lying along a lichen-covered branch, tail hanging down, looking at the camera against green foliage",
      caption: "Equilibrium, briefly.",
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
      caption: "The reason the leopard keeps its meal up a tree.",
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
      file: "crocodiles-gaping",
      layout: "full",
      w: 1200,
      h: 675,
      large: { w: 2400, h: 1350 },
      alt:
        "Two Nile crocodiles basking on rocks at the water's edge, the one behind with its jaws wide open, both reflected in the rippled water",
      caption:
        "The open jaws aren't a threat: crocodiles gape to shed heat. A radiator, with teeth.",
    },
    {
      file: "lake-sunset",
      layout: "solo",
      w: 800,
      h: 1200,
      large: { w: 1600, h: 2400 },
      alt:
        "The sun setting over a lake, framed by the silhouettes of acacia branches, its light reflected in the water",
      caption: "End of the day, end of the drive.",
    },
  ],
};

export { fieldNotesHeader, fieldNotes };
