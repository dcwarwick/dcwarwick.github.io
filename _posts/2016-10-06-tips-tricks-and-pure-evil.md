---
layout: post
title:  "Tips, tricks and pure evil"
date:   2016-10-06 12:00:00 +0000
catagories: Dev
Tags: [do, dont, css, html, html, design, new2FED]
addPostCSS: true
---

## FED - Who me?
So you have landed yourself, or been landed in, a web Font End Development role. Well as you are reading this blog there is a high probability that this is either early in your FED career, you are a jack of all trades developer, or you are a non-FED drafted in to plug a resource gap in a project <span class="restrained-rant__ref">A.r.r.1.</span>

<span class="restrained-rant__text">A restrained rant 1: Would you ask an electrician to fit a new floor, a dentist to perform eye surgery or a cat to fetch a stick?</span>

## So What?
Well, here I will write about the tips and tricks of an experienced FED as well as discuss the pure evil you should know about and avoid. Initially, as I have to do some actual work, this post will start small and work its way up to something more useful.

## 1. Always prefer declarative to imperative

In many ways, this is the software embodiment of Occam's razor. You should prefer simpler more robust solutions to more complex error prone ones. In front-end development, this means only using javascript (Go, PHP, c# or any other programming language) when you either cannot achieve something in HTML and CSS or it is complex to do so. <span class="green-red-animate">So if you want text that animates continually between green and red, do not break jQuery out of the box just because it's there.</span>

- http://codepen.io/lee-chase/pen/VKQZYY

OK so I have not implemented the greatest javascript animation loop ever, but hopefully, it demonstrates that writing code is more fragile and complex than the CSS keyframe.

## 2. CSS - Stop using position relative to relatively position
Position relative has a dual purpose in the world of CSS; Firstly to change the position something is rendered, secondly to not be static.

After some scratching of our collective FED heads at work, not unlike the opening scene in the film 2001, we could only come up with two use cases for position relative. Firstly, and 95% of all we use it for is to host something that is positioned absolutely. Secondly it was to tweak, <span class="repeat">I said tweak</span> the position of an element by a pixel or few to line it up. This second usecase largely only applies to images hosted in buttons that we want to keep the shape of.

Here is what not to use position relative for, and the alternatives.
 - http://codepen.io/lee-chase/pen/ozELEm

Here is an example of when it's OK
 - http://codepen.io/lee-chase/pen/LRQRZp

## 3. CSS - Position absolutely
Think I just covered that in above. To position absolutely you need to host an element in a relative or fixed positoin element.

## 4. inline-block heads
Inline blocks are very useful, but they do have a foible for you to find. You see the nice folks that created inline-block figured that you'd be placeing your blocks inline and as a result you'd want space around your inline blocks, much like the spaces between the words of this text. The upshot will be a confused expression on your face when all of your widths add up to 100%, but the content wraps.

Your friend '&lt;!-- --&gt;' is the html comment. In order to remove the space between each inline block you must leave none.

``` html
<div>
  bla bla bla
</div>
<div>
  wah wah wah
</div>
```

Is instead written as

``` html
<div>
  bla bla bla
</div><!--
--><div>
  wah wah wah
</div>
```

alternatively

``` html
<div>
  bla bla bla
</div
><div>
  wah wah wah
</div>
```

or

``` html
<div>
  bla bla bla
</div><div>
  wah wah wah
</div>
```

Here is an example of '&lt;!-- --&gt;' in action

- http://codepen.io/lee-chase/pen/QKQKJV

## 5. If in doubt box-size: border-box

## 6. CSS - Vertical align center
Coming soon...
