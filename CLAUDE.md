# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal/business website for Claes Svensson IT AB. There is no build step, no package manager, and no test suite — the site is plain HTML/CSS served as-is.

## Working with this repo

- Everything the web server serves is in `public/`; nothing outside it is served (`.git`, `cv.odg`, this file). Keep it that way: only files meant to be public go in `public/`.
- `public/index.html` is the entire site content. Edit it directly.
- `public/assets/css` and `public/assets/fonts` are vendored third-party libraries (Bootstrap 5, ionicons) — treat them as read-only unless upgrading a dependency intentionally.
- `public/assets/img` holds site images.
- `public/cv.pdf` is linked directly from the page (`/cv.pdf`) and served at the site root; `cv.odg` is its source.
- There is no local dev server, bundler, or preprocessor. To preview changes, open `public/index.html` directly in a browser or serve the directory with any static file server (e.g. `python3 -m http.server -d public`).

## Hosting

Currently served by FS Data (cPanel), which also hosts the domain's mail. It is moving to the elsetest.com VPS (Hetzner): a clone of this repo in `/home/claessvensson/site` (user `claessvensson`), with Caddy serving `public/`; deploying is then push, and `ssh claessvensson@elsetest.com git -C site pull`. GitHub Pages is not used.

## Notable implementation detail

The footer email and phone number are rendered via inline "email obfuscator" `<script>` blocks (a substitution-cipher decoder) rather than plain text, to deter scraping. If editing contact info, regenerate the obfuscated string rather than hardcoding plaintext into the HTML.
