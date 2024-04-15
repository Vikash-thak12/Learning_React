import config from "../config/config";
import { Client, ID, Databases, Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage  - new Storage(this.client);
    }


    async createPost ({title, content, featuredImage, status, userId, slug}) {
        try {
            return await this.databases.createDocument(

                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug,
                    {
                        title, 
                        content,
                        featuredImage, 
                        status,
                        userId, 
                    }
            )
        } catch (error) {
            console.log("Create post Error: ", error);
        }
    }

    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Update Post Error", error);
        }
    }
}

const service = new Service();
export default service;