import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "../../components/reveal/Reveal";
import { fieldNotesHeader, fieldNotes } from "../../portfolio";
import "./FieldNotes.css";

const photoUrl = (file, size) =>
  `${process.env.PUBLIC_URL || ""}/uploads/field-notes/${file}-${size}.webp`;

/** Responsive image: 1200px long-edge by default, 2400px on dense screens. */
function Photo({ photo, sizes, eager, onOpen }) {
  return (
    <button
      type="button"
      className="fn-photo-button"
      onClick={onOpen}
      aria-label={`Enlarge photo: ${photo.alt}`}
    >
      <img
        src={photoUrl(photo.file, 1200)}
        srcSet={`${photoUrl(photo.file, 1200)} ${photo.w}w, ${photoUrl(
          photo.file,
          2400
        )} ${photo.large.w}w`}
        sizes={sizes}
        width={photo.w}
        height={photo.h}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </button>
  );
}

/** Full-screen viewer: Esc closes, arrow keys and swipes move between photos. */
function Lightbox({ items, index, onClose, onStep }) {
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const item = items[index];

  // Mount/unmount only: move focus in, lock page scroll, restore both after.
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onStep(1);
      else if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  return (
    <div
      className="fn-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${items.length}`}
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
      }}
    >
      <figure
        className="fn-lightbox-figure"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={item.file}
          src={photoUrl(item.file, 2400)}
          alt={item.alt}
          width={item.large.w}
          height={item.large.h}
        />
        <figcaption>
          {item.caption}
          <span className="fn-lightbox-count">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
      <button
        type="button"
        ref={closeRef}
        className="fn-lb-button fn-lb-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        type="button"
        className="fn-lb-button fn-lb-prev"
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        type="button"
        className="fn-lb-button fn-lb-next"
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  );
}

// Rendered width of one photo in each row layout (for the srcset choice).
const ROW_SIZES = {
  full: "(max-width: 1180px) 92vw, 1100px",
  pair: "(max-width: 700px) 92vw, 45vw",
  solo: "(max-width: 700px) 92vw, 520px",
};

/** Group consecutive "pair" photos into side-by-side rows. */
function toRows(photos) {
  const rows = [];
  photos.forEach((p, i) => {
    const last = rows[rows.length - 1];
    if (
      p.layout === "pair" &&
      last &&
      last.layout === "pair" &&
      last.items.length < 2
    ) {
      last.items.push({ photo: p, index: i });
    } else {
      rows.push({
        layout: ROW_SIZES[p.layout] ? p.layout : "full",
        items: [{ photo: p, index: i }],
      });
    }
  });
  return rows;
}

export default function FieldNotes({ theme }) {
  // The viewer walks through the observer photo first, then the gallery.
  const all = [fieldNotes.observer, ...fieldNotes.photos];
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d) => setOpen((i) => (i == null ? i : (i + d + all.length) % all.length)),
    [all.length]
  );

  return (
    <div className="field-notes-main">
      <Header theme={theme} pageTitle={fieldNotesHeader.title} />

      <section className="fn-intro">
        <Fade bottom duration={900} distance="20px" className="fn-intro-text">
          <p className="fn-kicker">{fieldNotesHeader.location}</p>
          <h1 className="fn-title">{fieldNotesHeader.title}</h1>
          <p className="fn-lede">{fieldNotesHeader.intro}</p>
        </Fade>
        <figure className="fn-figure fn-observer">
          <Photo
            photo={fieldNotes.observer}
            sizes="(max-width: 900px) 92vw, 40vw"
            eager
            onOpen={() => setOpen(0)}
          />
          <figcaption>{fieldNotes.observer.caption}</figcaption>
        </figure>
      </section>

      <div className="fn-gallery">
        {toRows(fieldNotes.photos).map((row, r) => (
          <div key={r} className={`fn-row fn-row--${row.layout}`}>
            {row.items.map(({ photo, index }) => (
              <Fade
                key={photo.file}
                bottom
                duration={900}
                distance="24px"
                className="fn-cell"
              >
                <figure className="fn-figure">
                  <Photo
                    photo={photo}
                    sizes={ROW_SIZES[row.layout]}
                    eager={index === 0}
                    onOpen={() => setOpen(index + 1)}
                  />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </Fade>
            ))}
          </div>
        ))}
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />

      {open != null && (
        <Lightbox items={all} index={open} onClose={close} onStep={step} />
      )}
    </div>
  );
}
