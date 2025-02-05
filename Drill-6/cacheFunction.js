function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
    const cache={};
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            console.log("already cached");
            return cache[key];
        }
        const result=cb(...args);
        cache[key]=result;
        return result;
    };
  }