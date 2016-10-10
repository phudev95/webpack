//require('./login');
import * as loginLib from './login';
console.warn('================= Debug Modules');
console.log(loginLib);
//login('admin', '545454');
//login('admin', 'radical');
//console.log("test_const: %s", test_const);
loginLib.login('admin', '545454');
loginLib.login('admin', 'radical');
console.log("test_const: %s", loginLib.test_const);
console.warn('\\\\\============ Debug Modules');

var content = document.getElementById("content");
content.innerHTML = "<h1>App is here!!!</h1>";

console.log('App loaded');
