# 🎉 PrestaShop Classic Theme Example hot module replacement, webpack.config.js - for webpack 3.x version.

🔥 **Help attract attention! send a [tweet](https://twitter.com/jlongster) with an appeal to update the [monkey-hot-loader](https://github.com/jlongster/monkey-hot-loader) to the latest version of webpack** 💋

Based on Prestashop 1.7.2.4

## Usage

### Configuration prestashop

1. Clone theme `classic-demo-hot` to you `/themes/` folder.
2. Open in admin panel `Theme & Logo -> Theme`
3. Select `classic-demo-hot` theme
4. Open in admin panel `Advanced Parameters -> Performance`
5. Set `SMARTY -> Cache` : **NO** and Save!
6. done

### Configuration theme

Open [`/themes/classic-demo-hot/_dev/_webpack/util.js`](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/_webpack/util.js) and check all commented properties

### Run

```bash
# go to _dev folder
cd /themes/classic-demo-hot/_dev/

# install dependencies
yarn # or npm i

# run webpack in watch mode
yarn watch # or npm run watch

# open http://localhost:3000/ and check result
```

## Changes (step by step)

### 📈 Updates

`webpack@2` => `webpack@3`

`babel-loader@6` => `babel-loader@7`

`extract-text-webpack-plugin@2` => `extract-text-webpack-plugin@3`

##### Install

```bash
yarn add -D webpack@3 extract-text-webpack-plugin@3 babel-loader@7
```

### 🆕 Added new

#### `browser-sync-dev-hot-webpack-plugin`

Webserver for proxy your php backend.

#### `bs-html-injector`

Browser-sync plugin for injecting HTML changes without reloading the browser.

#### `webpack-dev-middleware`

A development middleware for webpack [read more...](https://github.com/webpack/webpack-dev-middleware)

#### `webpack-hot-middleware`

Webpack hot reloading you can attach to your own server [read mode...](https://github.com/glenjamin/webpack-hot-middleware)

#### `webpack-merge`

It helps to conveniently configure types of configs ([default](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/_webpack/webpack.default.js) / [production](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/_webpack/webpack.development.js) / [development](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/_webpack/webpack.production.js))

```bash
##### Install
# Required
yarn add -D browser-sync-dev-hot-webpack-plugin browser-sync@2 bs-html-injector@3
yarn add -D webpack-dev-middleware@2 webpack-hot-middleware@2 webpack-merge cross-env

# Optional
yarn add -D babel-core@6 webpack-bundle-analyzer hard-source-webpack-plugin node-object-hash del
```

#### Added [multi config](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/tree/master/themes/classic-demo-hot/_dev/_webpack) which is [combined depending on NODE_ENV](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/webpack.config.js)

#### [Updated scripts](https://github.com/retyui/prestashop-1.7-webpack-3-hot-module-replacement/blob/master/themes/classic-demo-hot/_dev/package.json#L7-L8) in `package.json`

### 🆘 Other

[Example Hot Module Replacement for `Webpack 1.x` Prestashop 1.7](https://github.com/retyui/prestashop-1.7-webpack-hot-module-replacement)

[Example Hot Module Replacement for `Webpack 2.x` Prestashop 1.7](https://github.com/retyui/prestashop-1.7-webpack-2-hot-module-replacement)
