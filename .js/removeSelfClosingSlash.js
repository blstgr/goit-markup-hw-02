const fs = require('fs');
const path = require('path');

// Path to the file you want to fix
const filePath = path.resolve(__dirname, '../index.html'); // Adjust as needed

// Read the file content
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Fix self-closing tags while preserving attribute spacing
  const fixedData = data.replace(/<(\w+)([^>]*)\s*\/\s*>/g, (match, tagName, attributes) => {
    return `<${tagName}${attributes.replace(/\s+$/, '')}>`; // Remove trailing space before ">"
  });

  // Write the fixed content back to the file
  fs.writeFile(filePath, fixedData, 'utf-8', err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Fixed: ' + filePath);
    }
  });
});
