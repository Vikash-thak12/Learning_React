import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const useraccount = await this.account.create(ID.unique(), name, email, password);
            if (useraccount) {
                //Call another method
                return this.login({ email, password })

            } else {
                return useraccount;
            }
        } catch (error) {
            // throw error;
            console.log("Error in creating the account: ", error);
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // throw error;
            console.log("Error in logging in with Email: ", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {   
            console.log("No active session found.");
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch(error) {
            console.log("Error in logout: ", error);
        }
    }

}


const authservice = new AuthService();
export default authservice;