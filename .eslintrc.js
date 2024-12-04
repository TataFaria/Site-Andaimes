module.exports = {
    env: {
        browser: true, // Permite reconhecer variáveis globais de navegadores
        node: true, // Permite variáveis do Node.js
        es2021: true, // Suporte a recursos modernos do JavaScript
    },
    extends: [
        "eslint:recommended", // Regras básicas recomendadas pelo ESLint
        "plugin:prettier/recommended", // Integração com o Prettier
    ],
    parserOptions: {
        ecmaVersion: 12, // Compatível com ES2021
        sourceType: "module", // Permite uso de imports e exports
    },
    plugins: ["import"], // Ativa o eslint-plugin-import
    rules: {
        // Adicione regras personalizadas aqui, se necessário
    },
};