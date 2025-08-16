import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const newContacts = JSON.parse(contacts);
        return newContacts.length;
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

console.log(await countContacts());
