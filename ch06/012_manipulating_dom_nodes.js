// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Manipulating DOM nodes

// In this example we use Proxy to toggle an attribute of two different elements: so when 
// we set the attribute on one element, the attribute is unset on the other one.

// We create a view object which is a proxy for an object with a selected property. The proxy 
// handler defines the set() handler.

// When we assign an HTML element to view.selected, the element's 'aria-selected' attribute 
// is set to true. If we then assign a different element to view.selected, this element's 
// 'aria-selected' attribute is set to true and the previous element's 'aria-selected' 
// attribute is automatically set to false.

const view = new Proxy(
    {
      selected: null,
    },
    {
      set(obj, prop, newval) {
        const oldval = obj[prop];
  
        if (prop === "selected") {
          if (oldval) {
            oldval.setAttribute("aria-selected", "false");
          }
          if (newval) {
            newval.setAttribute("aria-selected", "true");
          }
        }
  
        // The default behavior to store the value
        obj[prop] = newval;
  
        // Indicate success
        return true;
      },
    },
  );
  
  const item1 = document.getElementById("item-1");
  const item2 = document.getElementById("item-2");
  
  // select item1:
  view.selected = item1;
  
  console.log(`item1: ${item1.getAttribute("aria-selected")}`);
  // item1: true
  
  // selecting item2 de-selects item1:
  view.selected = item2;
  
  console.log(`item1: ${item1.getAttribute("aria-selected")}`);
  // item1: false
  
  console.log(`item2: ${item2.getAttribute("aria-selected")}`);
  // item2: true


item1: true
item1: false
item2: true
  