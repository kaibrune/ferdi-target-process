"use strict";

const path = require('path');
module.exports = (Ferdi) => {
  const getMessages = () => {
    
    var output=0;
    $('.ConversationList').find('.ConversationListItem--Counter').each(function () {
        output += parseInt(this.innerHTML);
    });
    const directMessages = output;

    Ferdi.setBadge(directMessages);
  }

  Ferdi.loop(getMessages);

  
  Ferdi.injectCSS(path.join(__dirname, 'style.css'));
}