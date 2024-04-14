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

    async createAccount({name, email, password}) {
        try {
            const useraccount = await this.account.create(ID.unique(), name, email, password)
        } catch (e) {
            throw error;
        }
    }
}