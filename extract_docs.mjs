import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

const docs = [
  'RDMS_Organization_Profile.docx',
  'RDMS_Oral_Health_Education_Guide.docx',
  'RDMS_Partnership_Membership.docx',
  'RDMS_FAQ.docx'
];

async function extract() {
  for (const doc of docs) {
    const filePath = path.join('public/docs', doc);
    try {
      const result = await mammoth.convertToHtml({path: filePath});
      const html = result.value;
      const htmlPath = filePath.replace('.docx', '.html');
      fs.writeFileSync(htmlPath, html);
      console.log(`Extracted HTML for ${doc}`);
    } catch (e) {
      console.error(`Error extracting ${doc}:`, e);
    }
  }
}

extract();
