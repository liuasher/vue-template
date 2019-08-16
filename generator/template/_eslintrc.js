module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:vue/recommended' 
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        /** 强制分号 */
        'semi': ['error', 'always'],
        /** 强制单引号 */
        'quotes': ['error', 'single'],
        /** 统一缩进 */
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
        /** 禁用多个空行 */
        'no-multiple-empty-lines': 'error',
        /** 必须使用全等运算符 */
        'eqeqeq':  ['error', 'always'],
        /** 驼峰法 */
        'camelcase': 2,
        /** 禁用tab跟空格混合缩进 */
        'no-mixed-spaces-and-tabs': 2,
        /** 禁用多个空格 */
        'no-multi-spaces': 2,
        /** 数组括号前后禁用空格 */
        "array-bracket-spacing": ["error", "never"],
        /** 对象字面量:后面需要有空格 */
        'key-spacing': 2,
        /** 函数名必须紧跟括号 */
        "space-before-function-paren": ['error', 'never'],
        /** 对象最后一个属性必须,结尾 */
        'comma-dangle': ["error", "always"],
        /** 函数花括号前，必须有空格 */
        'space-before-blocks': ["error", "always"],
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};