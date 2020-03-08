import { expect } from "chai";

import { App } from "../src/app";
import { Project } from "../src/project";
import { TimeEntry } from "../src/time-entry";

describe("Application Object", () => {

  let app: App;
  let project: Project;

  beforeEach(() => {
    app = new App();
    project = app.createProject('Project 1');
  })

  it("should be created", () => {
    expect(app).to.be.not.null;
  });

  it("should allow creating new projects", () => {
    expect(project).to.be.not.null;
  });

  it('should track time for activity', (done) => {
    app.startTracking('activity');

    let entry: TimeEntry;

    setTimeout(() => {
      entry = app.endTracking();

      expect(entry).to.be.not.null;
      expect(entry.start).to.be.ok;
      expect(entry.end - entry.start).to.be.at.least(1500);
      done();
    }, 1500);
  });

});
