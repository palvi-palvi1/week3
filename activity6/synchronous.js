const fs = require('fs');
const os = require('os');

try {
    // Step 1: Create and write to sample.txt synchronously
    fs.writeFileSync('sample.txt', 'Hello, this is sample text (Synchronous).');
    console.log('sample.txt created successfully (Synchronous).');

    // Step 2: Read file synchronously
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File contents (Synchronous Read):', data);

    // Step 3: Write data to output.txt synchronously
    fs.writeFileSync('output.txt', 'This is some sample data (Synchronous Write).');
    console.log('Data written to output.txt (Synchronous Write)');
} catch (err) {
    console.error('Error:', err);
}

// Step 4: Log OS Information
console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);

// Step 5: Write OS Information to a file synchronously
const info = `Hostname: ${os.hostname()}\nPlatform: ${os.platform()}`;

try {
    fs.writeFileSync('system_info.txt', info);
    console.log('System information written to system_info.txt');
} catch (err) {
    console.error('Error writing system information:', err);
}

