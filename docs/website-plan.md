# 🕊️ Production Specification: Ric & Jackie’s Interactive Wedding Experience

This document contains the structural architecture, component design, interaction flows, and asset-mapping rules for a high-performance, scroll-driven interactive wedding invitation website. This specification guarantees fluid responsiveness across mobile devices and desktop screens, moving away from flat mobile screenshots to create an immersive digital experience.

---

## 🎨 1. Core Architecture & Design System

### A. Visual & Aesthetic Tone
*   **Thematic Style:** Romantic, modern minimalist storytelling with luxury cinematic layouts.
*   **Color Profile:** Organic, elegant natural tones:
    *   `Blush Pink` — Soft romantic accent.
    *   `Antique Rose` — Mid-tone warmth.
    *   `Champagne Beige` — Classic neutral base.
    *   `Sage Green` — Primary thematic brand accent.
    *   `Muted Taupe` — Textures and subtle background layers.
*   **Typography Elements:**
    *   *Headings:* Elegant, flowing high-contrast serif/calligraphy font pairings.
    *   *Body Copy:* High-legibility modern sans-serif (e.g., Inter or Montserrat) optimized for clean layout readability.

### B. Background Audio Engine
A persistent ambient soundtrack controller will be anchored globally. It features custom playback states (Play, Pause, Track Skip, Shuffle toggle) framed beautifully as an overlay widget, loading from the couple's selected playlist:
1. *Beautiful in white* — Mild Nawin
2. *Tahanan (Wedding Version)* — El Manu & Jessy Kang
3. *Can’t help Falling in Love* — Mild Nawin
4. *A thousand years* — Henry
5. *This Will Be (An Everlasting Love)* — Natalie Cole
6. *WALONG BILYON (Wedding Version)* — TJ Monterde
7. *Ikaw at Ako* — TJ Monterde
8. *Thinking Out Loud* — Mild Nawin
9. *I Choose You {The Wedding Song}* — Ryann Darling Original
10. *Count on Me* — Mild Nawin
11. *24/7, 365* — Elijah Woods
12. *Perfect* — Mild Nawin
13. *You are the reason* — Mild Nawin
14. *Valentine* — Mild Nawin

---

## 🗺️ 2. Section-by-Section Structural Layout

The page is designed as a single, beautifully layered continuous scroll experience. 

### Section 1: The Front Page (The Cinematic Cover)
*   **Visual Asset:** Full-screen backdrop using image file `NZF_3457.jpg` (or `NZF_3457 (1).jpg`).
*   **Typography Overlay:** 
    *   `TOGETHER WITH OUR FAMILIES`
    *   `RIC and JACKIE`
    *   `INVITE YOU TO OUR WEDDING CELEBRATION`
    *   `AUGUST 22, 2026 | SATURDAY AT 2:00 P.M.`
*   **UX Pattern:** Fully responsive full-bleed text container alignment. Avoid fixed margins to ensure text scales fluidly on mobile viewports.

### Section 2: The Countdown to Forever
*   **Text Element:** `"THE COUNTDOWN TO FOREVER HAS BEGUN..."`
*   **Live Component:** Real-time JavaScript ticking block displaying: `DAYS : HOURS : MINUTES : SECONDS`
*   **Scripture Frame:** Isaiah 60:22 *“When the time is right, I, the Lord will make it happen”*
*   **Closing Note:** *"We can't wait to celebrate with you!"*
*   **Visual Asset:** Smoothly accented by romantic couple shots like `NZF_3192.jpg` layered as an ambient reveal card.

### Section 3: Directions & Logistics Hub
*   **Heading:** `DIRECTIONS` *(Replaces "The Details")*
*   **Core Copy:** *"Please join us for our ceremony and adults-only reception at Nawawalang Paraiso Resort & Hotel, Brgy. Camaysa Tayabas, Quezon Province 4327"*
*   **Interactive Target:** Styled accent button linked directly to the venue's live Google Maps location coordinates.

### Section 4: Dress Code & Attire Palette
*   **Layout Style:** Integrated cleanly directly below or alongside the Logistics Hub to optimize spatial flow.
*   **Dress Code Copy:** *Cocktail attire - elevated and chic*
*   **Visual Color Swatches:** Interactive, high-fidelity color circles representing:
    *   Blush Pink | Antique Rose | Champagne Beige | Sage Green | Muted Taupe
*   **Sponsor Specifics:**
    *   *Principal Sponsors (Gentlemen):* Black coat and pants, necktie with the shade of beige.
    *   *Principal Sponsors (Ladies):* Gown and long dress in the thematic color shades.
    *   *Guests:* Semi-formal matching the provided color profile.

### Section 5: Interactive Wedding Timeline
An animated, scroll-linked vertical roadmap tracing the progression of the wedding day:

| Time | Milestone Event | Interactive Graphic Element |
| :--- | :--- | :--- |
| **2:00 PM** | The Ceremony | Interlocking rings / church icon reveal |
| **3:00 PM** | Portraits | Camera capture / lens focus indicator |
| **4:00 PM** | Cocktail Hour | Toasting champagne flutes animation |
| **5:30 PM** | The Banquet | Elegant dining cloche / plate illustration |
| **7:00 PM** | The First Dance | Glimmering musical notes fade-in |
| **8:00 PM** | The Revelry | Dynamic disco sphere rotating micro-state |

### Section 6: Etiquette & Creative Gift Registry
These modules are unified horizontally or in a grid to keep details concise:
*   **Module A: Unplugged Ceremony**
    *   *Icons:* Clear, clean minimalistic vectors indicating No Cameras / No Mobile Devices.
    *   *Copy:* *"We have but one plea, please keep our ceremony CAMERA-FREE. Though our I DO’s are unplugged, our reception is not. Once the ceremony is over, you can start snapping shots."*
*   **Module B: Wedding Wishes & Gifts**
    *   *Primary Copy:* *"Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a monetary contribution would be greatly appreciated to help us begin our new journey together"*
    *   *Secondary Layout:* *"WITH ALL THAT WE HAVE, WE'VE BEEN TRULY BLESSED. YOUR PRESENCE AND PRAYERS ARE ALL THAT WE REQUEST. BUT IF YOU DESIRE TO GIVE NONETHELESS, MONETARY GIFT IS ONE WE SUGGEST. HOWEVER, IF YOU PREFER TO PURCHASE A GIFT, FEEL FREE TO SURPRISE US IN YOUR OWN WAY."*
    *   *Digital Transaction Cards:* Clean side-by-side modal cards wrapping QR code payment images:
        1. **PNB Profile Card:** Styled using the asset layout from `714720565_2034985993788074_8979665868412519822_n.jpg` displaying *RicJackie, Account No.: XXXX XXXX 2152*.
        2. **GCash Profile Card:** Styled using the asset layout from `e8e99fd4-795a-4ef9-86df-fd903b4459d9.jpeg` displaying *JA\*\*\*\*\*\*\*E G.*

### Section 7: The Grand Entourage Roll
A multi-tier typographic grid mapped directly from the structure of `WEDDING INVITATION.xlsx` (**ENTOURAGE** sheet data):

*   **The Couple & Parents:**
    *   *Bride:* JACKIE I. GONZALES | *Groom:* RIC A. EBALE
    *   *Mother of the Bride:* TRINIDAD I. GONZALES | *Father of the Bride:* EMETERIO P. GONZALES
    *   *Mother of the Groom:* ROSENDA A. EBALE | *Father of the Groom:* RICARDO P. EBALE
*   **Core Bridal Party:**
    *   *Best Man:* JOJO G. VILLAMOR | *Maid of Honor:* JANELLE I. GONZALES
*   **Sponsorship Grid:**
    *   *Candle Sponsors:* JOSHUA I. GONZALES & TREISHA LALAINE 'AYEN' JAGOBA
    *   *Veil Sponsors:* JOHN WILLIAM AQUINO & JIANAFEL S. ABSULIO
    *   *Cord Sponsors:* ROBERT CHITO VILLAVERDE & KRIZZA ANN VILLENAS-OBLEA
*   **Groomsmen & Bridesmaids Layout:**
    *   *Groomsmen:* Mark Angelo Ebale, Aaron Basilio, Patrick Chato, Ernest Joseph Lagasca, Terence Mendiola, Hilton Ace Tuvilla
    *   *Bridesmaids:* Lisse Mae Quebrado, Shaira Magin Buctil-Blanco, Habelle Gonzales, Jecelle C. Oabel, Lolita 'Lytz' Osal, Sheila Mae Caagbay
*   **Junior Entourage & Family:**
    *   *Ring Bearer:* ADRIEL P. CHATO | *Coin Bearer:* ZACHARY MITCHEL S. CADA | *Bible Bearer:* MARC AERON I. FALLER
    *   *Flower Girls:* Zoey Abaricia, Stylina Faye I. Caagbay, Willemhyna Aquino
*   **Principal Sponsors List:**
    *   *Ninongs:* Rev. Richard Nillo, Mr. Gregorio Gonzales, Mr. Michael Angelo Sambas, Ret. BG. Christopher C. Estella, Mr. Jose Jimenez, Jr., Mr. Rommel Bautista, Mr. Brian Melliza, Mr. Jose Angelito Nadal, Mr. Lawrence Charlie Ibarrola, Mr. Gambhie C. Gambbon, Mr. Johanes Balmeo, Engr. Godofrredo Amion
    *   *Ninangs:* Mrs. Rojean Ann F. Nillo, Mrs. Ella Carandang Malabanan, Mrs. Marie Delacruz, Dr. Fe Amie B. Estella, Mrs. Patrilla Tabi, Mrs. Raine Bautista, Judge Charity Grace Rico, Mrs. Olivia Nadal, Mrs. Elena Alagao Lim, Mrs. Shirley S. Gambbon, Ms. Leopista Gaela, Mrs. Analyn Amion

### Section 8: The RSVP Terminal (Google Form Wrapper)
*   **Header Call to Action:** `"READY TO CELEBRATE? Please fill out the RSVP form below to let us know if you’ll be joining us"`
*   **Critical Deadline:** `By July 22`
*   **Integration Component:** A beautifully integrated iframe wrapping the customized Google Form questionnaire. The form layout matches the exact question logic requested, stripping out old numerical counter choices entirely: