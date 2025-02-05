function limitFunctionCallCount(cb, n) {
    let callCount = 0;  
  
    return function() {
      if (callCount < n) {
        callCount += 1;  
        return cb();  
      }
      
      return null;
    };
  }
  
  function sayHello() {
    console.log(`Hello`);
  }
  
  const limitedHello = limitFunctionCallCount(sayHello, 3);
  
  limitedHello(); 
  limitedHello();   
  limitedHello(); 
  limitedHello();   
  