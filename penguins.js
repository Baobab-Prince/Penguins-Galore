console.log('Penguins of the world UNITE!');

let filenames = [
  'penguin1.jpg',
  'penguin2.jpg',
  'penguin3.jpg',
  'penguin4.jpg',
  'penguin5.jpg',
  'penguin6.jpg',
  'penguin7.jpg',
  'penguin8.jpg',
  'penguin9.jpg',
  'penguin10.jpg',
  'penguin11.jpg',
  'penguin12.jpg',
  'penguin13.jpg',
  'penguin14.jpg',
  'penguin15.jpg',
  'penguin16.jpg',
  'penguin17.jpg',
  'penguin18.jpg',
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'penguins/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
