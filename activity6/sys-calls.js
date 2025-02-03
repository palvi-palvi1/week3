const fs = require('fs');
const os = require('os');

// Step 1: Create a sample.txt file and write some text
fs.writeFile('sample.txt', 'Hello, this is sample text.', (err) => {
    if (err) {
        console.error('Error creating sample.txt:', err);
        return;
    }
    console.log('sample.txt created successfully.');

    // Step 2: Read the contents of sample.txt
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);

        // Step 3: Write data to a new file output.txt
        fs.writeFile('output.txt', 'This is some sample data.', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Data written to output.txt');
        });
    });
});

// Step 4: Log OS Information
const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

console.log('Hostname:', hostname);
console.log('Platform:', platform);
console.log('CPU Cores:', cpus.length);

// Step 5: Write OS Information to a file
const fileInfo = `Hostname: ${hostname}\nPlatform: ${platform}\nCPU Cores: ${cpus.length}`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
    if (err) {
        console.error('Error writing OS info:', err);
        return;
    }
    console.log('Information written to os_info.txt.');
});
