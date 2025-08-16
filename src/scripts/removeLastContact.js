import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        const newContacts = JSON.parse(contacts);


        if (newContacts.length === 0) {
            console.log("There is no item in array");
            return;
        }

        newContacts.pop();

        writeContacts(newContacts);
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

removeLastContact();
