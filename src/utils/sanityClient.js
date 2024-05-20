import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'; 

const config = {
    projectId: "9x2ex6om",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
};
  
const sanityClient = createClient(config);

const builder = createImageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);

export default sanityClient;
