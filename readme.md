Q. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  

Answer: Here are the differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll:  
**`getElementById()`** Selects a single element by its id and returns an Single element or null if does not exists.  
**`getElementsByClassName()`**	Selects elements (multiple) by their class name and returns live HTMLCollection.  
**`querySelector()`**	Selects the first element matching a CSS selector and returns	Single element or null if doesn't exists. Useful when there is no id defined.  
**`querySelectorAll()`**	Selects all elements matching a CSS selectorand returns a static NodeList.  

Q. How do you **create and insert a new element into the DOM**?  

Answer: to create and insert a new element into the DOM:
First, need to create an empty element by `document.createElement('div');`  
Then, add some content to it by either plain text using `newDiv.textContent` or html content using n`ewDiv.innerHTML`.  
Then, we can add some styling if we need by using `newDiv.style`  
Finally, we need to pick a element and then insert it by using `element.appendChild(newDiv);`  
Also, we can prepend instead of append by using element.prepend(newDiv);  

Q. What is **Event Bubbling** and how does it work?  

**Event Bubbing**: In javascript it is a mechanism where an event triggered on a target element propagates upward to its parent elements, and then to the root of the DOM.  
**How it works**: When an event occurs on an element, it first triggers on the target element and then "bubbles up" through the ancestors in the DOM hierarchy, triggering any event listeners attached to those ancestors.
**What is the benefit of Event Bubbling**: Instead of adding event listeners to every individual element (which can be inefficient), we can add a single event listener to a parent element. The parent element will catch events from its child elements because of event bubbling. Which increases performance and saves memory.

Q. What is **Event Delegation** in JavaScript? Why is it useful?  

**Event Delegation**: Event delegation is a technique in JavaScript where a single event listener is attached to a parent element, instead of attaching event listeners to individual child elements.  
**Why is it useful**: It improves performance by reducing the number of event listeners attached to multiple child elements, especially in scenarios where there are many child elements or dynamically added elements. Also, it simplifies the code by centralizing event handling, making it easier to manage.

Q. What is the difference between **preventDefault() and stopPropagation()** methods?  

Answer: Difference between `preventDefault()` and `stopPropagation()`:  
**`preventDefault()`**: It prevents the default behavior associated with an event from occurring. It is used when we want to stop the browser’s default action for the event. For example, preventing a form submission or preventing a link from navigating.  
**`stopPropagation()`**: It prevents the event from bubbling up or propagating to its parent elements in the DOM. It is used when we want to stop the event from reaching other event listeners higher up in the DOM tree.