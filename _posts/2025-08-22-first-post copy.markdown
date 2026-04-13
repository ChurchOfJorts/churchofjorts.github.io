---
layout: post
title:  "First post"
date:   2025-08-22 16:02:45 -0500
categories: Self
---

Reverse engineering is a skill best kept fresh, and there's few better places to practice currently than [crackmes](https://crackmes.one/). 

For today, I wanted to get a quick practice in so I decided to tackle an easy level 1 problem with [Kanax01's Fixed Easy Crackme](https://crackmes.one/crackme/698d2206e2ba6023bfacaa4f). After moving it into our FLARE-VM, we're ready to go and crack it open in Ida. Immediately, in the decompiled main function we can see the program takes an input for a password, loads the string "EasyPassword" into memory, then does a memcmp to compare the two values in memory. This is a great start to a hypothesis that the password here is "EasyPassword".

![IDA Output](20260410145105.png){: width="250"}

To test the hypothesis, we can run the program with a couple attempts. Yep, just like the crackme description. Can't get simpler than this.

![ProgramExecution](/20260410145240.png){: width="250"}
