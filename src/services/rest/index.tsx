import { Note } from "../../shared/interfaces";
import { LocalStorageService } from "../localStorage";

export class RestService {
  static async getNotes(): Promise<Note[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const notes = LocalStorageService.getNotes();
        if (notes.length === 10) {
          return reject(
            new Error("Network error: you're working with local copy")
          );
        }

        return resolve(notes);
      }, 3000);
    });
  }
}
