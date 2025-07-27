/**
 * ===================================
 * NETFLIX CLONE - LANGUAGE PICKER
 * ===================================
 * 
 * Simple Language Picker Component
 * Handles language selection functionality for the Netflix clone landing page
 * 
 * Features:
 * - Language selection persistence using localStorage
 * - Easy to extend with additional language switching logic
 * - Lightweight implementation without external dependencies
 * - Error handling and validation
 * - Keyboard accessibility support
 * 
 * Supported Languages:
 * - English (en)
 * - Hindi (hi)
 * 
 * Browser Compatibility:
 * - Modern browsers with localStorage support
 * - Graceful degradation for older browsers
 * 
 * Dependencies: None
 * 
 * @author Netflix Clone Project
 * @version 1.0
 * @since 2025
 */

// Wait for DOM to be fully loaded before initializing
// This ensures all HTML elements are available before we try to access them
document.addEventListener('DOMContentLoaded', function() {
    
    // Get reference to the language select dropdown element
    // This element should have id="language-select" in the HTML
    const languageSelect = document.getElementById('language-select');
    
    // Defensive programming - check if element exists
    if (!languageSelect) {
        console.error('Language select element not found! Check HTML for id="language-select"');
        return; // Exit early if element doesn't exist
    }
    
    /**
     * Handle language selection change event
     * Triggered when user selects a different language from dropdown
     * 
     * @param {Event} event - The change event from select element
     */
    languageSelect.addEventListener('change', function(event) {
        // Get the selected language value (e.g., 'en', 'hi')
        const selectedLanguage = this.value;
        
        // Log the language change for debugging purposes
        console.log('Language changed to:', selectedLanguage);
        
        // Validate that a language was actually selected
        if (!selectedLanguage) {
            console.warn('No language selected');
            return;
        }
        
        // Store the selected language in browser's localStorage for persistence
        // This allows the selection to persist across page reloads and browser sessions
        try {
            localStorage.setItem('selectedLanguage', selectedLanguage);
            console.log('Language preference saved successfully');
        } catch (error) {
            // Handle cases where localStorage might not be available
            // (private browsing mode, storage quota exceeded, etc.)
            console.error('Failed to save language preference:', error);
        }
        
        // TODO: Add your language switching logic here
        // Examples of what you can implement:
        
        // 1. Dynamic content translation:
        // updatePageContent(selectedLanguage);
        
        // 2. Redirect to language-specific pages:
        // window.location.href = selectedLanguage === 'hi' ? '/hi/' : '/en/';
        
        // 3. Update document language for accessibility:
        // document.documentElement.lang = selectedLanguage;
        
        // 4. Load language-specific resources:
        // loadLanguageResources(selectedLanguage);
        
        // 5. Send analytics event:
        // gtag('event', 'language_change', { 'language': selectedLanguage });
    });
    
    /**
     * Initialize language picker with previously saved preference
     * This function restores the user's last selected language on page load
     */
    function initializeLanguagePreference() {
        try {
            // Attempt to retrieve saved language from localStorage
            const savedLanguage = localStorage.getItem('selectedLanguage');
            
            if (savedLanguage) {
                // Validate that the saved language is still a valid option
                const validOptions = Array.from(languageSelect.options).map(opt => opt.value);
                
                if (validOptions.includes(savedLanguage)) {
                    // Restore the previously selected language
                    languageSelect.value = savedLanguage;
                    console.log('Language preference restored:', savedLanguage);
                } else {
                    console.warn('Saved language no longer valid:', savedLanguage);
                    // Clean up invalid preference
                    localStorage.removeItem('selectedLanguage');
                }
            } else {
                console.log('No saved language preference found, using default');
            }
        } catch (error) {
            console.error('Failed to load language preference:', error);
        }
    }
    
    // Initialize the language preference when script loads
    initializeLanguagePreference();
    
    // Optional: Add keyboard accessibility support
    languageSelect.addEventListener('keydown', function(event) {
        // Handle Enter key to confirm selection
        if (event.key === 'Enter') {
            event.preventDefault();
            this.blur(); // Remove focus after selection
        }
    });
    
    // Log successful initialization
    console.log('Language picker initialized successfully');
});

/**
 * Future enhancement: Function to update page content based on selected language
 * @param {string} language - The selected language code (e.g., 'en', 'hi')
 */
// function updatePageContent(language) {
//     const translations = {
//         'en': {
//             title: 'Unlimited movies, TV shows, and more.',
//             subtitle: 'Watch anywhere. Cancel anytime.',
//             description: 'Ready to watch? Enter your email to create or restart your membership.',
//             button: 'Get Started'
//         },
//         'hi': {
//             title: 'असीमित फिल्में, टीवी शो, और भी बहुत कुछ।',
//             subtitle: 'कहीं भी देखें। कभी भी रद्द करें।',
//             description: 'देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।',
//             button: 'शुरू करें'
//         }
//     };
//     
//     const content = translations[language];
//     if (content) {
//         document.querySelector('h1').textContent = content.title;
//         document.querySelector('h2').textContent = content.subtitle;
//         document.querySelector('p').textContent = content.description;
//         document.querySelector('.div-input button').textContent = content.button;
//     }
// }