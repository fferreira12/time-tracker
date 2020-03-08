export class TimeEntry {
  public start!: number; 
  public end!: number;

  constructor(public activity: string) {
    this.reset();
  }

  reset() {
    this.start = 0;
    this.end = 0;
  }

  clone(): TimeEntry {
    let clone = new TimeEntry(this.activity);
    clone.start = this.start;
    clone.end = this.end;
    return clone;
  }
}
