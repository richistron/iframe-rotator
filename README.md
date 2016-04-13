iFrame Rotator
==============

This js libs allows you to create a list of pages and it rotates it after some
time.

## Install

```html
<script src="https://cdn.rawgit.com/richistron/iframe-rotator/master/dist/iframe-rotator.js"></script>
```

## Usage


```javascript
new iFrameRotator($('<div>'), {
  delay: 10,
  urls: ['http://richistron.com/#blogs', 'http://www.magmalabs.io'],
  styles: {
    width: '1300px',
    height: '800px',
    border: 'none'
  }
});
```

See how this works [here](http://g.recordit.co/zKjQqASBiJ.gif)
