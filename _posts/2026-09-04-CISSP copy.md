---
layout: post
title:  "Power in the Shell: Learning PowerShell by Malware"
date:   2026-09-04 14:21:45 -0500
categories: Homelab
---

I gave a presentation yesterday at my local DEFCON group on my recent personal project of looking at a bunch of malware that was written in PowerShell. The obfuscation techniques used by PowerShell malware made me realize that there was a lot about PowerShell I didn't know, and clearly more functionality under the hood than I'd ever encountered in my usage of PowerShell for automation.

Link to watch: (Power in the Shell)[https://www.youtube.com/live/omA6IVo5It8]
Talk abstract: PowerShell is Microsoft's modern command shell built on .NET, combining the best features of popular shells while accepting and returning .NET objects instead of plain text. It comes pre-installed on every Windows computer (66.5% of the desktop market) and is widely known for task automation and cross-platform support as of PowerShell 7. Its deep integration with the Windows OS, access to the Win32 API, and ability to execute code directly in memory make it extraordinarily powerful in Windows environments.

In this talk, we'll explore PowerShell's capabilities through the lens of real malware samples — examining how attackers use it and what those techniques reveal about what PowerShell is truly capable of.