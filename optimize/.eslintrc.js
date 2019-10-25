module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true,
      impliedStrict: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true
  },
  globals: {
    __DEV__: true,
    NODE_ENV: true
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    react: {
      version: "16.8.6",
      pragma: "React"
    },
    "import/resolver": {
      alias: {
        map: [
          ["images", "./assets/images"],
          ["pages", "./src/pages"],
          ["config", "./src/config"],
          ["components", "./src/components"],
          ["widgets", "./src/widgets"],
          ["stores", "./src/stores"],
          ["utils", "./src/utils"],
          ["chart", "./src/charts"],
          ["service", "./src/service"],
        ]
      }
    }
  },
  plugins: ["react", "import"],
  extends: ["standard", "plugin:react/recommended"],
  rules: {
    // Possible Errors
    // https://www.jianshu.com/p/22e6197e5cff
    // 规则的错误等级有三种：
    // 0或'off'：关闭规则。
    // 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）。
    // 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
    "no-alert": 0, //禁止使用alert confirm prompt
    "no-console": 0, //禁止使用console
    "no-debugger": 2, //禁止使用debugger
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, //函数参数不能重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-eq-null": 2, //禁止对null使用==或!=运算符
    "no-func-assign": 2, //禁止重复的函数声明
    "no-redeclare": 2, //禁止重复声明变量
    "no-undef": 2, //不能有未定义的变量
    "no-var": 1, //禁用var，用let和const代替
    "no-unused-vars": [
      2,
      {
        vars: "local",
        args: "after-used",
        varsIgnorePattern: "createElement"
      }
    ], //不能有声明后未被使用的变量或参数
    "no-use-before-define": 2, //未定义前不能使用
    // Best Practices
    "array-callback-return": [
      "error",
      {
        allowImplicit: false
      }
    ], // 必须有return
    "array-bracket-spacing": [2, "never"], //是否允许非空数组里面有多余的空格
    curly: [2, "all"], //必须使用 if(){} 中的{}
    "default-case": [2], //switch语句最后必须有default
    eqeqeq: "warn", // 暂时关闭== ===判断

    // Variables
    "standard/no-callback-literal": 0, //callback禁止直接使用true/false参数
    "no-useless-constructor": 1,// 未使用
    "camelcase": 0,// 驼峰命名
    // Stylistic Issues
    "block-spacing": [2, "always"], // 函数块中间必须有空格
    "comma-style": [2, "last"], //逗号风格，换行时在行首还是行尾
    "comma-dangle": [2, "always-multiline"], // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "computed-property-spacing": [2], // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "func-call-spacing": [2, "never"], //此规则要求或禁止函数名称和调用它的左括号之间的空格
    "key-spacing": [2], // 强制在对象字面量的属性中键和值之间使用一致的间距
    "keyword-spacing": [2], // 强制在关键字前后使用一致的空格 (前后腰需要)
    "semi": [2, "always"],//语句强制分号结尾 // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi-spacing": [2], // 强制分号之前和之后使用一致的空格
    indent: [2, 2, { "SwitchCase": 1 }], //缩进
    "jsx-quotes": [2, "prefer-double"], // 强制在 JSX 属性中一致地使用双引号或单引号
    quotes: [
      2,
      "single",
      {
        allowTemplateLiterals: true
      }
    ], // 强制使用一致的反勾号、双引号或单引号
    "switch-colon-spacing": [2], //此规则控制语句中的冒号case和default子句之间的间距switch。只有连续令牌存在于同一行上时，此规则才会执行检查

    // ECMAScript 6

    "arrow-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ], //要求箭头函数的参数使用圆括号
    "prefer-const": [
      2,
      {
        destructuring: "all"
      }
    ], // 要求使用 const 声明那些声明后不再被修改的变量

    "react/no-did-mount-set-state": [2], // 不能直接setState
    "react/no-did-update-set-state": [2], // 不能再update里setState
    "react/no-direct-mutation-state": [2],
    "react/no-redundant-should-component-update": [2],
    "react/sort-comp": [2], //强制组件方法顺序

    "react/jsx-closing-bracket-location": [2],
    "react/jsx-closing-tag-location": [2],
    // 'react/jsx-curly-newline': [2, {
    //   multiline: "consistent",
    //   singleline: "consistent"
    // }],
    "react/jsx-curly-spacing": [
      2,
      {
        when: "never"
      }
    ],
    "react/prop-types": 1, // 暂时关闭prop-types类型检查
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,// JSX语法缩进
    "react/jsx-key": [2],
    // 'react/jsx-no-bind': [1],
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "react/jsx-uses-vars": [2],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // 支持file类型
    "import/no-self-import": [2],
    "import/no-cycle": [2],

    "import/newline-after-import": [2],
    "import/no-duplicates": [2],
    // 'import/no-unused-modules': [2, {
    //   missingExports: true
    // }],

    "node/no-deprecated-api": 0, // node里不存在的api
    "no-prototype-builtins": 0,// 这个规则不允许直接在Object.prototype对象实例上调用某些方法。
    // "no-mixed-spaces-and-tabs":["error", "smart-tabs"] //tab和空格混合使用缩进
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"], //tab和空格混合使用缩进
    "no-tabs": 0,
    "no-return-assign": 1, // 函数内返回直接赋值
    //  函数声明前括号，http://eslint.cn/docs/2.0.0/rules/space-before-function-paren
    //  匿名函数校验，命名函数不校验
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }]
  }
};
