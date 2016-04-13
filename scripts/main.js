class __iFrameRotator {
  //
  constructor(element, options = {}) {
    this.position = 0;
    this.el      = this.getElement(element);
    this.urls     = options.urls || ['http://richistron.com'];
    this.styles   = options.styles || {};
    this.delay    = options.delay * 1000;
    this.showUrl();
  }
  //
  getElement(el) {
    return (el.get) ? el.get(0) : el;
  }
  //
  showUrl() {
    this.el.innerHTML = `
      <iframe src="${ this.urls[this.position] }"
        ${this.getStyles()}
      ></iframe>
    `;
    this.next();
  }
  //
  getStyles() {
    let styles = Object.keys(this.styles);
    let stylesString = '';
    styles.forEach((i)=> {
      stylesString += `${i}: ${this.styles[i]};`;
    });
    return `style="${stylesString}"`;
  }
  //
  next() {
    this.getPosition();
    setTimeout(()=>{
      this.showUrl();
    }, this.delay);
  }
  //
  getPosition() {
    if (this.position >= (this.urls.length - 1)) {
      this.position = 0;
    } else {
      this.position++;
    }
  }
}
window.iFrameRotator =  __iFrameRotator;
