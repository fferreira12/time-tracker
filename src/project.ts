import { TimeEntry } from "./time-entry";

export class Project {
  
  timeEntries: TimeEntry[] = [];
  currentEntry!: TimeEntry;
  
  constructor(public name: string) { }
  
  startTracking(activity: string) {
    this.currentEntry = new TimeEntry(activity);
    this.currentEntry.start = Date.now();
  }

  endTracking() {
    this.currentEntry.end = Date.now();
    this.timeEntries.push(this.currentEntry);
    let currentEntry = this.currentEntry.clone();
    this.currentEntry.reset();
    return currentEntry;
  }
}
