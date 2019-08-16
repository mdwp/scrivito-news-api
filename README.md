# Scrivito News API
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A React component/Scrivito widget which shows how to work with external REST-APIs.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-news-api/master/news-api-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-news-api
```

Import the widget in your javascript `src/Widgets/index.js`.

Add this line to your index.js:

```js
import "scrivito-news-api";
```

## Widget Configuratiom
First you need an API-Key from https://newsapi.org/register.
You can save the Key in the widget properties. Also choose a category for the News the widget should render.

## Widget properties

In the widget properties you can set:
- API key
- News category