# AIKŌ Matcha — GitHub Pages Website

A lightweight, responsive, multi-page website for AIKŌ Matcha. It includes Home, Shop All, About Aikō, Contact, and individual Hinata and Shinrin product pages. Ordering is inquiry-based; this project does not include a cart, payment processing, or online checkout.

## Files

- `index.html` — Home
- `shop.html` — Shop All
- `about.html` — About Aikō
- `contact.html` — Contact and inquiry form
- `products/hinata.html` — Hinata product page
- `products/shinrin.html` — Shinrin product page
- `assets/styles.css` — Shared styling
- `assets/script.js` — Mobile navigation and inquiry form behavior
- `assets/hinata.svg`, `assets/shinrin.svg` — Replaceable product-art placeholders

## Before publishing

1. Open `assets/script.js`.
2. Replace `aikomatchaph@gmail.com` with the email address that should receive inquiries.
3. Replace `https://www.instagram.com/aikomatchaph?exln=MWJ1NjIweXZlMHRxcg==` with the official AIKŌ Instagram profile URL.
4. Replace the illustrated placeholder product artwork in `assets/` with your actual product photography if desired. Keep the same filenames (`hinata.svg` and `shinrin.svg`) or update the image paths in the HTML files.
5. Review product descriptions, prices, shipping terms, and contact details before publishing. Current prices and product descriptions were taken from the publicly visible AIKŌ Shopify catalog at the time this starter was prepared.

## Publish with GitHub Pages

1. Sign in at [GitHub](https://github.com/) and create a new repository, for example `aiko-matcha-website`.
2. Set the repository to **Public** (or confirm your GitHub plan supports Pages for a private repository).
3. On the repository page, choose **Add file → Upload files**.
4. Upload the contents of this project folder — upload `index.html`, `shop.html`, `about.html`, `contact.html`, the `products` folder, and the `assets` folder. Do not upload only the ZIP file.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Choose branch **main** and folder **/(root)**, then click **Save**.
9. Wait for GitHub Pages to finish publishing. The Pages screen will show your website address, usually `https://YOUR-USERNAME.github.io/aiko-matcha-website/`.

## Test the site

Open the GitHub Pages URL and test every navigation link, both product pages, the mobile menu, and the inquiry form. The inquiry form opens the visitor's default email app; it does not send or store messages by itself. For a form that submits directly online, connect a form service or backend before launch.

## Updating the website

Edit the relevant HTML/CSS/JS file in GitHub and commit the change. GitHub Pages will rebuild the site automatically. Keep the folder structure intact so links and images continue to work.

## Important

This GitHub Pages website is separate from Shopify. It does not sync inventory, product availability, customer data, or orders with Shopify. The existing Shopify store remains unchanged. Since ordering is inquiry-based as requested, customers should contact AIKŌ directly rather than use a checkout flow.


## Brand color palette

The site uses the palette from the existing AIKŌ Matcha Shopify collection page: white `#FFFFFF`, deep green `#405B43`, ink `#263329`, soft sage `#E8ECE3`, warm cream `#F8F7F1`, muted text `#777D72`, and light borders `#E6E6DE`. Shared colors are controlled in `assets/styles.css` under `:root`.
