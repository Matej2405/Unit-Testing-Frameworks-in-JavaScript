
# Unit Testing Frameworks in JavaScript 🧪

A concise, practical guide to Mocha, Chai, and ESLint — created as part of the EPAM JavaScript training program.

This repository explains how to set up and use the three essential tools for JavaScript testing: **Mocha** (test runner), **Chai** (assertions), and **ESLint** (linting and code quality). Includes examples, exercises, and best practices.

---

## ✨ Features

* **Mocha Test Runner** — simple, async-friendly testing
* **Chai Assertions** — BDD/TDD styles (`expect`, `assert`, `should`)
* **ESLint Rules** — code style, consistency, and best practices
* **Real Examples** — math functions, async tests, modules
* **Watch Mode** — automatic test reruns
* **Minimal Setup** — ready to use immediately

---

## 🚀 Quick Start

### 1. Install Node.js (v18+ recommended)

Check your version:

```
node -v
npm -v
```

Download if needed: [https://nodejs.org/](https://nodejs.org/)

### 2. Clone the Repository

```
git clone https://github.com/<your-username>/Unit-Testing-Frameworks-in-JavaScript.git
cd Unit-Testing-Frameworks-in-JavaScript
```

### 3. Install Dependencies

```
npm install
```

This installs:

* mocha
* chai
* eslint

---

## 🎯 Available Commands

### Run all tests

```
npm test
```

### Run tests in watch mode

```
npm run test:watch
```

### Run ESLint

```
npm run lint
```

### Auto-fix ESLint issues

```
npm run lint:fix
```

---

## 🧪 Example Test

Example test using Mocha + Chai:

```js
const { expect } = require("chai");
const { add } = require("../src/math");

describe("Math utilities", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
```

---

## 📁 Project Structure

```
src/
  math.js
  utils.js

tests/
  math.test.js
  utils.test.js

.eslintrc.json
package.json
README.md
```

---

## 🐛 Troubleshooting

### Mocha not found

```
npx mocha
```

or reinstall:

```
rm -rf node_modules
npm install
```

### ESLint errors too strict

Adjust `.eslintrc.json`:

```json
{
  "rules": {
    "no-unused-vars": "off",
    "semi": ["error", "always"]
  }
}
```

### Tests failing for async code

Ensure you:

* return the Promise
* or use `async/await`
* or use Mocha’s `done` callback

---

## 📚 Documentation

| File            | Description             |
| --------------- | ----------------------- |
| QUICKSTART.md   | Beginner setup          |
| MOCHA_GUIDE.md  | How Mocha works         |
| CHAI_GUIDE.md   | Assertion examples      |
| ESLINT_RULES.md | Linting rules explained |
| EXAMPLES.md     | Full test examples      |

---

## 🛠️ Stack

* **Mocha** — testing framework
* **Chai** — assertions
* **ESLint** — code quality
* **Node.js** — runtime

---

## 🎓 What You Learn

* Writing clean unit tests
* Organizing test files
* Asserting values with Chai
* Testing async functions
* Enforcing style with ESLint
* Using watch mode for workflow speed

---

## 📄 License

MIT License — free to use and learn from.

---

## 🙏 Acknowledgments

* EPAM Training Program
* Mocha & Chai teams
* ESLint community

---

