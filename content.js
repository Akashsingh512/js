const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'white';
overlay.style.zIndex = '999999';


function showOverlay() {
  if (!document.body.contains(overlay)) {
    document.body.appendChild(overlay);
  }
}


function hideOverlay() {
  if (document.body.contains(overlay)) {
    document.body.removeChild(overlay);
  }
}


function autoExpandSections() {
  const expandButton = document.querySelector("[class*='expand-button']");
  if (expandButton) {
    expandButton.click();
  }
}


function getMarchCard() {
  return [...document.querySelectorAll('div')].find(div =>
    div.textContent.includes('March (current month)')
  );
}


function updateAllFakeData() {
  const marchCard = getMarchCard();
  if (!marchCard) {
    return;
  }
  {
    const label = [...marchCard.querySelectorAll('div')].find(
      el => el.textContent.trim() === "Funds from February"
    );
    if (label && label.nextElementSibling) {
      label.nextElementSibling.innerText = "₹1,232.08";
      label.nextElementSibling.style.fontWeight = "bold";
    }
  }

  {
    const campaignDiv = marchCard.querySelector(
      "[class*='campaigns-section-title-amount'][class*='expansionpanel-header-amount']"
    );
    if (campaignDiv) {
      const strongEl = campaignDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹1,830.24";
      }
    }
  }


setTimeout(() => {
const dropdown = document.querySelector("[class*='previous-years-dropdown']");
if (!dropdown) {
    return;
}

dropdown.style.pointerEvents = "none";
dropdown.style.opacity = "0.5"; 
}, 3000);

{
    const FADiv = marchCard.querySelector(
      "[class*='prepay-balance-v2']"
    );
    if (FADiv) {
      const strongEl = FADiv.querySelector("[class*='total-balance']");
      if (strongEl) {
        strongEl.innerText = "₹0.07";
      }
    }
  }

setTimeout(() => {
// 1) Edit the last payment date
const dateDiv = document.querySelector("[class*='last-payment-date']");
if (dateDiv) {
  // The date is inside a <span>
  const dateSpan = dateDiv.querySelector("span");
  if (dateSpan) {
    dateSpan.textContent = "Mar 01"; // Change to your desired date
  } else {
  }
} else {
}

// 2) Edit the last payment amount & description
const amountDescDiv = document.querySelector("[class*='last-payment-amount-and-description']");
if (amountDescDiv) {
  // Update the amount
  const amountDiv = amountDescDiv.querySelector("[class*='last-payment-amount']");
  if (amountDiv) {
    amountDiv.textContent = "₹1,000.00"; // Change to your desired amount
  } else {
  }

  // Update the description
  const descDiv = amountDescDiv.querySelector("[class*='last-payment-description']");
  if (descDiv) {
    // descDiv.textContent = "Manual payment "; // Your desired description
    // console.log("✅ Updated last payment description to Manual payment (Visa ••••1234)");
  } else {
    // console.warn("❌ Could not find the description element inside last-payment-amount-and-description div.");
  }
} else {
  // console.warn("❌ Could not find an element with class containing 'last-payment-amount-and-description'.");
}
}, 3000);


  // end 

  // (C) Payments
  {
    const paymentDiv = marchCard.querySelector(
      "[class*='payments-section-title-amount'][class*='expansionpanel-header-amount']"
    );
    if (paymentDiv) {
      const strongEl = paymentDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹1,000.00";
      }
    }
  }

  // (D) Taxes
  {
    const taxDiv = marchCard.querySelector(
      "[class*='taxes-and-fees-section-title-amount'][class*='expansionpanel-header-amount']"
    );
    if (taxDiv) {
      const strongEl = taxDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹401.76";
      }
    }
  }

  // (E) Net Cost
  {
    const netCostDiv = marchCard.querySelector("[class*='net-cost-amount']");
    if (netCostDiv) {
      const strongEl = netCostDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹2,232.01";
      }
    }
  }

  // (F) Available Balance
  {
    const availBalDiv = marchCard.querySelector("[class*='current-month-balance-amount']");
    if (availBalDiv) {
      const strongEl = availBalDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹0.07";
      }
    }
  }

  // (G) Adjustments
  {
    const adjustmentsDiv = marchCard.querySelector(
      "[class*='adjustments-section-title-amount'][class*='expansionpanel-header-amount']"
    );
    if (adjustmentsDiv) {
      const strongEl = adjustmentsDiv.querySelector("strong");
      if (strongEl) {
        strongEl.innerText = "₹0.01";
      }
    }
  }

  // (H) Additional container-based “Campaigns” cost from "₹0.00"
  {
    const campaignContainers = [...marchCard.querySelectorAll('div')].filter(el =>
      el.textContent.includes('Campaigns')
    );
    const targetContainer = campaignContainers.find(el =>
      el.textContent.includes('₹0.00')
    );
    if (targetContainer) {
      const costElement = [...targetContainer.querySelectorAll('div, span, p, td')].find(
        el => el.textContent.trim() === '₹0.00'
      );
      if (costElement) {
        costElement.textContent = '₹2,232.01';
      }
    }
  }

  // ... repeat for any other items you only want in March ...
}

// 1) Immediately show the overlay
showOverlay();

// 2) Possibly auto-expand
autoExpandSections();

// 3) On window load, wait 4s, update March data, remove overlay
window.addEventListener('load', () => {
  setTimeout(() => {
    updateAllFakeData();
    hideOverlay();
    console.log("✅ Removed white overlay. Fake data for March only is now visible.");
  }, 4000);
});

// 4) Watch for DOM changes (user toggles months, etc.) and re-apply March data
let mutationTimeout;
const observer = new MutationObserver(() => {
  clearTimeout(mutationTimeout);
  mutationTimeout = setTimeout(() => {
    updateAllFakeData();
  }, 250);
});
observer.observe(document.body, { childList: true, subtree: true });

// 5) If user clicks the expand button again, show overlay, re-update after 4s, then hide overlay
document.addEventListener('click', (e) => {
  if (e.target.matches("[class*='expand-button']")) {
    showOverlay();
    setTimeout(() => {
      updateAllFakeData();
      hideOverlay();
      console.log("✅ Re-updated March data after dropdown click.");
    }, 4000);
  }
});