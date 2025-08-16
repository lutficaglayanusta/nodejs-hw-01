import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";



const generateContacts = async (number) => {
    try {
        const data = await readContacts();
        const newData = JSON.parse(data);
        
        for (let i = 0; i < number; i++){
            newData.push(createFakeContact());
        }
        
        writeContacts(newData);
    } catch (error) {
        console.error('Something went wrong', error);
    }
    
};

generateContacts(3);
