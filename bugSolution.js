```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    if (router.isReady) {
      console.log(router.query.id);
    } else {
      console.log('Router is not ready yet');
    }
  };
  return (
    <button onClick={handleClick}>Click me</button>
  );
};
export default MyComponent;```