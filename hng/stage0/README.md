# Profile Card Component - Frontend Wizards Stage 0

A responsive, accessible profile card built with semantic HTML, CSS, and vanilla JavaScript. This project demonstrates modern frontend practices including proper use of ARIA attributes, keyboard navigation, and automated test compatibility.

## 🎯 Project Overview

This profile card displays:
- User name and biography
- Avatar image
- Current time in milliseconds (live updating)
- Social media links
- Hobbies and dislikes lists

All elements include `data-testid` attributes for automated testing compatibility.

## ✨ Features

- **Semantic HTML**: Uses proper semantic tags (`<article>`, `<nav>`, `<figure>`, `<section>`)
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop screens
- **Accessible**: Keyboard navigable with visible focus states
- **Live Time Display**: Real-time millisecond counter using `Date.now()`
- **Test-Ready**: All elements tagged with data-testid attributes

## 📋 Requirements Met

- ✅ All required content with proper data-testid attributes
- ✅ Semantic HTML structure
- ✅ Responsive layout (mobile-first approach)
- ✅ Keyboard accessible navigation
- ✅ Real-time millisecond display
- ✅ External links open in new tabs with security attributes
- ✅ Proper image alt text for accessibility

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox/Grid)
- Vanilla JavaScript

## 📦 Installation & Local Setup

1. **Clone the repository**
```bash
   git clone https://github.com/divinepatrick/profile-card.git
   cd profile-card
```

2. **Open in browser**
```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
```

3. **View the project**
   - Navigate to `http://localhost:8000` (or the port shown)

## Accessibility Features

- All interactive elements are keyboard accessible
- Images include descriptive alt text
- Focus indicators visible on all interactive elements
- Semantic HTML structure for screen readers
- External links include `rel="noopener noreferrer"` for security

## 🧪 Testing

All elements include `data-testid` attributes for automated testing:
```html
data-testid="test-profile-card"
data-testid="test-user-name"
data-testid="test-user-bio"
data-testid="test-user-time"
data-testid="test-user-avatar"
data-testid="test-user-social-links"
data-testid="test-user-hobbies"
data-testid="test-user-dislikes"
```

## 👤 Author

**Divine Patrick**
- GitHub: [@divinepatrick](https://github.com/divinepatrick)
- LinkedIn: [@divinepatrick](https://linkedin.com/in/divinepatrick)
