var headerPic = document.querySelectorAll('img.img-fluid.d-block.mx-auto.mt-3')[0];
headerPic.setAttribute('style', 'display:none !important; margin:0 !important;');

var buttons = document.querySelector('#hf-lower > div > div:nth-child(2) > div');
buttons.setAttribute('style', 'display:none !important; margin:0 !important;');

var helloHeader = document.querySelector('#hf-lower > div > div.col-md-6.hidden-sm-down > p');
helloHeader.setAttribute('style', 'display:none !important; margin:0 !important;');

var scheduleBox = document.querySelector('#hf-lower > div > div.col-md-6.hidden-sm-down');
scheduleBox.setAttribute('style', 'width: 100% !important;');

var scheduleContainer = document.querySelector('#hf-session-container');
scheduleContainer.setAttribute('style', 'height: 100% !important;');

var anotherScheduleBox = document.querySelector('#hf-lower');
anotherScheduleBox.setAttribute('style', 'padding-top: 0 !important');

var pageBox = document.querySelector('#page-home-full');
pageBox.setAttribute('style', 'padding-top: 0 !important');