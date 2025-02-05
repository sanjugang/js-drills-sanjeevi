function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.


    let counter = 0; 
  return {
    increment: function() {
      counter += 1;  
      return counter;  
    },
    decrement: function() {
      counter -= 1;  
      return counter; 
    }
  };
  }
  const result=counterFactory();
  console.log(result.increment());