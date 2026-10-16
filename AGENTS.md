<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Business details live in src/config/business.ts and the demo catalog in src/data/catalog.ts — single source so the owner's data can be swapped without touching UI.
- Enquiries (forms, product, cartridge, bulk) open prefilled WhatsApp links via src/lib/whatsapp.ts; there is no backend, so never show a "sent" success state.
- Motion uses CSS keyframes + an IntersectionObserver Reveal component; no animation library, to keep JS light.
