# 📝 Next Blog Frontend

<div align="center">
  <img src="public/logo.jpg" alt="Next Blog Logo" width="200"/>
  <p><em>A modern, responsive blog platform built with Next.js</em></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## ✨ Features

### 🎯 **Core Functionality**

- **📖 Dynamic Blog Reading** - Browse and read engaging blog posts with beautiful typography
- **🏠 Homepage Hero Section** - Eye-catching landing page with featured posts
- **📱 Responsive Design** - Seamless experience across all devices
- **🎨 Modern UI Components** - Built with shadcn/ui for consistent design
- **⚡ Performance Optimized** - Server-side rendering with Next.js 15

### 🔧 **User Experience**

- **🧭 Intuitive Navigation** - Clean navbar with mobile-friendly sheet navigation
- **🔍 Blog Discovery** - Featured posts on homepage and comprehensive blog listing
- **👤 Author Profiles** - Author information with verification badges
- **📊 View Tracking** - Blog post view counts and engagement metrics
- **🌙 Dark Mode Support** - Built-in theme switching capabilities

### 🛠️ **Admin Dashboard**

- **📝 Content Management** - Dashboard for blog creation and management
- **🔐 Admin Panel** - Dedicated admin layout with sidebar navigation
- **➕ Blog Creation** - Intuitive blog creation interface
- **📈 Analytics Ready** - Framework for tracking and analytics

---

## 🏗️ Project Structure

```
next_blog_frontend/
├── 📁 src/
│   ├── 📁 app/                      # Next.js 15 App Router
│   │   ├── 📄 layout.tsx           # Root layout with fonts & metadata
│   │   ├── 📁 (public)/            # Public route group
│   │   │   ├── 📄 page.tsx         # Homepage with hero & featured posts
│   │   │   ├── 📁 blogs/           # Blog listing & detail pages
│   │   │   └── 📁 about/           # About page
│   │   └── 📁 (dashboard)/         # Admin dashboard route group
│   │       └── 📁 dashboard/       # Dashboard pages
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 📁 modules/             # Feature-specific components
│   │   │   ├── 📁 Blogs/           # Blog-related components
│   │   │   └── 📁 Home/            # Homepage components
│   │   ├── 📁 shared/              # Shared layout components
│   │   │   ├── 📁 Navbar/          # Navigation components
│   │   │   ├── 📄 Footer.tsx       # Site footer
│   │   │   └── 📄 Sidebar.tsx      # Dashboard sidebar
│   │   └── 📁 ui/                  # shadcn/ui components
│   ├── 📁 lib/                     # Utility functions
│   └── 📁 types/                   # TypeScript type definitions
├── 📁 public/                      # Static assets
└── 📄 Configuration files          # Next.js, TypeScript, Tailwind configs
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **Bun** (package manager) or **npm**/**yarn**
- **Git**

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sufiansar/next_blog_frontend.git
   cd next_blog_frontend
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   NEXT_PUBLIC_BASE_API=your_api_endpoint_here
   ```

4. **Run the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🔨 Available Scripts

```bash
# Development with Turbopack
bun dev

# Production build
bun run build

# Start production server
bun start

# Lint code
bun run lint
```

---

## 🛠️ Tech Stack

### **Frontend Framework**

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/)** - Component variant management

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Bun](https://bun.sh/)** - Fast package manager and runtime
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

### **Fonts**

- **[Geist](https://vercel.com/font)** - Modern font family by Vercel

---

## 📐 Architecture

### **Route Groups**

- **`(public)`** - Public-facing pages (homepage, blogs, about)
- **`(dashboard)`** - Admin dashboard with authentication

### **Component Organization**

- **`modules/`** - Feature-specific components (Blogs, Home)
- **`shared/`** - Reusable layout components (Navbar, Footer, Sidebar)
- **`ui/`** - Base UI components from shadcn/ui

### **Key Features**

- **Server Components** - Optimized rendering with React Server Components
- **Image Optimization** - Next.js Image component with remote patterns
- **Type Safety** - Full TypeScript integration
- **Responsive Design** - Mobile-first approach with Tailwind CSS

---

## 🎨 Design System

### **Color Scheme**

- **Primary**: Elegant crimson depth gradient background
- **Neutral**: Gray scale for text and borders
- **Accent**: Blue for interactive elements

### **Typography**

- **Headings**: Geist Sans for clean, modern look
- **Code**: Geist Mono for technical content
- **Body**: Optimized for readability across devices

### **Components**

- **Blog Cards** - Hover effects with image scaling
- **Navigation** - Fixed navbar with rounded design
- **Author Profiles** - Avatar with verification badges
- **Responsive Layout** - Grid systems adapting to screen size

---

## 🌟 Key Components

### **BlogCard**

Beautiful blog preview cards with:

- Thumbnail images with hover effects
- Author information with verification
- View counts and engagement metrics
- Smooth hover animations

### **Hero Section**

Striking homepage hero featuring:

- Gradient background design
- Compelling call-to-action
- Responsive typography
- Clean, modern layout

### **Navigation**

Intuitive navigation system:

- Fixed position with backdrop
- Mobile-responsive sheet menu
- Smooth transitions
- Clean visual hierarchy

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Use conventional commit messages
- Test your changes thoroughly
- Ensure responsive design compatibility

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **[Live Demo](https://your-demo-link.com)** - See the application in action
- **[API Documentation](https://your-api-docs.com)** - Backend API reference
- **[Design System](https://your-design-system.com)** - Component documentation

---

## 📞 Support

If you have any questions or need help, please:

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/sufiansar/next_blog_frontend/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/sufiansar/next_blog_frontend/discussions)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/sufiansar">Md. Abu Sufian</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
