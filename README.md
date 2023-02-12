# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://github.com/danielthane/interactive-rating-component-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this project I reinforced my recent studies with keeping state in an app and using this to influence styles. I also used some arrow functions and template literalls in order to keep the code as clean as possible. Here is one of my favourite implementations of an arrow funstion in my code!

```js
document.querySelector(".submit").addEventListener("click", () => {
  if (clicks > 0) {
    ratingsCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  }
});
```

### Continued development

I still feel that even after a number of these projects, I'm probably the least comfortable with CSS still and this is definitely an area for me to continue developing.

### Useful resources

- [fjolt article](https://fjolt.com/article/javascript-multiple-elements-addeventlistener) - This helped me to add event listeners to multiple elements, a skill which I have done once in the past but really needed a reminder!!

## Author

- Linkedin - [Daniel Thane](https://www.linkedin.com/in/daniel-thane-924576135/)
- Frontend Mentor - [@danielthane](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [danielthane](https://github.com/danielthane)
