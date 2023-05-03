import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: 'c3dq0t2n',
    dataset: 'production',
    apiVersion: '2021-03-25',
})