let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let calc = document.getElementById("calc");

let result = document.getElementById("result");

let historyList = document.getElementById("history-list");

let deleteAllBtn = document.getElementById("delete-btn");

function createOption(x, y, rate) {
  let o = document.createElement("option");
  let t = document.createTextNode(y);
  o.setAttribute("value", removeComma(rate));
  o.appendChild(t);
  x.appendChild(o);
}

function removeComma(x) {
  return Number(x.replace(",", ""));
}
function createTr(x) {
  let rowSpacer = document.getElementById("rowSpacer");
  if (rowSpacer) {
    rowSpacer.remove();
  }

  let tr = document.createElement("tr");

  x.map(function (el) {
    let td = document.createElement("td");
    let text = document.createTextNode(el);

    let btn = document.createElement("input");

    td.appendChild(text);

    if (el === "delete") {
      // btn.innerText = "Delete";
      // tr.appendChild(btn);
    } else {
      tr.appendChild(td);
    }

    historyList.appendChild(tr);
  });
}
function store() {
  localStorage.setItem("record", historyList.innerHTML);
}

for (x in data.rates) {
  createOption(from, x, data.rates[x]);
  createOption(to, x, data.rates[x]);
}

calc.addEventListener("submit", function (e) {
  e.preventDefault();
  let input_data = input.value;
  let from_data = from.value;
  let to_data = to.value;

  let first_value = from_data * input_data;
  let secound_value = first_value / to_data;

  let fromText = input_data + from.options[from.selectedIndex].innerHTML;
  let toText = to.options[to.selectedIndex].innerHTML;
  let resultText = secound_value.toFixed(2).toString();
  let date = new Date().toLocaleString();
  // let btn = document.createElement("button");
  // let btn_text = document.createTextNode("Delete");
  // btn.appendChild(btn_text);

  let arr = [date, fromText, toText, resultText, "delete"];

  createTr(arr);
  store();

  result.innerHTML = secound_value.toFixed(2);
  input.value = "";
  input.focus();
  from.value = "";
  to.value = "1";
});

(function () {
  if (localStorage.getItem("record")) {
    historyList.innerHTML = localStorage.getItem("record");
  } else {
    historyList.innerHTML =
      '<tr id="rowSpacer"><td colspan=4>There is no record</td></tr>';
  }
})();

deleteAllBtn.addEventListener("click",function () {
  localStorage.clear();
  location.reload();
});

function changeMode() {
  
  document.body.classList.toggle("night-mode");
  document.getElementById("modeIcon").classList.toggle("fa-sun");
}
