module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "eslint:recommended",
  "google"
  ],
  "lint": "eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 13,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "parser":"babel-eslint", 
  "rules": {
  }
};
