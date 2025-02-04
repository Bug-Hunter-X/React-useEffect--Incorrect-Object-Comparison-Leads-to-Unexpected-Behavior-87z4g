```javascript
import isEqual from 'lodash.isequal'; // or another deep comparison library

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(prevProps.data, props.data)) {
      setCount(props.data.length);
    }
  }, [props.data]);

  return <div>Count: {count}</div>;
}
```