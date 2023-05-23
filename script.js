//Makes all javascript wrapped in jquery
$(function () {
  let currentDay=dayjs().format('dddd HH:mm')
  let currentHour = dayjs().format('H');
  let saveButtons = $('.saveBtn');
  let timeBlocks = $('.time-block');
  let currentDay2=document.querySelector('#currentDay')
 

  //uses save button to save local storage text
  saveButtons.on('click', function() {
    const timeBlock = $(this).closest('.time-block');
    const id = timeBlock.attr('id');
    const userInput = timeBlock.find('.description').val();
    localStorage.setItem(id, userInput);
  });


  // Prints local storage text
  timeBlocks.each(function () {
    const id = $(this).attr('id');
    const savedUserInput = localStorage.getItem(id);
    if (savedUserInput) {
      $(this).find('.description').val(savedUserInput);
    }
  });

  timeBlocks.each(function () {
  var idHour = $(this).attr('id');
  blockHour = parseInt(idHour.split('-')[1]);
  if (blockHour == currentHour) {
    $(this).addClass('present');
  }
  else if (blockHour < currentHour) {
    $(this).addClass('past');
  }
  else
    $(this).addClass('future');
});

currentDay2.innerHTML=currentDay;

});