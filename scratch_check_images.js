import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, 'temp_opensbf', 'app', 'src', 'data');

async function checkSourceImages() {
  const files = ['basis-questions.ts', 'see-questions.ts', 'binnen-questions.ts'];
  let totalWithImage = 0;
  
  for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/import type[\s\S]*?;/g, '');
    content = content.replace(/:\s*Question\s*\[\s*\]/g, '');
    content = content.replace(/:\s*Question/g, '');
    
    const tempJsPath = path.join(__dirname, `temp_img_${file.replace('.ts', '.js')}`);
    fs.writeFileSync(tempJsPath, content, 'utf-8');
    
    try {
      const module = await import(`./temp_img_${file.replace('.ts', '.js')}`);
      for (const key of Object.keys(module)) {
        const arr = module[key] || [];
        if (!Array.isArray(arr)) continue;
        const withImg = arr.filter(q => q.hasImage || q.imagePath);
        console.log(`  Export '${key}' has ${withImg.length} questions with images out of ${arr.length}`);
        totalWithImage += withImg.length;
        if (withImg.length > 0) {
          console.log(`    Example: ID=${withImg[0].id}, imagePath=${withImg[0].imagePath}`);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (fs.existsSync(tempJsPath)) fs.unlinkSync(tempJsPath);
    }
  }
  console.log('Total questions with images:', totalWithImage);
}

checkSourceImages();
