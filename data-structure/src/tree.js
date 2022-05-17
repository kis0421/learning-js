class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node("root", [
  new Node("a"),
  new Node("b"),
  new Node("c", [
    new Node("d")
  ])
]);

function printNodes(node) {
  console.log(node.content);
  for (const children of node.children) {
    printNodes(children);
  }
}

printNodes(tree)