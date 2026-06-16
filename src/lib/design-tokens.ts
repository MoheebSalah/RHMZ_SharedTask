/**
 * Design token reference — mirrors CSS custom properties in src/styles/tokens.css.
 * Use Tailwind utilities (e.g. text-subtext, bg-gray) in components.
 */
export const colors = {
  white: "#ffffff",
  white2: "#f5f3f4",
  gray: "#d3d3d3",
  gray2: "#b2a8a7",
  red1: "#de3b36",
  red2: "#bc1618",
  red3: "#a81317",
  red4: "#660708",
  text: "#000000",
  obsidian: "#15191c",
  subtext: "#696366",
  quoteSubtext: "#696366",
} as const;

export const typography = {
  title: { fontSize: 80, lineHeight: 80, fontWeight: 400, fontFamily: "var(--font-lingo)" },
  header1: { fontSize: 48, lineHeight: 52, fontWeight: 400, fontFamily: "var(--font-lingo)" },
  header2: { fontSize: 32, lineHeight: 42, fontWeight: 700, fontFamily: "var(--font-lingo)" },
  header3: { fontSize: 24, lineHeight: 31, fontWeight: 700, fontFamily: "var(--font-lingo)" },
  header4: { fontSize: 20, lineHeight: 27, fontWeight: 700, fontFamily: "var(--font-lingo)" },
  body1: { fontSize: 18, lineHeight: 25, fontWeight: 400, fontFamily: "var(--font-outfit)" },
  body2: { fontSize: 16, lineHeight: 23, fontWeight: 400, fontFamily: "var(--font-outfit)" },
  body3: { fontSize: 14, lineHeight: 21, fontWeight: 400, fontFamily: "var(--font-outfit)" },
  btn1: { fontSize: 18, lineHeight: 25, fontWeight: 700, fontFamily: "var(--font-outfit)" },
  btn2: { fontSize: 16, lineHeight: 23, fontWeight: 700, fontFamily: "var(--font-outfit)" },
  btn3: { fontSize: 14, lineHeight: 21, fontWeight: 700, fontFamily: "var(--font-outfit)" },
} as const;

export const spacing = {
  sectionY: 80,
  sectionYSm: 48,
  containerX: 32,
  containerXSm: 16,
  stackXs: 8,
  stackSm: 12,
  stackMd: 16,
  stackLg: 24,
  stackXl: 32,
  stack2xl: 40,
  stack3xl: 48,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 5%)",
  md: "0 4px 12px 0 rgb(0 0 0 / 8%)",
  lg: "0 8px 24px 0 rgb(0 0 0 / 10%)",
} as const;

export const navbar = {
  height: 72,
  maxWidth: 1728,
  paddingY: 16,
  paddingX: 200,
  background: "#f5f3f4",
  logoHeight: 40,
  logoGap: 13,
  navWidth: 289,
  navHeight: 25,
  navGap: 40,
  btnWidth: 106,
  btnHeight: 37,
  btnPaddingY: 8,
  btnPaddingX: 16,
} as const;

export const heroImage = {
  width: 1328,
  height: 460,
  radius: 8,
} as const;

export const partners = {
  sectionMaxWidth: 1328,
  sectionHeight: 102,
  sectionPadding: 20,
  sectionGap: 40,
  trackWidth: 1037,
  trackHeight: 52,
  trackOpacity: 0.2,
  borderWidth: 1,
} as const;

export const featureOne = {
  sectionMaxWidth: 1728,
  sectionHeight: 841,
  sectionGap: 40,
  sectionPaddingX: 200,
  headerWidth: 1329,
  headerHeight: 151,
  headerGap: 20,
  gridWidth: 1328,
  gridHeight: 650,
  gridGap: 20,
} as const;

export const featureTwo = {
  headerWidth: 1329,
  headerHeight: 151,
  headerGap: 20,
  cardsWidth: 1328,
  cardsHeight: 700,
  cardsRadius: 8,
  cardWidth: 442.66668701171875,
  cardShortHeight: 500,
  cardMidHeight: 600,
  cardTallHeight: 700,
  cardPadding: 32,
  colors: {
    short: "#a4161a",
    mid: "#ba181b",
    tall: "#e5383b",
  },
} as const;

export const featureThree = {
  sectionHeight: 790,
  headerWidth: 1329,
  headerHeight: 151,
  headerGap: 20,
  listWidth: 1328,
  listHeight: 599,
  listRadius: 8,
  rowCollapsedHeight: 79,
  rowExpandedHeight: 204,
  rowPadding: 24,
  rowCollapsedGap: 10,
  rowExpandedGap: 32,
} as const;

export const featureFour = {
  sectionHeight: 1391,
  headerWidth: 1329,
  headerHeight: 151,
  headerGap: 20,
  galleryWidth: 1328,
  galleryHeight: 1000,
  galleryRadius: 8,
  panelTransitionMs: 400,
  cardPadding: 24,
} as const;

export const testimonials = {
  sectionWidth: 1328,
  sectionHeight: 876,
  sectionGap: 20,
  photosHeight: 350,
  photosGap: 24,
  frameHeight: 506,
  framePadding: 32,
  quoteWidth: 271,
  quoteHeight: 214,
  contentWidth: 894,
  contentHeight: 442,
  attributionWidth: 214,
  attributionHeight: 72,
  attributionGap: 10,
  panelTransitionMs: 400,
} as const;
