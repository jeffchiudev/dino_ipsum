import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import DinoIpsum from './js/dinoApiCall.js';

$(document).ready(() => {
  const mysteryDinosaur = DinoIpsum.getMyDino();
  $('#mystery').append
  $('#letter-guess').click(function() {
    let letter = $('#letter').val();

  })
});