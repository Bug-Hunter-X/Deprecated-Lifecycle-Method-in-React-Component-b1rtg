The `getDerivedStateFromProps` method is a static method that receives the next props and current state as arguments.  It should return an object with the new state or `null` if no state update is needed. 

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.someProp !== prevState.someProp) {
    return { someProp: nextProps.someProp };
  }
  return null;
}
```

The `componentDidUpdate` method is called after a component updates. It can be used to perform side effects based on prop or state changes.  It receives the previous props and state as arguments.

```javascript
componentDidUpdate(prevProps) {
  if (this.props.someProp !== prevProps.someProp) {
    // Perform side effect here
  }
}
```