# 14 tagged template literal

"Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function."
- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Kegunaan dari tag templates

1. Escaping / Sanitize HTML Tags
2. Translation & Internationalization
3. Styled Components

### 1. Escaping / Sanitize HTML Tags

```javascript
function sanitize(strings, ...values) {
    return DOMPurify.sanitize(aboutMe);
}

const name = 'Rizqi Nur Assyaufi';
const aboutMe = `I love to do evil <img src="https://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

const html = sanitize`
    <h3>${name}</h3>
    <p>${aboutMe}</p>
`;
```

source: https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761

### 2. Translation / Internationalization

```javascript
const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`
// Hallo Steffen, Sie haben US$ 1,250.33 auf Ihrem Bankkonto.
```

source: https://github.com/skolmer/es2015-i18n-tag

### 3. Styled Components

```javascript
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
```

source: https://www.styled-components.com/docs/basics#getting-started
