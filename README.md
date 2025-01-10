
# Advanced Logging Utility - `log`

A versatile JavaScript logging utility designed for enhanced debugging, complete with file tracing, collapsible console groups, and styled variable logging.

## Features

- **Global Debug Toggle**: Control logging globally or locally using `DEBUG` variables.
- **Caller File Identification**: Automatically identifies the file that invoked the logger.
- **Styled Variable Logging**: Logs variables with formatted JSON and styled output.
- **Collapsible Console Groups**: Use `console.groupCollapsed` for a tidy console experience.
- **Optional Parameters**: Log additional information seamlessly.

## Installation

To use this package in your project, install it via NPM:

```bash
npm install globalLog
```

## Usage

### Import and Use

Import the `log` function into your project:

```javascript
import { log } from 'globalLog';
```

### Syntax

```javascript
log(message = '', variables = {}, collapsed = true, ...optionalParams);
```

### Parameters

- **`message`** (string, optional): The main message to log. Defaults to an empty string.
- **`variables`** (object, optional): An object containing key-value pairs to log. Defaults to an empty object.
- **`collapsed`** (boolean, optional): Whether to collapse the console group. Defaults to `true`.
- **`optionalParams`** (array, optional): Additional information to log. Supports multiple parameters.

### Examples

#### Basic Log

```javascript
log('Hello World!');
```

#### Logging Variables

```javascript
const user = { name: 'Alice', age: 25 };
log('User Info:', { user });
```

#### With Collapsible Groups

```javascript
log('Expanded Group:', { key: 'value' }, false);
```

#### Additional Parameters

```javascript
log('Extra Info:', { key: 'value' }, true, 'Additional details here', 42);
```

### Debug Mode

The logger is controlled by the `DEBUG` flag:
- **Global Toggle**: Set `GLOBAL_DEBUG` in the script.
- **Local Override**: Define `DEBUG` in the current execution context to override the global flag.

```javascript
const DEBUG = false; // Local toggle
log('This message will not be logged.');
```

---

Start using `my-logging-utility` to make your debugging process cleaner, more organized, and efficient!
