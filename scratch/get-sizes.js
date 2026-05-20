const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  const buffer = Buffer.alloc(8);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 8, 16); // PNG dimensions are stored at offset 16 (IHDR chunk width & height)
  fs.closeSync(fd);
  const width = buffer.readUInt32BE(0);
  const height = buffer.readUInt32BE(4);
  return { width, height };
}

const dir = 'c:\\Users\\aksha\\OneDrive\\Desktop\\Think Forge Global\\ambition\\public\\assets\\images\\new';
fs.readdir(dir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile() && file.toLowerCase().endsWith('.png')) {
      try {
        const { width, height } = getPngDimensions(filePath);
        console.log(`${file}: ${width}x${height} (${stats.size} bytes)`);
      } catch (e) {
        console.log(`${file}: Error reading png size - ${e.message}`);
      }
    }
  });
});
