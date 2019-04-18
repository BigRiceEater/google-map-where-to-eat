# Google Api Key 

Maps and Places api need a valid key to work. Add a `google.config.js` file to the root directory in the same place as the `package.json`:

```javascript
module.exports = {
  apiKey: 'YOUR_GOOGLE_API_KEY'
};
```