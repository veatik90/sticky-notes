import { Note } from "../../shared/interfaces";

export class LocalStorageService {
  static key = "notes";

  static getNotes() {
    return JSON.parse(localStorage.getItem(this.key) || "[]") as Note[];
  }

  static addNote(note: Note) {
    const notes = this.getNotes();
    notes.push(note);

    localStorage.setItem(this.key, JSON.stringify(notes));
  }
}
