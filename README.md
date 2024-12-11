# ch-slider
A slider plugin for smoother sliding.

## For local testing & development

- Can run on NPM 10.2.4, Node v21.2.0
- Clone the repo and run `npm install`
- Run `npm start` to start up the webpack server for live reload.


### How to use

At the moment all styles are managed in webflow.
The html should have the following structure (the classes are important):

#### Minimal setup
```html
<div class="embla">
    <div class="embla__viewport">
        <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div>
</div>
```

#### Extra configuration
The following attributes can be added to the `.embla` element
- `data-loop` - This makes the slide use infinite loop
- `autoplay` - This makes the slide automatically slide
- `containScroll` - This makes the slide centered in the container if needed
- `classnames` - This enables extra classes on the slides, like `.is-in-view`, useful for styling
- `clickable` - If this is on, the user can click on other slides and the slider will go to that.

#### With Nex & Prev Buttons (Optional)

Add this inside the `.embla` element:

```html
 <div class="embla__arrows">
    <button class="embla__prev">Prev</button>
    <button class="embla__next">Next</button>
 </div>
```

#### With thumbnails (Optional)

At the moment all styles are managed in webflow.
Add this inside the `.embla` element:

```html
<div class="embla-thumbs">
    <div class="embla-thumbs__viewport">
        <div class="embla-thumbs__container">
            <div class="embla-thumbs__slide embla-thumbs__slide--selected">
                <button type="button" class="embla-thumbs__slide__number">
                    1
                </button>
            </div>
            <div class="embla-thumbs__slide">
                <button type="button" class="embla-thumbs__slide__number">
                    2
                </button>
            </div>
            <div class="embla-thumbs__slide">
                <button type="button" class="embla-thumbs__slide__number">
                    3
                </button>
            </div>
        </div>
    </div>
</div>
```

#### Recommend styles to start with

For the main slider.

`flex: 0 0 100%;` -> the last number controls the slide size.

```css
.embla {
    overflow: hidden; 
}

.embla__container {
    display: flex;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
```

For the thumbnails

```css

  .embla-thumbs__viewport {
    overflow: hidden;
  }
  .embla-thumbs__container {
    display: flex;
  }
  .embla-thumbs__slide {
    flex: 0 0 22%;
    min-width: 0;
  }
```

