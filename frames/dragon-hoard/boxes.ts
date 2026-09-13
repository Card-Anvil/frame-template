import { type CardBoxes } from "@cardanvil/frame-kit";

import wrapMask from "./base/masks/wrapMask.png";

/**
 * Where everything sits on the card.
 *
 * Absolute pixels on a 3264 x 4440 canvas — the full printed sheet *including
 * bleed*, 2.72 x 3.7 in at 1200 DPI. The card face inside it is 63 x 88 mm,
 * leaving roughly 3 mm of bleed on every edge, so `y: 0` is above the top of
 * the card rather than at it.
 *
 * `fontSize` is in points, not pixels; the renderer converts.
 */
export const boxes: CardBoxes = {
  /** The window your art shows through. The placeholder frames are transparent here. */
  art: { x: 0, y: 0, width: 3264, height: 2450 },

  mana: { x: 370, y: 410, width: 2536, height: 177, fontSize: 55 },
  title: { x: 390, y: 420, width: 2540, height: 172, fontSize: 120 },
  type: { x: 410, y: 2500, width: 2500, height: 170, fontSize: 106, color: "white" },

  setSymbol: { x: 2544, y: 2490, width: 300, height: 175 },

  /** Shaped text: opaque pixels of this PNG are the region rules text may
   * occupy. Each wrapped line hugs the silhouette instead of the plain
   * rectangle. Same asset as the layer cutout — one PNG, two systems. */
  rules: {
    x: 260,
    y: 2780,
    width: 2720,
    height: 1130,
    fontSize: 116,
    mask: wrapMask,
  },

  /** Only drawn on cards that have power and toughness. */
  pt: { x: 2456, y: 3826, width: 515, height: 271, fontSize: 116, color: "white" },

  /**
   * Where the pt frame asset is painted. The pt PNGs are full-canvas overlays
   * with the badge already positioned, so they anchor at the sheet's origin.
   */
  ptImage: { x: 0, y: 0 },

  /** The artist line and set information along the bottom. */
  collectorInfo: {
    x: 333,
    y: 4019,
    width: 2200,
    height: 200,
    fontSize: 53,
    color: "white",
  },
};
