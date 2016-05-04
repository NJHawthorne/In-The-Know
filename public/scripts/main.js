console.log('js working');
console.log('another js thing');

filepicker.setKey('ABF95lzYQqNV2ewYLYYQyz');

filepicker.pick(
 {
    mimetype: 'image/*',
    container: 'window',
    services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
  },
  function(test){
    console.log(JSON.stringify(test));
  },
  function(FPError){
 	console.log(FPError.toString()); //- print errors to console
  }
);