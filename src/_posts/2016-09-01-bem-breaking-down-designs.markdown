---
layout: post
title:  "BEM - Breaking down designs"
date:   2016-09-01 00:10:10 +0100
catagories: Dev
Tags: [BEM, html, design, new2FED]
addPostCSS: true
---
Recently tacked onto the end of a CSS pre-processor workshop I was running, I threw in a fifteen-minute introduction to BEM. Now I am not sure if this was a comment on the workshop or the BEM introduction but people sat up, they were noticeably more engaged and seemed to hang on every word. OK, now I am over-egging the pudding, but it did make me realise that there are newish web FEDs out there who want a quick start guide to help them be productive as quickly as possible. So here I am with what will hopefully be the first in a series of blogs.

# What has this got to do with getting started?
It will help you break down the designs you are tasked with producing into the rectangular segments your web page is going to be built from.

# What is BEM?
In brief, as you can google as well as I can, BEM is a CSS selector class naming convention. It suggests naming your classes by blocks, elements and modifiers hence BEM. When used correctly you will find that BEM helps:

# Why use BEM?
- Reduce CSS specificity.
- Reduce SCSS depth (I'll come back to SCSS in another post).
- Improves reusability/transferability of your CSS.
- Stipulates that you should not use tag names and IDs for CSS selectors (crikey my drafts folder is filling up).

# What does it look like?

There are various formats, but all boil down to a way of referencing your HTML elements by:
- Block - the section of the page or component the element is owned by.
- Element - the purpose of the element, often a functional name for the element
- Modifier - special cases or states for the element.

My personal preference is for the style defined by Harry Roberts (.scss-lint.yml configuration at the bottom of this post). Which looks like this:

```css
block__element--modifier
```

Note:
- elements are optional, bur frequently used.
- modifiers are optional, but less frequently used.
- blocks, elements and modifiers can be hyphenated to allow verbose names which I would recommend.


## BEMIT
Harry now prefers BEMIT which extends the BEM syntax with suffixes for media queries and a Hungarian notation like prefix. Personally, I find it makes the class names less readable, so while I do add a 'js-' to the start of any javascript selectors, I otherwise stick to BEM.

# In practice

## Structural blocks on a page

Breaking up a page into structural block elements should not be a difficult task, simply draw rectangles around the main blocks on a page. Break out some wax crayons; this will really impress your designer, or magical web based collaboration tool of your choice and get boxy assigning names to blocks as you go.

At this point you can either marvel at the animation skills below to discover the block classes I assigned to the parts of the page below, the landing page on Github, or tap to reveal all including the amazing color scheme.

<div class="blocks-structural__container" tabindex="0">
{% include image.html name="github-page.png" alt="extract from personal github landing page" classes="blocks-structural__image" %}
  <div class="blocks-structural__navigation centered"><span class="blocks-structural__text">header</span></div>
  <div class="blocks-structural__notification centered"><span class="blocks-structural__text centered">notification-panel</span></div>
  <div class="blocks-structural__main centered"><span class="blocks-structural__text">main-content</span></div>
  <div class="blocks-structural__side-panel centered"><span class="blocks-structural__text">side-panel</span></div>
  <div class="blocks-structural__footer centered"><span class="blocks-structural__text">footer</span></div>
</div>

They are...

- header
- notification-panel
- main-content
- aside
- footer

When it comes to creating classes for elements contained in these blocks, they will all start with one of these block names.

## Blocks often are components

Assigning blocks to components is even easier than pages, as the majority of components are blocks. OK, I am sure we can all imagine outlandishly complicated components that require several blocks, but most of the time these are components that fill a substantial portion of a page, and that can be broken down in the same way. Just add the component name somewhere in each of its hyphenated block names.

In the simpler cases your just going to end up with component names like; cool-carousel, snazzy-menu, big-red-button, funky-notification-panel, etc.

## Structural Elements

<div class="blocks-structural__container" tabindex="0">
{% include image.html name="bootstrap-carousel.jpg" alt="Bootstrap carousel from w3schools" classes="blocks-structural__image" %}
  <div class="blocks-structural__navigation centered"><span class="blocks-structural__text">header</span></div>
  <div class="blocks-structural__notification centered"><span class="blocks-structural__text centered">notification-panel</span></div>
  <div class="blocks-structural__main centered"><span class="blocks-structural__text">main-content</span></div>
  <div class="blocks-structural__side-panel centered"><span class="blocks-structural__text">side-panel</span></div>
  <div class="blocks-structural__footer centered"><span class="blocks-structural__text">footer</span></div>
</div>

# .scss-lint.yml configurations
Yes, you should be linting your scss.

```yaml
SelectorFormat:
  enabled: true
  # or 'strict_BEM' or 'hyphenated_lowercase', or 'strict_BEM', or 'snake_case', or 'camel_case', or a regex pattern
  convention: ^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$
  convention_explanation: 'should match Harry Roberts'' style BEM block[__element][--modifier]'
```
