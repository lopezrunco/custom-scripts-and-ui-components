## Custom scripts valuar.com.uy website

### Instructions (custom-scripts.js & custom-styles.css files)

- Add the files custom-scripts.js & custom-styles.css files to the root directory
- Go to the Web Administrator and then to Templates Styles and look for the default template
- Go to "Template options" and then to the "Custom code" tab
- In the "Custom CSS Files" section paste this

```sh
https://domain/custom-styles.css
```

- In the "Custom JS Files" section paste this

```sh
https://domain/custom-scripts.js
```

<hr/>

## Home page styles instructions (home-page-styles.css file)

- Go to the Web Administrator and in the Page Builder plugin look for the "Home Page"
- Search for the Custom CSS section and paste the styles of the file home-page-styles.css

<hr/>

## Home page video player Instructions (video-player folder)

- Add the folder video-player to the root directory
- Go to the Web Administrator and in the Page Builder plugin look for the "Home Page"
- In "Novedades" section, create a CustomHTML addon and paste this iframe

```html
<iframe
  src="https://domain/video-player/"
  style="border:0px #ffffff none;"
  name="myiFrame"
  scrolling="no"
  frameborder="1"
  marginheight="0px"
  marginwidth="0px"
  width="100%"
></iframe>
```

- In the Styles tab of the addon, paste this styles

```css
iframe {
  height: 900px;
}
@media screen and (min-width: 1200px) {
  iframe {
    height: 450px;
  }
}
```
