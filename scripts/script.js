'use strict';
const d = document,
  $btnShow = d.getElementById('btnShow');

d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

const eventListeners = () => {
  $btnShow.addEventListener('click', handleShow);
};

const handleShow = () => {
  const $navbar = d.getElementById('navbar');
  const $social = d.getElementById('social');
  $navbar.classList.toggle('show');
  $social.classList.toggle('show');
};
