module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "airbnb", "prettier"],
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/forbid-prop-types": 0,
        "class-methods-use-this": 0,
    }
};