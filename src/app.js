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

  //get the number of domains to be displayed
  let domain_num_total = getNumberOfDomains();

  //get the total number of chars from input
  let domain_hack_total = getDomainHackTotal();

  let sub_domain = "www."
  let pronoun = ['the', 'our', 'my', 'your', 'her', 'his', 'their'];
  let adjective = ['great', 'big', 'attractive', 'bald', 'beautiful', 'chubby', 'clean', 'dazzling', 'drab', 'elegant', 'fancy', 'fit', 'flabby', 'glamorous', 'gorgeous', 'handsome', 'long', 'magnificent', 'muscular', 'plain', 'plump', 'quaint', 'scruffy', 'shapely', 'short', 'skinny', 'stocky', 'ugly', 'unkempt', 'unsightly'];
  let noun = ['jogger', 'racoon', 'bird', 'leadership', 'education', 'region', 'resource', 'fishing', 'success', 'sir', 'explanation', 'employment', 'dad', 'presentation', 'activity', 'arrival', 'republic', 'satisfaction', 'village', 'temperature', 'magazine', 'debt'];
  let top_level_domain = ['.com', '.org', '.cl', '.edu', '.co.uk', '.net', '.gov', '.int'];

  let count = 0;

  for (pn of pronoun) {
    for (adj of adjective) {
      for (nou of noun) {
        for (tld of top_level_domain) {

          //exit loops if we have reached the desired shown domains
          if (count >= domain_num_total){
            break;
          }

          let domain = pn + adj + nou;
          let sub_top_level_domain = "";

          if (domain_hack_total < domain.length && domain_hack_total > 0) {
            sub_top_level_domain = "." + domain.slice(-domain_hack_total);
            domain = domain.slice(0, -domain_hack_total);
          }

          addNewRow(sub_domain, domain, sub_top_level_domain, tld);

          count++;
        }
      }
    }
  }
};

function getNumberOfDomains() {
  let domain_num_total = document.getElementById("domain-number-input");

  // Get the value of the input as a string
  let input_value = domain_num_total.value;

  // Convert the input value to a number using parseInt or parseFloat
  let number_value = parseInt(input_value); // For integer numbers

  if (number_value < 0 || !(typeof number_value === 'number') || number_value > 10000 || number_value === undefined || isNaN(number_value)){
    number_value = 0;
  }

  number_value = Math.round(number_value);

  return number_value;
}

function getDomainHackTotal() {
  let domain_hack_total = document.getElementById("domain-hack-input");

  // Get the value of the input as a string
  let input_value = domain_hack_total.value;

  // Convert the input value to a number using parseInt or parseFloat
  let number_value = parseInt(input_value); // For integer numbers

  if (number_value < 0 || !(typeof number_value === 'number' || number_value > 20 || number_value === undefined || isNaN(number_value))){
    number_value = 0;
  }

  number_value = Math.round(number_value);

  return number_value;
}

function clearTable() {
  // Get the table body element
  let table_body = document.getElementById("tableBody");

  // Clear the table by setting its innerHTML to an empty string
  table_body.innerHTML = "";
}

function addNewRow(sub_domain, domain_name, sub_top_level_domain, top_level_domain) {
  let tableBody = document.getElementById("tableBody");
  let newRow = document.createElement("tr");

  // Add data cells to the new row
  let cell1 = document.createElement("th");
  cell1.setAttribute("scope", "row");
  cell1.textContent = sub_domain;
  newRow.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.textContent = domain_name;
  newRow.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.textContent = sub_top_level_domain;
  newRow.appendChild(cell3);

  let cell4 = document.createElement("td");
  cell4.textContent = top_level_domain;
  newRow.appendChild(cell4);

  // Add the new row to the table body
  tableBody.appendChild(newRow);
};

