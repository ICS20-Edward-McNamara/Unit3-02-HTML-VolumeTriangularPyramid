// Copyright Edward McNamara 2022
// Created by: Edward McNamara
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a triangular pyramid.
 */
function calcAreaClicked () {
  // get user input
  let side_a = parseFloat(document.getElementById('side-a').value)
  let side_b = parseFloat(document.getElementById('side-b').value)
let height = parseFloat(document.getElementById('height').value)
  // area formula
  let area = (1/6)*side_a*side_b*height
  // results
  document.getElementById('area').innerHTML = "The area is " + area.toFixed(2) + "cm<sup>3</sup>"
}
