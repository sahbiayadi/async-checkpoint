// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
}

// Task 02: Awaiting a Call
async function awaitCall() {
    const data = await fetchDataFromAPI();
    console.log(data);
}

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const data = await fetchDataFromAPI();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data from the API:", error.message);
    }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    const [result1, result2] = await Promise.all([fetchDataFromAPI(url1), fetchDataFromAPI(url2)]);
    console.log("Result 1:", result1);
    console.log("Result 2:", result2);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetchDataFromAPI(url)));
    console.log("Responses:", responses);
}