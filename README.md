# Canadian Swimming Pool — Family & Child Separate Pool
**Ludhiana, Punjab, India**

Official modern website for **Canadian Swimming Pool Family & Child Alag Pool**, located off GT Road Jassian in Ludhiana, Punjab.

---

## 1. Verified Business Details

* **Business Name:** Canadian Swimming Pool Family & Child Alag Pool
* **Short Name:** Canadian Swimming Pool
* **Category:** Swimming Pool & Family Recreation
* **Phone:** `+91 94179 70015` (Tel: `tel:+919417970015`)
* **WhatsApp:** `919417970015` (International clean format)
* **Full Address:** Mahavir Part 2, GT Road Jassian, near Karol Bagh, near Sab Lok Medical, 61–62 Jassian Village Road, New Gurnam Nagar, Jassian, Heera Singh Nagar, Ludhiana, Punjab 141008, India
* **Google Maps Plus Code:** WRX9+7W Ludhiana
* **Google Maps Search URL:** `https://www.google.com/maps/search/?api=1&query=CANADIAN+SWIMMING+POOL+FAMILY+%26+CHILD+ALAG+POOL+Ludhiana`
* **Opening Hours Listing:** Listed as Closed; opens at 6:00 AM Saturday on official directory listing. Configurable weekly schedule provided.

---

## 2. How to Edit Business Information

All business details, rates, pool specifications, facilities, contact phone numbers, and timings are stored in a single centralized TypeScript file:

📁 **`src/data/businessConfig.ts`**

### Ways to Update Content:

### Method A: In-Browser Owner Settings (No code required)
1. Click the **"Edit Details"** button in the navigation bar (or **"Owner Settings"** in the footer).
2. Modify the phone number, pricing cards, weekly timetable, or hero copy in the interactive modal.
3. Click **"Apply Changes"** to save immediately to your browser's local storage.
4. You can also click **"Copy Config JSON"** to export the updated configuration into code.

### Method B: Directly Editing `src/data/businessConfig.ts`
Open `src/data/businessConfig.ts` and update the desired fields:
* **Ticket & Entry Rates:** Update `pricing[].price` and `pricing[].priceNote`.
* **Opening Hours:** Update `scheduleWeekly` array or `openingHoursListing`.
* **Facilities:** Toggle `confirmed` or add new items to `facilities[]`.
* **Photo Gallery:** Add or update photos in the `gallery[]` array.

---

## 3. Launch & Verification Checklist

- [x] **Verified Business Information:** Name, address, phone number, and Google Plus code match user specifications.
- [x] **Telephone Links:** All phone actions use standard `tel:+919417970015`.
- [x] **WhatsApp Integration:** Uses valid clean international number `919417970015` with pre-filled enquiry texts for packages, swimming lessons, and general queries.
- [x] **Google Maps Navigation:** Directions button opens exact search query on Google Maps.
- [x] **Mobile Responsiveness:** Tested and responsive across phone (~360–390px), tablet (~768px), and desktop (1440px) viewports with zero horizontal overflow.
- [x] **Mobile Sticky Bar:** Persistent Call & WhatsApp bar complies with the $\le 15\%$ viewport height limit.
- [x] **Form Validation:** Validates full name and 10-digit Indian mobile number, displaying instant confirmation and direct WhatsApp dispatch.
- [x] **Separate Pools Clarification:** Distinct Family Pool and Children's Pool cards with clear parental supervision requirements.
- [x] **Photo Gallery Lightbox:** Keyboard navigation (Arrow keys, Escape), smooth transition, and alt text.
- [x] **SEO & Schema.org:** LocalBusiness structured data in `index.html`, Open Graph cards, Twitter cards, `robots.txt`, and `sitemap.xml`.
- [x] **Accessibility & Performance:** WCAG AA contrast, focus rings, zero broken images, and smooth interactions.

---

## 4. Tech Stack & Scripts

* **Framework:** React 19 + TypeScript + Vite
* **Styling:** Tailwind CSS v4 with custom brand palette
* **Icons:** Lucide React

```bash
# Start development server
npm run dev

# Build for production
npm run build
```
