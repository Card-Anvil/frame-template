import { type Frame } from "@cardanvil/frame-kit";

import * as base from "./base";
import { boxes } from "./boxes";
import preview from "./preview.png";
import * as pt from "./pt";

/**
 * A working frame you can render today, so you can replace one thing at a time
 * and re-run `pnpm validate` after each change.
 *
 * `as const satisfies Frame` is the idiom: `satisfies` checks this against the
 * contract, `as const` keeps the literal types.
 */
export const dragonHoardFrame = {
  name: "Dragon Hoard",
  description: "Dragon Hoard Showcase frame from HOB.",
  previewImage: preview,
  tags: ["Showcase"],
  config: {
    layouts: {
      /** Ordinary creatures, spells, artifacts — most cards. */
      normal: {
        boxes,
        frameAssets: { base, pt },
      },
    },
  },
} as const satisfies Frame;
