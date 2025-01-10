export function log(message = '', variables = {}, collapsed = true, ...optionalParams) {
  const GLOBAL_DEBUG = true; // Global debug toggle

  // Check for a local `DEBUG` variable if available, otherwise use the global `GLOBAL_DEBUG`
  const debugMode = typeof this?.DEBUG !== 'undefined' ? this.DEBUG : GLOBAL_DEBUG;

  if (debugMode) {
    // Create an Error to get the stack trace
    const error = new Error();
    const stack = error.stack?.split('\n') || [];
    
    // Parse the stack trace to extract the caller's filename
    const callerLine = stack[2] || ''; // Adjust the index based on your environment

    // Match Vue or JS file paths with optional query parameters
    const match = callerLine.match(/\/([^/]+\.(vue|js))(\?[^:]+)?(:\d+:\d+)?/);
    
    const callerFile = match ? match[1] : 'Unknown file';

    // Format variable details for readability
    const variablesInfo = Object.entries(variables)
      .map(([key, value]) => `%c  ${key}%c: ${JSON.stringify(value, null, 2)}`) // Format values as JSON
      .join('\n');

    // Styles for variable names
    const styles = Object.keys(variables).flatMap(() => [
      'color: cyan; font-weight: bold;', // Style for variable name
      'color: inherit;'                 // Style for variable value
    ]);

    // Select the appropriate console group function
    const groupFunction = collapsed ? console.groupCollapsed : console.group;

    // Start the group in the console
    groupFunction(
      `%c[${callerFile}]%c ${message ? `${message}` : ''}`,
      'color: yellow; font-weight: bold;', // Style for the callerFile
      'color: inherit;'                    // Reset style
    );

    // Log variables inside the group
    if (Object.keys(variables).length > 0) {
      console.log(
        variablesInfo,
        ...styles // Styles for variable names and values
      );
    }

    // Log additional optional parameters if provided
    if (optionalParams.length > 0) {
      console.log('Additional Info:', ...optionalParams);
    }

    // End the group
    console.groupEnd();
  }
}
