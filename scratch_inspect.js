import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seeQuestionsPath = path.join(__dirname, 'temp_opensbf', 'app', 'src', 'data', 'see-questions.ts');

let content = fs.readFileSync(seeQuestionsPath, 'utf-8');

// Strip TypeScript annotations
content = content.replace(/import type[\s\S]*?;/g, '');
content = content.replace(/:\s*Question\s*\[\s*\]/g, '');
content = content.replace(/:\s*Question/g, '');

const tempJsPath = path.join(__dirname, 'temp_see.js');
fs.writeFileSync(tempJsPath, content, 'utf-8');

const { seeNavigationQuestions } = await import('./temp_see.js');
console.log('seeNavigationQuestions length:', seeNavigationQuestions.length);
seeNavigationQuestions.forEach(q => {
  console.log(`ID: ${q.id}, Topic: ${q.topic}, Text: ${q.text.slice(0, 100)}...`);
});

fs.unlinkSync(tempJsPath);
