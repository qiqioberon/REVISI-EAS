import { CollectionConfig } from 'payload/types';

const FriendChat: CollectionConfig = {
    slug: 'FriendChat',
    auth: false,
    access: {
        create: () => true,
        read: () => true,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: "UserID",
            type: "text",
            required: true,
        },
        {
            name: "FriendID",
            type: "relationship",
            relationTo: "Friend"
        },
        {
            name: "chat",
            type: "textarea",
        }
    ],
};

export default FriendChat;
