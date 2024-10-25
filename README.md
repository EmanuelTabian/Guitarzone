# Guitarzone webpage

[![Live Version](https://img.shields.io/badge/Live%20Version-Click%20Here-brightgreen)](https://guitarzone.onrender.com)

## Description

A simple, **presentational** website designed for a band or music store. This project served as an initial practice in my front-end development journey. As my first personal project, it focuses on the use of HTML and CSS.

- Initially, there was no **JavaScript** involved, but it later facilitated the implementation of a burger icon functionality, lazy-loading images, and section reveals. This marked the beginning of my JavaScript learning experience.

## Overview

The project showcases a landing webpage with a strong emphasis on semantic HTML and mobile-first design principles. Key aspects include:

- **Semantic HTML**: Writing clean and meaningful HTML code.
- **Responsive Design**: Utilizing media queries to ensure the website is mobile-friendly.
- **CSS Practice**: Understanding the box model and, Flexbox for layout management.
- **JavaScript Integration**: Introducing JavaScript to implement features such as a burger menu, sticky navbar, section reveals on scroll, and lazy loading images.
- **Form Structure**: Demonstrating the semantic structure of an HTML form, though the form itself does not submit data.

This project served as a foundational exercise in front-end development, combining HTML, CSS, and JavaScript to create a functional and visually appealing web application.

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

This project presents several fundamental features that highlight essential beginner front-end development skills.

### Semantic HTML

The project structure adheres to best practices by utilizing semantic HTML elements such as:

- **`nav`**
- **`header`**
- **`section`**
- **`article`**
- **`footer`**

It doesn't rely on `div` and `span` tags solely. This enhances the readability and maintainability of the code. Additionally, the form elements are organized using `fieldset` tags to group related fields, and each input is accompanied by a descriptive `label`, ensuring accessibility and clarity.

For more details about semantic HTML, refer to [this](#https://www.semrush.com/blog/semantic-html5-guide/) article.

### CSS

The styling of the web page is managed through an external **CSS** file, following a mobile-first approach. The CSS invoves class selectors and utilizes **media queries** to apply different styles at various breakpoints:

- **800px**
- **1000px**
- **1200px**

Future enhancements will include transitioning to **SASS**, allowing for multiple **CSS** modules usage.

### Javascript

JavaScript is utilized to enhance the interactivity and user experience of the website. Key functionalities include:

#### Burger Button Options Display:

Toggles the visibility of the navigation menu on smaller screens when the burger icon is clicked.

- Upon clicking the burger button, its opacity transitions to `0`, creating a fade-out effect, while the icon container's display property changes to **block**.
- Clicking the icon container restores its opacity to `0` and the burger button's opacity to `1`.
- A **transition-end** event handler ensures the icon container's display property reverts to `none` once the transition completes.

#### Form submission message render

Displays a confirmation message upon form submission.

- The form and `h6` elements' display styles are set to `none`.
- An overlay element is assigned a `hidden-prompt` class, which transitions its opacity to `0` for a smooth closing effect.
- The confirmation message's text content and style are updated accordingly.

#### Form open/close

Manages the opening and closing of the form modal.

- Based on `add/remove` the `hidden-prompt` class.

#### Smooth scrolling

Implements **smooth scrolling** behavior when navigation links are clicked, for a seamless transition to the target section.

- Utilizes **event delegation** to handle `click` events on the navigation buttons. Based on the `href` attribute of the clicked button, the page smoothly scrolls to the corresponding section with the matching `id`.
- Implements a **guard clause** to ensure the function immediately `returns` if the clicked button does not contain the `nav` class.

#### Lazy-loading Images

Uses the **Intersection Observer API** to load images only when they are about to enter the viewport, improving page load times and performance.

- When the DOM's content gets fully loaded, an **Intersection Observer** is instantiated to monitor all images with the `lazy--img` class.
- Each image is initially assigned a low-resolution `src` and a higher-resolution `data-src`. The `lazy--img` class applies a **blur filter** to the image.
- When `30%` of the image enters the viewport, the `src` attribute is updated to the high-resolution source, and the blur filter is removed upon the image's full load.

#### Sticky nav bar

The navigation bar becomes sticky when the logo enters the viewport, using the **Intersection Observer API**.

- The 'sticky-nav' class is toggled based on the logo's intersection with the viewport.
- The root margin is configured to the height of the navigation bar, ensuring it becomes sticky when the logo container is partially visible.
- To prevent execution on mobile devices, the target is unobserved when the window's inner width is less than 800px.

#### **Section Reveal**

Reveals sections with a fade-in effect as they come into view, also using the Intersection Observer API.

- Observes all `section` elements on the page.
- When 10% of a section intersects with the viewport, the 'hidden-section' class is removed. The translation effect is managed using the `CSS transform` property:
  ```CSS
  .hidden--section {
      opacity: 0;
      transform: translateY(3rem);
  }
  section {
      transition: transform 1s, opacity 1s;
  }
  ```
- Sections are unobserved after being revealed to optimize performance and prevent redundant executions.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EmanuelTabian/guitarzone-website.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd guitarzone-website
   ```
3. **Install live-server:**

   ```bash
   npm install -g live-server
   ```

4. **Run the project using live-server:**
   ```bash
   live-server
   ```

Your application should now be running on `http://localhost:your-localhost-port`.

- The app can simply run by opening the `index.html` file in a browser.
- Using `live-server` is recommended because it provides a quick and efficient way to serve your project with **live reloading** capabilities, ensuring that any changes made to the code are immediately reflected in the browser without the need for manual refreshes.
