let i = 0;

const execute = async () => {
  if(i++ % 2 === 0) {
    throw new Error("ERROR - need a retry")
  }
  return "Success";
}

const executeWithRetry = async () => {
//  todo implement retry logic
  return execute();
}


(async () => {
  const results = [];
  for(let i = 0; i < 10; i ++) {
    const result = await executeWithRetry();
    results.push(result);
  }

  console.log(`Result of execution - must be 10 success messages - ${results.join(", ")}`);
  
})()

