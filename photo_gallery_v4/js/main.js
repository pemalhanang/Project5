let photoList = ["Hay Bales", "Lake", "Canyon", "Iceberg", "Desert", "Fall", "Plantation", "Dunes", "Countryside Lane", "Sunset", "Cave", "Bluebells"];

$('photos').each(function () {
  let caption = $(this).children().attr('data-title').toLowerCase();
  photoList.push(caption);
});

$('.search').keyup(function() {
  const request = $('.search').val().toLowerCase();
  
  for (let i = 0; i < photoList.length; i += 1) {
  let photo = photoList[i].toLowerCase();
  let photos = document.querySelectorAll('.photo');
    if(photo.indexOf(request) < 0) {
      photos[i].style.display = 'none';
} else {
      photos[i].style.display = 'block';
}
}
});