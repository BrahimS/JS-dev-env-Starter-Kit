
import '../sass/index.sass';

function test() {
  /* eslint-disable no-console */
  return console.log('Hello world');
}
test();

const addH1 = () => {
  const headline = document.createElement('h1');
  headline.innerText = 'Hello World';
  document.body.appendChild(headline);
}
addH1();

