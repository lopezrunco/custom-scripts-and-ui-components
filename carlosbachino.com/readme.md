# WordPress module for displaying Event posts

This project demonstrates how to create a WordPress HTML module that dynamically fetches and displays posts from a specified category using JavaScript.

## Setup Instructions

1. **Copy Files to Your Website:**
   - Copy the `main.js` and `style.css` files to a `custom` folder in the root directory of your WordPress website.

2. **Create HTML Module in WordPress:**
   - Create an HTML module in WordPress where you want to display the posts.
   - Paste the following code into the HTML module:

     ```html
     <link rel="stylesheet" href="/custom/style.css">
     <div id="root" data-posts="3"></div>
     <script src="/custom/main.js" type="module"></script>
     ```

   - Adjust the `data-posts` attribute in the `#root` tag to specify the number of posts you wish to display.

## Key Features

- **WordPress Integration:** Uses the WordPress API to fetch posts from a specified category.

- **Dynamic Content:** Renders posts dynamically based on the fetched data.

- **Customization:** Adjusts the number of posts displayed through the `data-posts` attribute in the HTML module.
