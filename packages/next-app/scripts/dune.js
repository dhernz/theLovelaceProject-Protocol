import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

// Add the API key to an header object
const meta = {
    "x-dune-api-key": "es2yq5WsLZYSexJUkteip9unuWc5GdRz"
};
const header = new Headers(meta);

//  Call the Dune API
const response = await fetch('https://api.dune.com/api/v1/query/1531143/execute', {
    method: 'POST',
    headers: header
});
const body = await response.text();

// Log the returned response
console.log(body);
