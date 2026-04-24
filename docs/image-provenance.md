# Gore Store Image Provenance

**Swapped:** April 24, 2026  
**Session:** S2 — Work item 84e33dc4  
**Source snapshot:** Wayback Machine, `web.archive.org/web/20250622175207`, capturing `www.drgore.com/store/` (WordPress era, live as of June 22 2025)  
**Decision:** Dave said "Just take my old pictures. All or nothing." All current images are Wayback originals; Lovable-generated images are preserved in `public/assets/store/_lovable-backup/`.

---

## Product Image Map

| Slug | Old WP filename | Wayback path | Approx. dimensions | Notes |
|------|----------------|--------------|-------------------|-------|
| texting-handbook | book_stoptext.jpg | 2015/10/book_stoptext.jpg | 125×167 | Small — upscaled at display |
| ex-boyfriend-lotion | lotion_ex.jpg | 2015/10/lotion_ex.jpg | 106×235 | Tall portrait |
| ex-girlfriend-cream | cream_ex.jpg | 2015/10/cream_ex.jpg | 115×109 | Small |
| weight-loss-dvd | dvd_loseweight.jpg | 2015/10/dvd_loseweight.jpg | 100×186 | Tall portrait |
| breathspray | breath_spray-2.jpg | 2015/10/breath_spray-2.jpg | 67×250 | Tall portrait, narrow |
| anti-whining | anti-whine.jpg | 2015/10/anti-whine.jpg | 70×259 | Tall portrait |
| no-interrupt-figure | action_figure.jpg | 2015/10/action_figure.jpg | 125×126 | Dave's doll-with-no-mouth image |
| no-advice-figure | action_figure.jpg | 2015/10/action_figure.jpg | 125×126 | **Same image as no-interrupt-figure** — Dave's explicit preference |
| volunteering-flakes | fishfood.jpg | 2015/10/fishfood.jpg | 225×196 | Best-quality of small era |
| drinking-pill | pill.jpg | 2015/10/pill.jpg | 125×289 | Wayback original — no "pil" misspelling |
| childhood-album | photo_album.jpg | 2015/10/photo_album.jpg | 125×112 | Very small |
| inlaws-cd | cd_inlaws-2.jpg | 2015/10/cd_inlaws-2.jpg | 125×109 | Small |
| inlaws-jewish | cd_inlaws-2.jpg | 2015/10/cd_inlaws-2.jpg | 125×109 | **Same image as inlaws-cd** — old site shared one CD image |
| inlaws-catholic | cd_inlaws-2.jpg | 2015/10/cd_inlaws-2.jpg | 125×109 | **Same image as inlaws-cd** — old site shared one CD image |
| serenity-gel | serenity-now.jpg | 2015/10/serenity-now.jpg | 125×126 | Small |
| defense-spray | defense-spray.jpg | 2015/10/defense-spray.jpg | 50×225 | Very narrow portrait |
| adult-child-fumigator | room_deod.jpg | 2015/10/room_deod.jpg | 125×129 | Old site used same image for both adult-children products |
| room-deodorant | room_deod.jpg | 2015/10/room_deod.jpg | 125×129 | **Same image as adult-child-fumigator** — original site behavior |
| athlete-pill | pillbottle.jpg | 2015/10/pillbottle.jpg | 2000×3008 | High-res NIKON D40 photo — best quality in the set |
| spark-enzymes | Single.jpg | 2022/01/Single.jpg | 500×357 | Good quality |
| webmd-blocker | WebMD.jpg | 2022/01/WebMD.jpg | 500×516 | Good quality |
| bambian | BAmbian.jpg | 2022/01/BAmbian.jpg | 500×416 | Good quality |

---

## Quality Notes

**Small images (2015 era, 50–225px wide):** Most WordPress-era product images were 125×109 px thumbnails used in a narrow sidebar layout. At the current card width (~300px), they will be upscaled and may appear slightly soft or pixelated. Per Dave's instruction ("All or nothing"), these are used as-is rather than substituting Lovable replacements.

**Recommended follow-up for Dave:** Ask if he has higher-resolution originals for the 2015-era images (especially anti-whining, texting-handbook, cream, defense spray, serenity-gel, childhood-album) saved locally or in a Google Drive. These are the ones most likely to look blurry in the new card grid.

**athlete-pill exception:** The `pillbottle.jpg` is a full-resolution NIKON D40 photo (2000×3008, 1.5 MB). It will load slowly on mobile. Consider running it through an image optimizer or resizing to 600px wide before launch.

---

## Backup Location

All Lovable-generated images preserved at: `public/assets/store/_lovable-backup/`

Rollback: copy any file from `_lovable-backup/` back to `public/assets/store/` to restore the Lovable version for a specific product.
