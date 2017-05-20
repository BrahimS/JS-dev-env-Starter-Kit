import { expect } from 'chai';
//import JSDOM from 'jsdom';
//import fs from 'fs';

describe('first test', () =>  {
  it('should pass', () => {
    expect(true).to.equal(false);
  });
});

//describe('index.html', () => {
//  it('should say Hello', (done) => {
//    const index = fs.readFileSync('./src/index.html', "utf-8");
//    JSDOM.env(index, function(err, window) {
//      const h1 = window.document.getElementsByTagName('h1')[0];
//      expect(h1.innerHTML).to.equal("Hello World");
//      done();
//      window.close();
//    });
//  });
//});
