// /**
//  * ===================================
//  * NETFLIX CLONE - FAQ ACCORDION
//  * ===================================
//  *
//  * This script handles the FAQ accordion functionality for the Netflix clone landing page
//  *
//  * Features:
//  * - Smooth expand/collapse animations
//  * - Keyboard accessibility support (Enter and Space keys)
//  * - ARIA attributes for screen readers
//  * - Only one FAQ open at a time (accordion behavior)
//  * - Defensive programming with error checking
//  *
//  * How it works:
//  * 1. Waits for DOM to load completely
//  * 2. Finds all FAQ question buttons with class 'faq-question'
//  * 3. Adds click and keyboard event listeners
//  * 4. Toggles FAQ answers visibility when questions are clicked
//  * 5. Ensures only one FAQ is open at a time
//  *
//  * Dependencies: None (vanilla JavaScript)
//  * Browser Support: Modern browsers with ES6 support
//  *
//  * @author Netflix Clone Project
//  * @version 1.0
//  */

// // Wait for DOM to be fully loaded before initializing
// // This ensures all HTML elements are available before we try to access them
// document.addEventListener('DOMContentLoaded', function() {

//     // Get all FAQ question buttons using CSS selector
//     // These buttons should have class 'faq-question' in the HTML
//     const faqQuestions = document.querySelectorAll('.faq-question');

//     // Defensive programming - check if FAQ elements exist on the page
//     if (faqQuestions.length === 0) {
//         console.log('No FAQ questions found on this page');
//         return; // Exit early if no FAQ elements are present
//     }

//     /**
//      * Toggle FAQ item between open and closed states
//      * Implements accordion behavior where only one FAQ can be open at a time
//      *
//      * @param {HTMLElement} questionButton - The clicked question button element
//      */
//     function toggleFAQ(questionButton) {
//         // Find the parent FAQ item container
//         const faqItem = questionButton.closest('.faq-item');

//         // Check if this FAQ is currently open by reading ARIA attribute
//         const isCurrentlyOpen = questionButton.getAttribute('aria-expanded') === 'true';

//         // First, close all other FAQ items to maintain accordion behavior
//         // This ensures only one FAQ is open at a time
//         faqQuestions.forEach(otherQuestion => {
//             const otherItem = otherQuestion.closest('.faq-item');

//             // Set ARIA attribute to false for accessibility
//             otherQuestion.setAttribute('aria-expanded', 'false');

//             // Remove active class to hide the answer
//             otherItem.classList.remove('active');
//         });

//         // Now toggle the current FAQ item
//         // Only open it if it wasn't already open
//         if (!isCurrentlyOpen) {
//             // Set ARIA attribute to true for screen readers
//             questionButton.setAttribute('aria-expanded', 'true');

//             // Add active class to show the answer
//             faqItem.classList.add('active');
//         }
//         // If it was already open, it stays closed due to the forEach loop above
//     }

//     // Add event listeners to all FAQ question buttons
//     faqQuestions.forEach(question => {

//         // Handle mouse clicks
//         question.addEventListener('click', function() {
//             toggleFAQ(this); // 'this' refers to the clicked button
//         });

//         // Add keyboard accessibility support
//         question.addEventListener('keydown', function(event) {
//             // Handle Enter and Space keys for keyboard navigation
//             if (event.key === 'Enter' || event.key === ' ') {
//                 event.preventDefault(); // Prevent default browser behavior
//                 toggleFAQ(this); // Toggle the FAQ
//             }
//         });
//     });

//     // Log successful initialization for debugging
//     console.log(`FAQ accordion initialized successfully with ${faqQuestions.length} questions`);
// });

// Wait for DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, looking for FAQ items...");

  // Get FAQ items using querySelectorAll (returns NodeList with forEach method)
  const faq = document.querySelectorAll(".faq-item");

  console.log("Found FAQ items:", faq);
  console.log("FAQ items length:", faq.length);

  // Check if FAQ elements exist
  if (faq.length === 0) {
    console.log("No FAQ items found on this page");
    return;
  }

  // Use Array.from() to ensure we have a proper array with forEach method
  const faqArray = Array.from(faq);

  // Add click event listeners to each FAQ item
  faqArray.forEach((element) => {
    element.addEventListener("click", (e) => {
        faqArray.forEach((item) => {
          item.childNodes[3].classList.remove("active");
      });
      
      e.preventDefault();
      element.childNodes[3].classList.toggle('active');
    });
  });

  console.log(`FAQ accordion initialized with ${faqArray.length} items`);
});
