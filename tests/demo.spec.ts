import { expect, test } from "@playwright/test";

// Site: https://dummy-demo-njndex.web.app/
const BASE_URL = "https://dummy-demo-njndex.web.app/";

test("home page basic", async ({ page }) => {
  // 1. Điều hướng đến trang web mục tiêu.
  await page.goto(BASE_URL);

  // 2. Kiểm tra tiêu đề của trang web mục tiêu: Home | IT Demo Dummy
  await expect(page).toHaveTitle("Home | IT Demo Dummy");

  // 3. Kiểm tra thẻ heading ở home page: Dummy Features
  await expect(
    page.getByRole("heading", { name: "Dummy Features" })
  ).toBeVisible();
});

test("Navigate to Todo list page", async ({ page }) => {
  // 1. Điều hướng đến trang web mục tiêu.
  await page.goto(BASE_URL);
  await page.screenshot({path: "screenshorts/homepage.png"});
  // 2. Điều hướng đến trang Todo list.
  await page.getByRole("link", { name: "Todo List" }).first().click();
  // 3. Kiểm tra URL: todo-list
  await expect(page).toHaveURL(/.*\/todo-list/);
  // 4. Kiểm tra thẻ heading: Todo List
  await expect(page.getByRole("heading", { name: "Todo List" })).toBeVisible();
  await page.screenshot({path: "screenshorts/todo-list-page.png"});
});
