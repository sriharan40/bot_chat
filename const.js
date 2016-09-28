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
  WIT_TOKEN: 'AFA7HI4J45DLMTONDSHVNOCZ5BD6J252',
  FB_PAGE_TOKEN: 'EAACXZB4I0ilMBAC60s1ZB3heYxJ32Bg1N0DeZBjQ4Cu03EdTuzY1dzY2nhzeqCR2iCwVUCbb35spX0jbL4btXCZABHSxO4JfQBn4YAYNqXZBRYfLcDEsC1vQ0pu6iYbEXxGktZBZCynxydC9Kw1ztcatPKeZAuEDD5UfZBkEEWN6begZDZD',
  FB_VERIFY_TOKEN: 'abcde',
};