module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "mocha": true
  },
  extends: [
    // "airbnb-base",
    // "plugin:vue/recommended",
    // 'standard',
    'plugin:vue/essential'
  ],
  globals: {
    '_czc':"readonly",
    '_hmt':"readonly",
    '$':true,
    'layer':true,
    'axios':true,
    'Vue':true,
    'VueRouter':true,
    'Vuex':true,
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module",
    // 想使用的额外的语言特性:
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    "vue"
  ],
  rules: {
    // 'linebreak-style': [0, 'error', 'windows'],
    // "comma-dangle": ["error", "always-multiline"],
    // "max-len" : ["error", {code : 300}],
    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: 'ForInStatement',
    //     message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    //   {
    //     selector: 'LabeledStatement',
    //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],
    // 'no-console': ["error", { allow: [ "error"] }]
    'generator-star-spacing': 'off',
    'semi': ["error", "never"],
    'prefer-promise-reject-errors': ["error", {allowEmptyReject: true}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-duplicate-imports': 0
  },
  overrides: [
    // {
    //   "files": ["compile/*"],
    //   "rules": {
    //     "import/no-extraneous-dependencies": "off",
    //   }
    // }
  ],
  "settings": {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  }
};
