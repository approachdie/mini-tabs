const tabs = document.querySelector('.tabs');
const tabsBtns = tabs.querySelectorAll('[role="tab"]');
const tabsPnls = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
  tabsPnls.forEach((panel) => {
    panel.hidden = true;
  });

  tabsBtns.forEach((button) => {
    button.ariaSelected = false;
  });

  e.currentTarget.ariaSelected = true;

  const { id } = e.currentTarget;

  const tabPanel = tabsPnls.find((panel) => {
    if (panel.getAttribute('aria-labelledby') === id) {
      return true;
    }
  });

  tabPanel.hidden = false;
}

tabsBtns.forEach((button) => button.addEventListener('click', handleClick));
