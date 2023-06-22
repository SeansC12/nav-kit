## What can nav-kit do?
1. Quick prototyping of a Navbar
2. User sign in/up forms

## Quick prototyping of a NavBar
> For the NavBar component, **nav-kit only handles positioning**.

Because nav-kit only handles positioning, it gives you great control to add your custom components and features to your NavBar. This makes it easily extensible and customisable.

### Let's go!
Export a component called `NavBar`
```javascript
import { NavBarWrapper, Favicon, Button } from "nav-kit/dist/NavBar";

export default function NavBar() {
  return (
    <NavBarWrapper appendClassName="bg-[#1C5253]">
      <Favicon horizontalPosition="left" src={logo} width={50} height={50} />
      <Button horizontalPosition="right" appendClassName="bg-[#C3EB78] text-black" href="/login" displayText="Login" />
    </NavBarWrapper>
  )
}
```
Then, in `layout.js` in the app-dir, I imported the NavBar and rendered it.
```javascript
...
import NavBar from '@/components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <NavBar /> {/* component (code above) */}
        </header>
        <main className={`${inter.className}`}>{children}</main>
      </body>
    </html>
  )
}
```
Result:

<img width="1440" alt="image" src="https://github.com/SeansC12/nav-kit/assets/88256324/8747f99b-9683-4cee-9fcf-b4bd53d62877">

- `NavBarWrapper` component will handle the background and the overall wrapper for all the NavBar items
- `Favicon` is a pre-built component, using Next.js's `<Image />` component, displaying the favicon of a website
- `Button` is a pre-built (headless) component, which allows you to horizontally align the button of your choice (it is like this because it is common to have a right-aligned "Login" button for example)

### Customisability
#### `appendClassName` prop
This prop allows you to add any styles on top of the pre-written styles for that component. This allows you to add classes such as, background colour etc.

If your `appendClassName` has classes that are the same as the pre-written styles, it will override the pre-written styles. So have fun playing around with the components and making it truly yours!

#### The structure of `nav-kit`
`nav-kit` is packaged in a way such that I only expose the components, you build it yourself. This is similar to me giving you the tools instead of the finished product, because I want you to make your NavBar look like yours, and have great potential for customisability.

With this structure, you can always add any component you want. Following the previous example,

```javascript
import { NavBarWrapper, Favicon, Button } from "nav-kit/dist/NavBar";

function NavBar() {
  return (
    <NavBarWrapper appendClassName="bg-[#1C5253]">
      <Favicon horizontalPosition="left" src={logo} width={50} height={50} />
      <input className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[50vw] h-[50%] bg-gray-400 text-black rounded-md px-2 py-1" />
      <Button horizontalPosition="right" appendClassName="bg-[#C3EB78] text-black" href="/login" displayText="Login" />
    </NavBarWrapper>
  )
}
```
I added an `input` component, for a search bar. The result:

<img width="1440" alt="image" src="https://github.com/SeansC12/nav-kit/assets/88256324/d9d6556d-6ef7-4814-98be-cdb576457200">

> This is true customisability. You can opt in to any component you want, no one's going to force you to have this certain component etc. Everything is opt-in, easily extensible. Remember, **`nav-kit`'s `NavBar` only handles positioning**.

