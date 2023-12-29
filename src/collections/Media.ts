import { User } from "@/payload-types";
import { Access, CollectionConfig } from "payload/types";

const isAdminOrHasAcessToImages = (): Access => 
async ({ req }) => {
    const user = req.user as User | undefined

    if(!user) return false
    if(user.role === 'admin') return true

    return {
        user: {
            equals: req.user.id,
        }
    }
}

export const Media: CollectionConfig = {
    slug: 'media',
    hooks: {
        beforeChange: [
            ({req , data}) => {
                return { ...data, user: req.user.id}
            }, 
        ],

    },
    access: {
        read: async ({req}) =>{
            const referer = req.headers.referer

            if( !req.user || !referer?.includes('sell')){
                return true;
            }

            return await isAdminOrHasAcessToImages()({ req })
        },
        delete: isAdminOrHasAcessToImages(),
        update: isAdminOrHasAcessToImages(),
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'center'
            },
            {
                name: 'card',
                width: 760,
                height: 1024,
                position: 'center'
            }, 
            {
                name: 'tablet',
                width: 760,
                height: undefined,
                position: 'center'
            },
            
        ],
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            required: true
        }
    ]
}