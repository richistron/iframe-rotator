
describe('UrlLoader', () => {

  it('should be defined', () => {
    expect(UrlLoader).toBeDefined();
  });

  it('should be a class', () => {
    expect(new UrlLoader).toBeDefined();
  });

  it('fake test', ()=> {
    new UrlLoader('.yep', {
      width: '1300px',
      height: '800px',
      urls: ['http://richistron.com/#blogs', 'http://www.magmalabs.io'],
      delay: 10
    });
  });

});
