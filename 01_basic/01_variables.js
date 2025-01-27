const accountId=909640
let accountEmail="sabketnakhate2004@gmail.com"
var accountPassword="12345" //esko use karna thoda avoid karna 
accountCity="jaipur"
let accountState;


// pura data ko print karane ke liye fhir aapan ko das bar console likh na padega 

console.log(accountPassword);
console.log(accountEmail);

// to avoid it we use table
console.table([accountEmail,accountId,accountPassword,accountState])