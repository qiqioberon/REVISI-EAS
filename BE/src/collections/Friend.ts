import { CollectionConfig } from 'payload/types';

const Friend: CollectionConfig = {
    slug: 'Friend',
    auth: false,
    access: {
        create: () => true,
        update: () => true,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: "User1ID",
            type: "text",
            required: true,
        },
        {
            name: "User2ID",
            type: "text",
            required: true,
        },
    ],
};

export default Friend;
