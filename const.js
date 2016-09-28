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
  FB_PAGE_TOKEN: 'EAAEcEkKVmnIBAFHj0WVpjyDkgZCMKRjOz2EZCMm2ovWxyVxl5NcJmURWsNbVxRZCPP0BZCEIXfSuTRk2tcUkJLy4Mu4LPeZCZCI2HfjgOM5b0OJOExZCIfPfY3WqhKXwmotj90WQ8DB3mS9M4keW6cBRUVK41yhzVl3mFZApq1zaxwZDZD',
  FB_VERIFY_TOKEN: 'abcde',
};