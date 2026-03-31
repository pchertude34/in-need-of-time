import { pathsAreEqual, stringToPath } from "sanity";
import { defineMigration, set } from "sanity/migrate";

const targetPath = stringToPath("description");

export default defineMigration({
  title: "description text to block content",
  documentTypes: ["provider"],

  migrate: {
    string(node, path, ctx) {
      if (pathsAreEqual(path, targetPath)) {
        return set([
          {
            style: "normal",
            _type: "block",
            children: [
              {
                _type: "span",
                marks: [],
                text: node,
              },
            ],
            markDefs: [],
          },
        ]);
      }
    },
  },
});
