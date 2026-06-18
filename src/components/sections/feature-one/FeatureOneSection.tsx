import React from "react";
import { FEATURE_ONE, FEATURE_ONE_IMAGES } from "../../../lib/constants";
import SectionContainer from "../../layout/SectionContainer";

// ─── Design Tokens ───────────────────────────────────────────────────────────

const colors = {
  white: "#ffffff",
  text: "#0B090A",
  eyebrow: "#000000",
  subtext: "#696366",
} as const;

const featureOne = {
  sectionGap: 24,
  sectionPaddingY: 32,
  headerGap: 12,
  gridGap: 16,
} as const;

// ─── Sizes ───────────────────────────────────────────────────────────────────

const GRID_GAP = featureOne.gridGap;
const IMG_HEIGHT_TALL = 430;
const IMG_HEIGHT_TOP = 207;
const IMG_HEIGHT_BOTTOM = 207;
const LEFT_COL_WIDTH = 300;

// ─── Breakpoint hook ─────────────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    () => window.innerWidth < breakpoint,
  );

  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return isMobile;
}

// ─── Mobile grid ──────────────────────────────────────────────────────────────

const MobileImageGrid: React.FC<{
  imgErrors: Record<number, boolean>;
  onImgError: (index: number) => void;
}> = ({ imgErrors, onImgError }) => {
  const cellStyles = [
    mobileGridStyles.featuredCell,
    mobileGridStyles.smallCell,
    mobileGridStyles.smallCell,
    mobileGridStyles.wideCell,
  ];

  return (
    <div style={mobileGridStyles.grid}>
      {FEATURE_ONE_IMAGES.map((img, index) => (
        <div key={img.alt} style={cellStyles[index]}>
          {imgErrors[index] ? (
            <ImagePlaceholder label={img.alt} />
          ) : (
            <img
              src={img.src}
              alt={img.alt}
              style={
                index === 0
                  ? mobileGridStyles.featuredImg
                  : mobileGridStyles.img
              }
              onError={() => onImgError(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const mobileGridStyles: Record<string, React.CSSProperties> = {
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },
  featuredCell: {
    gridColumn: "1 / -1",
    height: "auto",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  smallCell: {
    height: 118,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },
  wideCell: {
    gridColumn: "1 / -1",
    height: 146,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  featuredImg: {
    width: "100%",
    height: "auto",
    display: "block",
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
      className="w-full bg-white"
      style={{
        paddingTop: isMobile ? 40 : featureOne.sectionPaddingY,
        paddingBottom: isMobile ? 40 : featureOne.sectionPaddingY,
      }}
    >
      <SectionContainer>
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
              <span style={styles.titleLine}>
                Everything You Need to
              </span>
              <span style={styles.titleLine}>Build a Stronger Business</span>
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
              maxWidth: isMobile ? "100%" : 420,
              alignSelf: isMobile ? "center" : "flex-end",
              fontSize: isMobile ? 13 : 16,
              lineHeight: isMobile ? "20px" : "23px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <span style={styles.descriptionLine}>
              From strategic planning to operational optimization,
            </span>
            <span style={styles.descriptionLine}>
              we provide the expertise and guidance needed to
            </span>
            <span style={styles.descriptionLine}>
              help your business grow with confidence.
            </span>
          </p>
        </div>

        {/* ── Images: Mobile grid, desktop feature grid ── */}
        {isMobile ? (
          <MobileImageGrid
            imgErrors={imgErrors}
            onImgError={handleImgError}
          />
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
      </SectionContainer>
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
    color: colors.eyebrow,
    letterSpacing: 0,
  },

  title: {
    margin: 0,
    fontFamily: "'Default Lingo', Georgia, serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 48,
    lineHeight: "52px",
    letterSpacing: 0,
    color: colors.text,
  },

  titleLine: {
    display: "block",
  },

  description: {
    margin: 0,
    fontFamily: "Outfit, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "25px",
    letterSpacing: 0,
    color: colors.subtext,
  },

  descriptionLine: {
    display: "block",
    whiteSpace: "nowrap",
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
