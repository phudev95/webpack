//require('./login');
import {login, test_const} from './login';
console.warn('================= Debug Modules');
login('admin', '545454');
login('admin', 'radical');
console.log("test_const: %s", test_const);
console.warn('\\\\\============ Debug Modules');

var content = document.getElementById("content");
content.innerHTML = "<h1>App is here!!!</h1>";

console.log('App loaded');
