<p align="center">
  <img src="public/assets/image.png"  height="128">
  <h2 align="center"><a href="https://color-tailor.vercel.app"> color-tailor </a></h2>
  <p align="center">A simple web app to generate tailwind shades from a base color.</p>
  <p align="center">
   <a href='#'><img src=https://img.shields.io/badge/Maintained%3F-yes-green.svg></img><a/>
  </p>
</p>

## Features
- Generate Tailwind-compatible color shades from any base color  
- Export palettes as JSON, JS, or TS Tailwind config files  
- Live preview of UI components styled with generated shades
  
## Development

Clone the repository, install the dependencies and start the application

```bash
git clone git@github.com:Aj-Seven/color-tailor.git
cd color-tailor
npm install
npm run dev

# For Build and serving static pages
npm run build
npm -g install serve
serve build
```

**Note:** use the `depth` parameter to reduce the clone size and speed up the clone.

```sh
git clone --depth=1 https://github.com/Aj-Seven/color-tailor.git
```

## 🤝 Contributing
Contributions are welcome! Whether it's a bug fix, feature suggestion, or code enhancement — your help makes ColorTailor better for everyone.

**_How to contribute:_**

- Fork this repository
- Create a new branch: `git checkout -b feature/my-feature`
- Make your changes and commit: `git commit -m "Add my feature"`
- Push to your fork: `git push origin feature/my-feature`
- Open a pull request 🚀
