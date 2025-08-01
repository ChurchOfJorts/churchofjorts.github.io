
---
layout: page
title: Blog
---

Welcome to the blog. Here's a feed of my latest thoughts and findings.

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%b %d, %Y" }}</li>
  {% endfor %}
</ul>
