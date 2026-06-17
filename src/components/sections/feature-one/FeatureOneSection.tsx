import React from "react";
import feature4 from "../../../assets/images/feature-4.jpg";
import feature2 from "../../../assets/images/feature-2.png";
import feature1 from "../../../assets/images/feature-1.png";
import feature3 from "../../../assets/images/feature-3.png";

// ─── Constants ───────────────────────────────────────────────────────────────

const FEATURE_ONE = {
  eyebrow: "Why Choose Us",
  title: "Everything You Need to Build a Stronger Business",
  description:
    "From strategic planning to operational optimization, we provide the expertise and guidance needed to help your business grow with confidence.",
} as const;

const FEATURE_ONE_IMAGES = [
  { src: feature4, alt: "Team members reviewing analytics on a tablet" },
  { src: feature2, alt: "Professional working on a laptop in a modern chair" },
  { src: feature1, alt: "Colleagues collaborating at a height-adjustable desk" },
  { src: feature3, alt: "Team members working together on a lounge sofa" },
] as const;

// ─── Design Tokens ───────────────────────────────────────────────────────────

const colors = {
  white: "#ffffff",
  text: "#000000",
  subtext: "#666062",
  dot: "#d3d3d3",
  dotActive: "#000000",
} as const;

const featureOne = {
  sectionMaxWidth: 1728,
  sectionGap: 32,
  sectionPaddingX: 200,
  sectionPaddingY: 56,
  headerGap: 16,
  gridGap: 16,
} as const;

// ─── Sizes ───────────────────────────────────────────────────────────────────

const GRID_GAP = featureOne.gridGap;
const IMG_HEIGHT_TALL = 520;
const IMG_HEIGHT_TOP = 252;
const IMG_HEIGHT_BOTTOM = 252;
const LEFT_COL_WIDTH = 340;

// ─── Breakpoint hook ─────────────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    () => window.innerWidth < breakpoint
  );

  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return isMobile;
}

// ─── Carousel (mobile) ───────────────────────────────────────────────────────

const Carousel: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const total = FEATURE_ONE_IMAGES.length;
  const trackRef = React.useRef<HTMLDivElement>(null);

  // Touch swipe
  const touchStartX = React.useRef<number>(0);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        goTo(current + 1);
      } else {
        goTo(current - 1);
      }
    }
  };

  return (
    <div style={carouselStyles.wrapper}>
      {/* Track */}
      <div
        style={carouselStyles.overflow}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            ...carouselStyles.track,
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {FEATURE_ONE_IMAGES.map((img, i) => (
            <div key={i} style={carouselStyles.slide}>
              <img
                src={img.src}
                alt={img.alt}
                style={carouselStyles.img}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={carouselStyles.dots}>
        {FEATURE_ONE_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              ...carouselStyles.dot,
              backgroundColor: i === current ? colors.dotActive : colors.dot,
              transform: i === current ? "scale(1.2)" : "scale(1)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const carouselStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  overflow: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  track: {
    display: "flex",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  },
  slide: {
    flex: "0 0 100%",
    height: 260,
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "background-color 0.2s ease, transform 0.2s ease",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

const FeatureOne: React.FC = () => {
  const isMobile = useIsMobile();
  const [imgErrors, setImgErrors] = React.useState<Record<number, boolean>>({});

  const handleImgError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      style={{
        ...styles.section,
        paddingLeft: isMobile ? 20 : featureOne.sectionPaddingX,
        paddingRight: isMobile ? 20 : featureOne.sectionPaddingX,
        paddingTop: isMobile ? 40 : featureOne.sectionPaddingY,
        paddingBottom: isMobile ? 40 : featureOne.sectionPaddingY,
      }}
    >
      <div style={styles.inner}>

        {/* ── Header ── */}
        <div
          style={{
            ...styles.header,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 16 : 32,
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <div
            style={{
              ...styles.headerLeft,
              alignItems: isMobile ? "center" : "flex-start",
              maxWidth: isMobile ? "100%" : 560,
            }}
          >
            <p
              style={{
                ...styles.eyebrow,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {FEATURE_ONE.eyebrow}
            </p>
            <h2
              style={{
                ...styles.title,
                fontSize: isMobile ? 26 : 40,
                lineHeight: isMobile ? "34px" : "46px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {FEATURE_ONE.title}
            </h2>
          </div>

          {isMobile && (
            <div
              style={{
                width: 40,
                height: 1,
                backgroundColor: colors.subtext,
                opacity: 0.3,
                flexShrink: 0,
              }}
            />
          )}

          <p
            style={{
              ...styles.description,
              maxWidth: isMobile ? 300 : 340,
              alignSelf: isMobile ? "center" : "flex-end",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {FEATURE_ONE.description}
          </p>
        </div>

        {/* ── Images: Carousel on mobile, Grid on desktop ── */}
        {isMobile ? (
          <Carousel />
        ) : (
          <div style={styles.grid}>
            {/* Left tall */}
            <div style={styles.leftCell}>
              {imgErrors[0] ? (
                <ImagePlaceholder label="Left tall" />
              ) : (
                <img
                  src={FEATURE_ONE_IMAGES[0].src}
                  alt={FEATURE_ONE_IMAGES[0].alt}
                  style={styles.imgFill}
                  onError={() => handleImgError(0)}
                />
              )}
            </div>

            {/* Right column */}
            <div style={styles.rightColumn}>
              {/* Top row */}
              <div style={styles.topRow}>
                <div style={styles.topCenterCell}>
                  {imgErrors[1] ? (
                    <ImagePlaceholder label="Top center" />
                  ) : (
                    <img
                      src={FEATURE_ONE_IMAGES[1].src}
                      alt={FEATURE_ONE_IMAGES[1].alt}
                      style={styles.imgFill}
                      onError={() => handleImgError(1)}
                    />
                  )}
                </div>

                <div style={styles.topRightCell}>
                  {imgErrors[2] ? (
                    <ImagePlaceholder label="Top right" />
                  ) : (
                    <img
                      src={FEATURE_ONE_IMAGES[2].src}
                      alt={FEATURE_ONE_IMAGES[2].alt}
                      style={styles.imgFill}
                      onError={() => handleImgError(2)}
                    />
                  )}
                </div>
              </div>

              {/* Bottom wide */}
              <div style={styles.bottomWideCell}>
                {imgErrors[3] ? (
                  <ImagePlaceholder label="Bottom wide" />
                ) : (
                  <img
                    src={FEATURE_ONE_IMAGES[3].src}
                    alt={FEATURE_ONE_IMAGES[3].alt}
                    style={styles.imgFill}
                    onError={() => handleImgError(3)}
                  />
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

// ─── Placeholder ─────────────────────────────────────────────────────────────

const ImagePlaceholder: React.FC<{ label: string }> = ({ label }) => (
  <div style={styles.placeholder}>
    <span style={styles.placeholderText}>{label}</span>
  </div>
);

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: "100%",
    maxWidth: featureOne.sectionMaxWidth,
    margin: "0 auto",
    backgroundColor: colors.white,
    boxSizing: "border-box",
  },

  inner: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: featureOne.sectionGap,
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },

  headerLeft: {
    display: "flex",
    flexDirection: "column",
    gap: featureOne.headerGap,
    maxWidth: 560,
  },

  eyebrow: {
    margin: 0,
    fontFamily: "Outfit, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "21px",
    color: colors.subtext,
    letterSpacing: 0,
  },

  title: {
    margin: 0,
    fontFamily: "'Default Lingo', Georgia, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 40,
    lineHeight: "46px",
    letterSpacing: 0,
    color: colors.text,
  },

  description: {
    margin: 0,
    fontFamily: "Outfit, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "23px",
    letterSpacing: 0,
    color: colors.subtext,
  },

  // ── Desktop grid ──
  grid: {
    display: "flex",
    flexDirection: "row",
    gap: GRID_GAP,
    width: "100%",
    height: IMG_HEIGHT_TALL,
  },

  leftCell: {
    flexShrink: 0,
    width: LEFT_COL_WIDTH,
    height: IMG_HEIGHT_TALL,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },

  rightColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: GRID_GAP,
  },

  topRow: {
    display: "flex",
    flexDirection: "row",
    gap: GRID_GAP,
    height: IMG_HEIGHT_TOP,
    flexShrink: 0,
  },

  topCenterCell: {
    flex: "1 1 0",
    height: IMG_HEIGHT_TOP,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },

  topRightCell: {
    flex: "1 1 0",
    height: IMG_HEIGHT_TOP,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },

  bottomWideCell: {
    flex: 1,
    height: IMG_HEIGHT_BOTTOM,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },

  imgFill: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#d9d9d9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  placeholderText: {
    fontFamily: "Outfit, sans-serif",
    fontSize: 13,
    color: colors.subtext,
  },
};

export default FeatureOne;
