# Clean Code Commit Messages

## Overview
Clean Code Commit Messages is a command-line tool designed to help developers write clean, meaningful commit messages in their Git repositories. Poorly written commit messages can lead to misunderstandings and complicate future code maintenance, so this tool helps enforce best practices.

## Features
- Enforces a set of rules for commit message formatting.
- Customizable message templates according to project needs.
- Provides helpful error messages for improperly formatted commits.
- Integrates seamlessly with Git hooks to ensure compliance before commits are made.

## Installation
To install the tool, simply clone the repository and run:
```bash
npm install
```

## Usage
Set up the tool in your project by adding the necessary Git hook:
```bash
node clean-code-commit-messages.js pre-commit
```
Then, every time you make a commit, the tool will check your commit message format before allowing the commit to go through.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
