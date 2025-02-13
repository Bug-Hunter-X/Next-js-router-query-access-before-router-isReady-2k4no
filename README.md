# Next.js router.query access before router.isReady

This repository demonstrates a common error in Next.js applications where the `router.query` object is accessed before the `router.isReady` property is true.  This typically results in `undefined` values or unexpected behavior.

The `bug.js` file shows the problematic code that causes the error. The `bugSolution.js` file provides a corrected implementation that addresses this issue.

## Problem

When a Next.js component attempts to access `router.query` before the router has finished its initialization, `router.query` will be `undefined`.  This can lead to runtime errors or unexpected rendering behavior.

## Solution

The solution is to utilize the `router.isReady` property within a conditional statement to ensure that the query parameters are available. This ensures that the component only accesses `router.query` when the data is actually available, preventing unexpected behavior.