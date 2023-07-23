/* eslint-disable
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function () {
  //write your code here
};

function domainGenerator() {

  //clear the table first
  clearTable()

  //get the total number of chars from input
  domain_hack_total = getDomainHackTotal();

  let sub_domain = "www."
  let pronoun = ['the', 'our'];
  let adjective = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let top_level_domain = ['.com', '.org', '.cl', '.edu', '.co.uk', '.net', '.gov', '.int'];

  for (pn of pronoun) {
    for (adj of adjective) {
      for (nou of noun) {
        for (tld of top_level_domain) {
          let domain = pn + adj + nou;
          let sub_top_level_domain = "";
          
          if (domain_hack_total < domain.length && domain_hack_total > 0){
            sub_top_level_domain = "." + domain.slice(-domain_hack_total);
            domain = domain.slice(0, -domain_hack_total);
          }

          addNewRow(sub_domain, domain, sub_top_level_domain, tld);
        }
      }
    }
  }
};

function getDomainHackTotal(){
  var domain_hack_total = document.getElementById("domain-hack-input");

  // Get the value of the input as a string
  var input_value = domain_hack_total.value;

  // Convert the input value to a number using parseInt or parseFloat
  var number_value = parseInt(input_value); // For integer numbers
  // var numberValue = parseFloat(inputValue); // For decimal numbers

  return number_value;
}

function clearTable() {
  // Get the table body element
  var table_body = document.getElementById("tableBody");

  // Clear the table by setting its innerHTML to an empty string
  table_body.innerHTML = "";
}

function addNewRow(sub_domain, domain_name, sub_top_level_domain, top_level_domain) {
  var tableBody = document.getElementById("tableBody");
  var newRow = document.createElement("tr");

  // Add data cells to the new row
  var cell1 = document.createElement("th");
  cell1.setAttribute("scope", "row");
  cell1.textContent = sub_domain;
  newRow.appendChild(cell1);

  var cell2 = document.createElement("td");
  cell2.textContent = domain_name;
  newRow.appendChild(cell2);

  var cell3 = document.createElement("td");
  cell3.textContent = sub_top_level_domain;
  newRow.appendChild(cell3);

  var cell4 = document.createElement("td");
  cell4.textContent = top_level_domain;
  newRow.appendChild(cell4);

  // Add the new row to the table body
  tableBody.appendChild(newRow);
};

