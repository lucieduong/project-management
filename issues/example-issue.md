# Example: Finished Issue

This is an example of how a completed issue should look. Use it as a reference when creating your own.

---

## TITLE
Checkout age verification popup interrupts checkout flow

## CLIENT / WEBSITE
Acme Wine Co. (acmewine.com)

## PAGE URL
https://www.acmewine.com/checkout

## PROBLEM
When a user is on the checkout page and clicks "Place order", a full-screen age verification popup appears and blocks the entire screen. The user cannot dismiss it or continue with checkout. The popup has no visible close button and does not respond to the "I am 21+" confirmation button. Users are stuck and cannot complete their purchase.

## EXPECTED BEHAVIOR
The age verification should either appear earlier in the flow (e.g. before entering checkout) or, if it appears at checkout, it should be dismissible so the user can complete the order after confirming their age. The "I am 21+" button should close the popup and allow the user to proceed.

## STEPS TO REPRODUCE
1. Go to https://www.acmewine.com
2. Add any wine product to cart
3. Go to checkout and fill in shipping and payment details
4. Click "Place order"
5. Observe: the age verification popup appears and cannot be dismissed

## EVIDENCE
Screenshot attached: [age-verification-blocking-checkout.png]. Video recording available in shared drive: /project/feedback/checkout-popup-issue.mov

## PRIORITY
High

## TYPE
Bug

## ACCEPTANCE CRITERIA
- User can complete checkout without the age verification popup blocking the flow
- If the popup appears at checkout, clicking "I am 21+" dismisses it and allows the user to continue
- Popup appears only when required by policy (e.g. first-time visitor or first order), not on every order attempt
- No full-screen overlay blocks the user from accessing the checkout form or closing the popup

## DEV CONTEXT (optional)
- Popup is triggered on "Place order" click; likely in the checkout submission handler
- Checkout page component: `CheckoutPage.tsx` or equivalent in the current codebase
- Age verification may be implemented as a modal or overlay — ensure it is dismissible and does not trap focus
