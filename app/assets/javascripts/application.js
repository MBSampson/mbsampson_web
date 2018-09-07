// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require clipboard
//= require jquery3
//= require tippy
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

console.log("Application.js loaded");

$(document).ready(function() {
  setFooterClipboard();
});

function setFooterClipboard() {
  let clipboard = new Clipboard('.clipboard-elem');
  tippy('#footer-clipboard-btn', {
    arrow: true,
    arrowType: 'skinny',
    placement: 'left',
    size: 'large',
    animation: 'scale',
    trigger: 'click'
  });
}

function setNavButtonListeners() {
  const homeBtn = $('#home-btn');
  const aboutBtn = $('#about-btn');
  const projectsBtn = $('#projects-btn');
  let homeContainer = $('#home-container');
  let aboutContainer = $('#about-container');
  let projectsContainer = $('#projects-container');


  // Show or hide containers depending on clicked button

}
