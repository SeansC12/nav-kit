<p align="center">
  <img src="https://github.com/SeansC12/nav-kit/assets/88256324/e6b5b687-ef7c-498d-a48c-ca75974fdd93" width="20%" height="20%"></img>
</p>

<h1 align="center">
  nav-kit
</h1>

*A headless component library, focused on the quick prototyping of a NavBar, tightly coupled with Supabase's user authentication.*
> Built for applications running on Next.js 13 and TailwindCSS

## Documentation

## Getting started

### 1. Installation
nav-kit is is available as an **[npm package](https://www.npmjs.com/package/nav-kit)**

**npm:**
```bash
npm i nav-kit
```

**yarn:**
```bash
yarn add nav-kit
```

### 2. Getting it up and running
#### 1. Enabling TailwindCSS for the npm package
Insert this line
```javascript
'./node_modules/nav-kit/dist/**/*.{js,ts,jsx,tsx,mdx}'
```
into your `tailwind.config.js` file
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/nav-kit/dist/**/*.{js,ts,jsx,tsx,mdx}' // add this line
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
```
#### 2. (Optional) Setup TailwindCSS Intellisense on `appendClassName` attribute (which you will be using a lot)

(in Visual Studio Code)
1. Firstly, use command `Command + Shift + P` on Mac or `Control + Shift + P` on Windows.
2. Then type "Preferences: Open User Settings (JSON)".
3. This will direct you to you to `settings.json`
4. In your `settings.json`, add the following JSON object
```json
  "tailwindCSS.classAttributes": [
    "appendClassName",
    "className",
    "ngClass",
    ".*Styles"
  ],
```
