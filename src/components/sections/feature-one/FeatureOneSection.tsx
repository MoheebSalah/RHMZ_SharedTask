import React from "react"
import { FEATURE_ONE, FEATURE_ONE_IMAGES } from "../../../lib/constants"
import SectionContainer from "../../layout/SectionContainer"
import SectionHeader from "../../shared/SectionHeader"

const GRID_GAP = 16
const IMG_HEIGHT_TALL = 430
const IMG_HEIGHT_TOP = 207
const IMG_HEIGHT_BOTTOM = 207
const LEFT_COL_WIDTH = 300

const MobileImageGrid: React.FC<{
  imgErrors: Record<number, boolean>
  onImgError: (index: number) => void
}> = ({ imgErrors, onImgError }) => {
  const cellStyles = [
    mobileGridStyles.featuredCell,
    mobileGridStyles.smallCell,
    mobileGridStyles.smallCell,
    mobileGridStyles.wideCell,
  ]

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
  )
}

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
}

const FeatureOne: React.FC = () => {
  const [imgErrors, setImgErrors] = React.useState<Record<number, boolean>>({})

  const handleImgError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="w-full bg-white">
      <SectionContainer className="flex flex-col gap-[var(--testimonials-outer-gap)]">
        <SectionHeader
          eyebrow={FEATURE_ONE.eyebrow}
          title={FEATURE_ONE.title}
          description={FEATURE_ONE.description}
        />

        <div className="md:hidden">
          <MobileImageGrid imgErrors={imgErrors} onImgError={handleImgError} />
        </div>

        <div className="hidden md:flex" style={styles.grid}>
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

          <div style={styles.rightColumn}>
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
      </SectionContainer>
    </section>
  )
}

const ImagePlaceholder: React.FC<{ label: string }> = ({ label }) => (
  <div style={styles.placeholder}>
    <span style={styles.placeholderText}>{label}</span>
  </div>
)

const styles: Record<string, React.CSSProperties> = {
  grid: {
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
    color: "#696366",
  },
}

export default FeatureOne
