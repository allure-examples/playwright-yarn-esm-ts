import { test } from "@playwright/test";
import * as allure from "allure-js-commons";

test("sample test", async () => {
  await allure.links(...[{ url: "https://example.org"}]);
  await allure.owner("John Doe");
  await allure.issue("JIRA-2", "https://example.org");
  await allure.step("step 1", async () => {
    await allure.step("step 1.2", async () => {
      await allure.attachment("text attachment", "some data", "text/plain");
    });
  });
  await allure.step("step 2", async () => {
  });
});
