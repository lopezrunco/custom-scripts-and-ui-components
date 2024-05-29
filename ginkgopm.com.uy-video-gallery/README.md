# React + TypeScript + Vite

Simple web app that shows a video gallery to authenticated users.

### Create and install the app

Create the app using react, typescript & vite:

```sh
  npm create vite@latest app-name -- --template react-ts
```

Navigate to the app directory:

```sh
  cd my-react-app
```

Install dependencies:

```sh
  npm i
```

Start development server:

```sh
  npm run dev
```

### Instructions

This gallery operates embedded within an iframe tag, which sends an 'eventYear' parameter to the app. Depending on this parameter, the app will fetch the corresponding data.

```html
  <iframe
    width="100%"
    height="100%"
    src="http://localhost:5173/?eventYear=2024"
    frameborder="0"
  ></iframe>
```

This is the CSS code for the iframe

```css
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  iframe {
    position: absolute;
    left: 0px;
    width: 100%;
    top: 0px;
    height: 100%;
  }
```
