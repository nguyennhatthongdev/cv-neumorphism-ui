$(document).ready(function () {
  // fetch html header
  fetch('./layout/header.html').then(function (response) {
    return response.text();
  }).then(function (html) {
    $('#header').html(html)
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });

  // // fetch html footer
  fetch('./layout/footer.html').then(function (response) {
    return response.text();
  }).then(function (html) {
    $('#footer').html(html)
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });
  //
  // // fetch html footer
  // fetch('./component/stars.html').then(function (response) {
  //   return response.text();
  // }).then(function (html) {
  //   $('.bh-stars').html(html)
  // }).catch(function (err) {
  //   console.warn('Something went wrong.', err);
  // });
  //
  // fetch html footer
  fetch('./component/livechat.html').then(function (response) {
    return response.text();
  }).then(function (html) {
    $('body').append(html)
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });


})
