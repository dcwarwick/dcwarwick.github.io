---
layout: post
title:  "BEM - Breaking down designs"
date:   2016-09-01 00:10:10 +0100
catagories: Dev
Tags: [BEM, html, design, new2FED]
addPostCSS: true
---
Recently tacked onto the end of a CSS pre-processor workshop I was running, I threw in a fifteen-minute introduction to BEM. Now I am not sure if this was a comment on the workshop or the BEM introduction but people sat up, they were noticeably more engaged and seemed to hang on every word. OK, now I am over-egging the pudding, but it did make me realise that there are newish web FEDs out there who want a quick start guide to help them be productive as quickly as possible. So here I am with what will hopefully be the first in a series of blogs.

# What is BEM?
In brief, as you can google as well as I can, BEM is a CSS selector class naming convention. It suggests naming your classes by blocks, elements and modifiers hence BEM. When used correctly you will find that BEM helps:
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
<div class="blocks-structural__container">
{% include image.html name="github-page.png" alt="extract from personal github landing page" classes="blocks-structural__image" %}
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



You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
