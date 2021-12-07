Frontend Mentor - Huddle landing page with curved sections solution
This is a solution to the Huddle landing page with curved sections challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Screenshot
Links
My process
Built with
What I learned
Author
Overview
The challenge
Users should be able to:

View the optimal layout for the site depending on their device's screen size
See hover states for all interactive elements on the page
Screenshot
Desktop preview screenshot Mobile preview screenshot

Links
Live Site URL: Live site URL here
My process
Built with
Semantic HTML5 markup
CSS custom properties
Flexbox
CSS Grid
What I learned
This was a nice challenge. I practiced my CSS skills and I tried to have a good code organization. I learned how to work with CSV files. I learned about some HTML5 tags, such as main, footer and picture (when working with different images based on the screen size).

<picture>
  <source
    media="(min-width: 601px)"
    srcset="./images/bg-footer-top-desktop.svg"
  />
  <source
    media="(max-width: 600px)"
    srcset="./images/bg-footer-top-mobile.svg"
  />
  <img
    src="./images/bg-footer-top-desktop.svg"
    alt="Footer section top desktop"
    style="display: block;"
  />
</picture>
Author
Frontend Mentor - @DianaChirita
Twitter - @dianaa_elena
