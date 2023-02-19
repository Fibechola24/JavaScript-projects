const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels =Array.from ( tabs.querySelectorAll('[role="tabpanel"]'));



function handleTabClick(event){
     // hide all tab panels when someone click a tab

     tabPanels.forEach(panel => {
        panel.hidden = true;
      });
     // mark all tabs as unselected
     tabButtons.forEach(tab => {
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
      });


      // mark the clicked tab as selected while other tab remain unselected
      event.currentTarget.setAttribute('aria-selected', true);


       // find the associated tabPanel and show it!.
       const { id } = event.currentTarget;  //destructuring to create an id variable
     


       //find associated tab panels
       //find in the array of tabPanels
       console.log(tabPanels);
       const tabPanel = tabPanels.find(
         panel => panel.getAttribute('aria-labelledby') === id
       );
       tabPanel.hidden = false;
     }


tabButtons.forEach(button =>button.addEventListener('click', handleTabClick) );
