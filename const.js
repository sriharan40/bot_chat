'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: 'ALDWUNJUEN3LSK327C53BS76LLHKENT2',
  FB_PAGE_TOKEN: 'EAACXZB4I0ilMBAJvsYWp2y6zJTlVh4B2y7KZBMlIJYoCrHdUodSml6jlPnmvum2MKZCntx1RlcHbZBgzEoz7lmokda327gTNe3bYBEZBbtYYa9xRzHTvSLg56ifYhdwwUYk1f4x3IuImgmMvyMLWSLretoAPocTzYrApZB5ng9MAZDZD',
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};