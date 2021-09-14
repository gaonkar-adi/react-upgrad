module.exports = {
    "settings": {
        "react": { 
            "createClass": "createReactClass", 
            "pragma": "React",  
            "fragment": "Fragment", 
            "version": "detect", 
            "flowVersion": "0.53"
        } 
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
