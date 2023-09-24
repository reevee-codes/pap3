// export const timeout = (timeoutMS=0) => {
//     let timer;
//     const timerPromise = new Promise((res,rej) => {
//       timer = setTimeout(res, timeoutMS);
//     });
//     return {
//         promise: timerPromise,
//         clear: () => clearTimeout(timer)
//     };
// }

// export const fetchWithTimeout = async function(url: RequestInfo, options: RequestInit, timeoutMS=1000) {
//     let timer = timeout(timeoutMS);
//     let responseResolved = false;

//     const response = fetch(url, options);
//     response.finally(() => responseResolved = true);

//     await Promise.any([timer.promise, response]);

//     if (responseResolved) {
//         return response;
//     } else {
//         throw new Error("request timed out");
//     }
// }

// interface SafeFetchOptions {
//     retry: number,
//     timeout: number,
    
// }
// export const safeFetch = async function(
//     url: RequestInfo|RequestInfo[],
//     fetchOptions: RequestInit,
//     optins: SafeFetchOptions
// ) {
//     if (!Array.isArray(url)) {
//         url = [url];
//     }
    
// }

