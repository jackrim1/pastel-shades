# pastel-shades

## _Color your divs to make them easier to wrangle_

Wrangling css can sometimes drive you to madness, coloring the background of each element helps immensely.

Don't forget to remove before pushing to production!

Before:

![Before](https://i.ibb.co/w0m6h8w/pre-color.png)


After:

![After](https://i.ibb.co/ynCNXRv/colored.png)

### How to use

To use simply place the attribute `pastel` within a div and all of its children will have their background colored too.


```html

  <div pastel>
    <div>
      <div>
      </div>
    </div
  </div

```


### Installation

Run:

`npm install pastel-shades`

or

`yarn add pastel-shades`

Then in your js set-up:

```js

const pastel = require("pastel-shades")
pastel.pastelStart();

```

