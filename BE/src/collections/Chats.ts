import { CollectionConfig } from "payload/types";

const Chats: CollectionConfig = {
    slug: "chats",
    auth: false,
    admin: {
        useAsTitle: "email",
    },
    access: {
        create: () => true,
        read: () => true,
    },
    fields: [
        {
            name: "UserID",
            type: "text",
            required: true,
        },
        {
            name: "UserFullName",
            type: "text",
        },
        {
            name: "GroupID",
            type: "relationship",
            relationTo: "groups",
        },
        {
            name: "content",
            type: "textarea",
        },
    ],
};

export default Chats;
