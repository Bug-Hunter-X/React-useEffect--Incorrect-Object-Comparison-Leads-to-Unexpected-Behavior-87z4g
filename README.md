# React useEffect: Incorrect Object Comparison

This example demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  Directly comparing objects using `!==` only checks for reference equality, not for changes in the object's properties.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected code using a deep comparison library or by comparing relevant properties.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the unexpected behavior when the object's properties change (count doesn't update).

## Solution

The solution involves comparing the properties of the object directly, or using a deep comparison library like Lodash's `isEqual`.