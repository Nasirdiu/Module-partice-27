//function system

function getDepositId(inputId) {
  const depositInput = document.getElementById(inputId);
  const depositInputTotal = depositInput.value;
  const depositAmount = parseFloat(depositInputTotal);
  //clear
  depositInput.value = "";
  return depositAmount;
}
function updateTotalField(totalFieldId, amount) {
  const depositTotal = document.getElementById(totalFieldId);
  const depositTotalText = depositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalText);
  depositTotal.innerText = depositTotalAmount + amount;
}
//balance withdraw korle - hoye jai tata thik korer jono ai code
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-update");
  const balanceText = balanceTotal.innerText;
  const balanceUpdate = parseFloat(balanceText);
  return balanceUpdate;
}
function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-update");
  //   const balanceText = balanceTotal.innerText;
  //   const balanceUpdate = parseFloat(balanceText);
  const balanceUpdate = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = balanceUpdate + depositAmount;
  } else {
    balanceTotal.innerText = balanceUpdate - depositAmount;
  }
}

// deposit amount
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getDepositId("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    } else {
      alert("This Is Not Found");
    }
  });

// withdraw system
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getDepositId("withdraw-input");
    const withdrawCurrentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < withdrawCurrentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    } else {
      alert("This Is Not Found");
    }
  });
