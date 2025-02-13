```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    //this will cause an error because it tries to access router.query before router.isReady is true
    console.log(router.query.id);
  };
  return (
    <button onClick={handleClick}>Click me</button>
  );
};
export default MyComponent;```