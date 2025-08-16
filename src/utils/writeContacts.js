import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
        console.log('Veriler başarıyla dosyaya yazıldı.');
    } catch (error) {
        console.error('Dosyaya yazma hatası:', error);
    }
};
