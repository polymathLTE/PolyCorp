# Polymath Corporation - Portfolio Website

A modern, responsive portfolio website for Emmanuel Lawal, Data Scientist & AI Engineer, built with Next.js 15, TypeScript, and Tailwind CSS

## 🚀 Features

- **Modern Design**: Clean, professional design with a focus on data science and AI expertise
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, optimized images, and fast loading times
- **SEO Friendly**: Comprehensive meta tags, structured data, and sitemap
- **Accessibility**: WCAG AA compliant with proper focus states and screen reader support
- **Contact Form**: Functional contact form with spam protection
- **Case Studies**: Detailed project case studies with technical deep-dives
- **Cookie Consent**: GDPR-compliant cookie consent management

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/page.tsx          # About page with bio, skills, timeline
│   ├── contact/page.tsx        # Contact form and information
│   ├── work/
│   │   ├── page.tsx           # Portfolio with filtering
│   │   └── [slug]/page.tsx    # Individual case studies
│   ├── api/
│   │   ├── contact/route.ts   # Contact form API endpoint
│   │   └── health/route.ts    # Health check endpoint
│   ├── layout.tsx             # Root layout with SEO and analytics
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles and design tokens
├── components/
│   ├── ui/                   # Reusable UI components
│   └── cookie-consent.tsx    # Cookie consent banner
├── public/
│   ├── *.png                 # Project images and assets
│   ├── manifest.json         # Web app manifest
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # Site structure for SEO
└── README.md
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), Poppins (headings)
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd emmanuel-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Updating Projects

Projects are currently stored in static data objects in:
- `app/work/page.tsx` - Project listing
- `app/work/[slug]/page.tsx` - Individual case studies

To add a new project:

1. Add project data to the `projects` array in `app/work/page.tsx`
2. Add corresponding case study data in `app/work/[slug]/page.tsx`
3. Add project images to the `public/` directory
4. Update the `generateStaticParams` function with the new slug

### Updating Personal Information

Key files to update:
- `app/layout.tsx` - SEO metadata and structured data
- `app/about/page.tsx` - Bio, skills, timeline, certifications
- `app/contact/page.tsx` - Contact information
- All pages - Replace "REPLACE_ME" placeholders with actual content

### Adding Blog Posts (Future Enhancement)

The structure supports adding a blog section:
1. Create `app/blog/` directory
2. Add `page.tsx` for blog listing
3. Add `[slug]/page.tsx` for individual posts
4. Consider using MDX for content management

## 🎨 Customization

### Design Tokens

The design system uses semantic tokens defined in `app/globals.css`:
- Primary color: `#0A84FF` (Blue)
- Secondary color: `#FFCA28` (Yellow)
- Neutrals: Various grays and whites

### Typography

- **Headings**: Poppins (400, 500, 600, 700)
- **Body**: Inter (400, 500)
- **Monospace**: Geist Mono

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📧 Contact Form Setup

The contact form requires backend integration. Current options:

### Option 1: Email Service Integration

Update `app/api/contact/route.ts` with your preferred email service:

\`\`\`typescript
// Example with Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@emmanuellawal.dev',
  to: 'lawaltemmanuel@gmail.com',
  subject: `New contact from ${name}`,
  html: emailTemplate
});
\`\`\`

### Option 2: Third-party Form Services

- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to form
- **Netlify Forms**: Add `netlify` attribute to form (if deploying to Netlify)
- **Vercel Forms**: Use Vercel's form handling (if deploying to Vercel)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   \`\`\`bash
   npx vercel
   \`\`\`

2. **Set Environment Variables** (if using email service)
   - `RESEND_API_KEY` or similar
   - Any other API keys needed

3. **Deploy**
   \`\`\`bash
   npx vercel --prod
   \`\`\`

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `out` (if using static export)
3. **Environment Variables**: Set in Netlify dashboard

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Self-hosted with PM2

## 🔧 Environment Variables

Create a `.env.local` file for local development:

\`\`\`env
# Email Service (choose one)
RESEND_API_KEY=your_resend_key
SENDGRID_API_KEY=your_sendgrid_key
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## 📊 Analytics & Privacy

### Google Analytics 4

1. Create GA4 property
2. Add `NEXT_PUBLIC_GA_ID` to environment variables
3. Update cookie consent component to initialize GA4

### Plausible Analytics

1. Add Plausible script to `app/layout.tsx`
2. Update cookie consent accordingly

## ♿ Accessibility

The site follows WCAG AA guidelines:

- **Color Contrast**: 4.5:1 minimum for normal text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Skip Links**: Skip to main content functionality

### Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Form labels are properly associated
- [ ] Color is not the only means of conveying information
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] All interactive elements are keyboard accessible

## 🔍 SEO Optimization

### Implemented Features

- **Meta Tags**: Comprehensive title, description, and Open Graph tags
- **Structured Data**: JSON-LD for Person and Organization schemas
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevent duplicate content issues
- **Image Optimization**: Next.js Image component with lazy loading

### SEO Checklist

- [ ] Update meta descriptions for all pages
- [ ] Add alt text to all images
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `public/` directory
2. **Contact form not working**: Verify API endpoint and email service setup
3. **Styling issues
