class __UrlLoader {
  /*
   * Url Loader
   * @param element [container]
   * @param urls [array of url]
   * @param delay [seconds delay]
   */
  constructor(element, options) {
    this.position = 0;
    this.$el = $(element);
    this.urls = options.urls;
    this.delay = options.delay * 1000;
    this.width = options.width;
    this.height = options.height;
    this.showUrl();
  }

  showUrl() {
    this.$el.html(`
      <iframe src="${ this.urls[this.position] }"
        style="border: 0;
        width: ${ this.width };
        height: ${ this.height };">
      </iframe>
    `);
    this.next();
  }

  next() {
    this.getPosition();
    setTimeout(()=>{
      this.showUrl();
    }, this.delay);
  }

  getPosition() {
    if (this.position >= (this.urls.length - 1)) {
      this.position = 0;
    } else {
      this.position++;
    }
  }

}
window.UrlLoader =  __UrlLoader;
