import jsonServer from "json-server";
import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { TiendanubeAuthInterface, dataStoreInterface } from "@features/auth";
import { HttpErrorException } from "@utils";
import { dataStore } from "src/models/dataStore";
import { Int32 } from "mongodb";

/**
 * this repository is temporary, please use real database to production mode
 */

const userRepository = jsonServer.router(path.resolve("db.json"));

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(userRepository);

interface IDatabase {
  credentials: TiendanubeAuthInterface[];
}

const adapter = new FileSync<IDatabase>(path.resolve("db.json"));
const database = low(adapter);

class UserRepository {
  save(credential: TiendanubeAuthInterface) {
    this.createOrUpdate(credential);
  }

  async findOne(user_id: number) {

    const data = await dataStore.findOne({'user_id':parseInt(user_id.toString())} ); 
    const credentials = [
      {
        "access_token": data?.access_token,
        "token_type": "bearer",
        "scope": data?.scope,
        "user_id": data?.user_id
      } 
    ]

    if (!credentials) {
      throw new HttpErrorException(
        "Read our documentation on how to authenticate your app"
      ).setStatusCode(404);
    }
    return credentials;
  }


  findFirst(): TiendanubeAuthInterface {
    return database.get("credentials").value()?.[0];
  }

  private createOrUpdate(data: TiendanubeAuthInterface) {
    const credentials = database.get("credentials").value() ?? [];
    const hasCredentials = this.findValueFromProperty<TiendanubeAuthInterface>(
      "user_id",
      credentials,
      data.user_id
    );

    if (hasCredentials) {
      const index = credentials.findIndex(
        (credential) => credential.user_id === data.user_id
      );
      credentials.splice(index, 1, data);
    } else {
      credentials?.push(data);
    }
    database.set("credentials", credentials).write();
  }

  private findValueFromProperty<T, K = any>(
    property: string,
    list: T[],
    value: K
  ): T | undefined {
    const findValue = list?.find(
      (values) => (values as any)[property] === Number(value)
    );
    return findValue;
  }
}

export default new UserRepository();
