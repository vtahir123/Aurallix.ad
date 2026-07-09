const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'tejas', 'Downloads', 'Auralix-ads-main', 'public', 'portfolio.html');

try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if it looks like there is a BOM or it's utf-16
    if (content.charCodeAt(0) === 0xFEFF || content.includes('\0')) {
        content = fs.readFileSync(filePath, 'utf-16le');
    }

    const regex = /<img([^>]+)>/gi;
    const newContent = content.replace(regex, (match, attrs) => {
        let newAttrs = attrs.replace(/src="[^"]+"/, 'src="HOONY HORIZENTALE.png"');
        newAttrs = newAttrs.replace(/alt="[^"]+"/, 'alt="Upcoming"');
        return `<img${newAttrs}>`;
    });

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log('Successfully replaced all image sources and alt text.');
} catch (error) {
    console.error('Error processing file:', error);
}
