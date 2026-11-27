import { describe, expect, it } from "vitest";
import { unified } from "unified";
import type { Root } from "mdast";
import type { BuildCtx } from "@quartz-community/types";
import { HardLineBreaks } from "../src/index";

async function transform(value: string): Promise<Root> {
  const tree: Root = {
    type: "root",
    children: [{ type: "paragraph", children: [{ type: "text", value }] }],
  };
  const plugins = HardLineBreaks().markdownPlugins!({} as BuildCtx);
  return (await unified()
    .use(plugins as never)
    .run(tree as never)) as unknown as Root;
}

describe("HardLineBreaks", () => {
  it("turns every soft line break in a paragraph into a <br>", async () => {
    const tree = await transform("first line\nsecond line\nthird");
    expect(tree.children[0]).toMatchObject({
      type: "paragraph",
      children: [
        { type: "text", value: "first line" },
        { type: "break" },
        { type: "text", value: "second line" },
        { type: "break" },
        { type: "text", value: "third" },
      ],
    });
  });

  it("leaves text without line breaks alone", async () => {
    const tree = await transform("one line");
    expect(tree.children[0]).toMatchObject({ children: [{ type: "text", value: "one line" }] });
  });

  it("is a markdown (remark) plugin only", () => {
    const plugin = HardLineBreaks();
    expect(plugin.name).toBe("HardLineBreaks");
    expect(plugin.htmlPlugins).toBeUndefined();
  });
});
