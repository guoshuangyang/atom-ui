import { describe, test, expect } from "vitest";
// 测试导入组件的情况
describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../packages/components/button/index");
    expect(cmp).toBeDefined();
  });
  // 还有没做的测试
  test.todo("more import vue components as expected");
});
