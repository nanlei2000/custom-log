> log varibles name and varibles both in console

```javascript
const name = 'zhangsan'
const age = 18
log`name,age`
/* stdout:
name -> zhangsan
age -> 18
*/
log(name) /* ❌error */
log('name') /* ❌error */
```
