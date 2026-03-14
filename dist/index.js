import remarkBreaks from 'remark-breaks';

// src/transformer.ts
var HardLineBreaks = () => {
  return {
    name: "HardLineBreaks",
    markdownPlugins() {
      return [remarkBreaks];
    }
  };
};

export { HardLineBreaks };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map