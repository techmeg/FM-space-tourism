# Frontend Mentor - Space tourism website

![Design preview for the Space tourism website coding challenge](./preview.jpg)

## Overview

This is a completed [Frontend Mentor](https://www.frontendmentor.io) challenge. I did follow along with Kevin Powell's [free course on Scrimba](https://scrimba.com/learn/spacetravel) because I was interested to learn how he might organize the code. Ultimately, I did not love the way the font sizes were organized. It was very confusing to implement, although I could see how a similar system might be helpful in a production enviroment where many engineers were contributing code. It also kind of fought with the Design System Page. I'm happy I learned the strategy, but didn't think this was a great use case.

I had to implement a different JS strategy to replace the images as I was not able to use the hidden attribute for some odd reason, although that strategy worked fine on the articles. I was unfamiliar with tab and tabpanel roles, so am glad to have had that exposure.

### Screenshot

![](./space-screenshot.jpg)

### Links

- Solution URL: [github.com/techmeg/FM-space-tourism](https://github.com/techmeg/FM-space-tourism)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned
I generally tried to write the code before seeing Kevin's solutions unless I had several ideas but wanted to see Kevin's choice. I ended up with a different solution and added a div for getting the line in the header, which I liked.

```css

.line {
    display: none;
}

@media (min-width: 48rem) {

    .line {
        display: block;
        flex-grow: 2;
        height: 1px;
        background: hsl(var(--clr-white)/0.25);
        margin-right: -2.5rem;
        z-index: 5;
    }
}
```
### Useful resources

- [MDN ARIA:tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) - I must have skipped a lesson accidentally because I didn't have a lot of the attributes in the code when starting on the tab replacement section. So I looked up tab roles and voila, practically verbatim what was in Kevin's code. Very helpful.

## Author

- Frontend Mentor - [@techmeg](https://www.frontendmentor.io/profile/techmeg)
