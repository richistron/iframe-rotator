
describe('it should change the iframe each 1 second', () => {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  let el = document.createElement('div')

  let options = {
    delay: 1,
    urls: [
      'http://richistron.com/#blogs',
      'http://richistron.com/',
      'http://www.magmalabs.io'
    ],
    style: {
      width: '1300px',
      height: '800px',
      border: 'none'
    }
  };

  let getUrl = ()=> {
    return $(el).find('iframe').attr('src');
  };

  let _setTimeout = (fn)=> {
    setTimeout(fn, 1000);
  };

  it('using jquery element', () => {
    expect(()=> {
      let instance = new iFrameRotator( $('<div>'), options );
    }).not.toThrowError();
  });

  it('iframe should change each second', (done) => {
    let instance = new iFrameRotator( el, options );
    expect(getUrl()).toEqual('http://richistron.com/#blogs');
    _setTimeout(()=> {
      expect(getUrl()).toEqual('http://richistron.com/');
      _setTimeout(()=> {
        expect(getUrl()).toEqual('http://www.magmalabs.io');
        _setTimeout(()=> {
          expect(getUrl()).toEqual('http://richistron.com/#blogs');
          done();
        });
      });
    });
  });

  it('styles should be applied', ()=> {
    let _options = Object.assign(options, {
      styles: {
        width: '600px',
        height: '400px',
        border: 'none',
        position: 'absolute'
      }
    });
    let instance = new iFrameRotator( el, _options );
    expect($(el).find('iframe').css('position')).toEqual('absolute');
    expect($(el).find('iframe').css('width')).toEqual('600px');
    expect($(el).find('iframe').css('height')).toEqual('400px');
    expect($(el).find('iframe').css('border')).toEqual('none');
  });
});
