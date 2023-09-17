// export const fetchWithTimeout = async function(url, timeout=1000) {
//     let timer;
//     const timerPromise = new Promise((res,rej) => {
//       timer = setTimeout(res, timeout);
//     });
//     let hasResponse = false;
//     const response = fetch(url);
  
//     response.then(() => hasResponse = true);
  
//     await Promise.any([timerPromise, response]);
    
//     if (hasResponse) {
//       return response;
//     } else {
//       throw ("request timed out");
//     }
//   }