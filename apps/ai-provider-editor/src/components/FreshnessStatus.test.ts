import { describe, expect, it } from "vitest";

import { getFreshnessSidebarStatus } from "./AppSidebar";
import { getFreshnessActionState } from "./FreshnessCheckForm";

describe("freshness status UX labels", () => {
  it("labels failed jobs as failed instead of complete", () => {
    expect(getFreshnessActionState("failed")).toMatchObject({
      label: "Check Failed",
      icon: "alert",
    });
    expect(getFreshnessSidebarStatus("failed")).toMatchObject({
      label: "Failed",
    });
  });

  it("keeps completed and ready-for-review states distinct", () => {
    expect(getFreshnessActionState("completed").label).toBe("Check Complete");
    expect(getFreshnessActionState("ready_for_review").label).toBe("Needs Review");
    expect(getFreshnessSidebarStatus("ready_for_review").label).toBe("Needs Review");
  });
});
