# Deprecated Lifecycle Method in React Component

This repository demonstrates a common error in React applications involving the use of the deprecated `componentWillReceiveProps` lifecycle method.  The example showcases the problem and provides a solution using the recommended alternatives, `getDerivedStateFromProps` and `componentDidUpdate`.

## Problem

The `componentWillReceiveProps` method is deprecated in newer versions of React. Using this method can lead to unexpected behavior and should be avoided.  The example shows a component that incorrectly relies on `componentWillReceiveProps` to update its state based on changes in props.

## Solution

The recommended approach is to use either `getDerivedStateFromProps` or `componentDidUpdate` to achieve the same functionality.  The solution demonstrates how to implement both solutions.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.