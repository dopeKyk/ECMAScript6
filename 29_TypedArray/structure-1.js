"use strict";
debugger;

let itemObj = {code: "book", desc: "자바스크립트",
               qty: 10, price: 20, amount: 200};

let bufferObj = new ArrayBuffer(40);

let codeObj = new Uint8Array(bufferObj, 0, 10);
for (var k = 0; k < itemObj.code.length; k++){
  codeObj.set([itemObj.code.charCodeAt(k)], k);
};


let dummy;
