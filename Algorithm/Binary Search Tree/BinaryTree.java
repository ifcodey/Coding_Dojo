package algorithms.trees;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BinaryTree {

  public Node root;

  public BinaryTree(int dataHead) {
    root = new Node(dataHead);
  }

  // if there no data.
  public BinaryTree() {
    root = null;
  }

  public void DFSTraverse(Node root) {
    Stack<Node> stack = new Stack<Node>();

    stack.add(root);
    while (!stack.isEmpty()) {
      Node x = stack.pop(); // pop root (13)
      if (x.right != null) stack.add(x.right); // push 16
      if (x.left != null) stack.add(x.left); // push 9
      System.out.print(x.data + " --> ");
    }
    System.out.println();
  }

  public boolean DFS(Node root, int key) {
    Stack<Node> stack = new Stack<Node>();
    stack.add(root);

    while (!stack.isEmpty()) {
      Node x = stack.pop();
      if (x.data == key) {
        return true;
      }
      if (x.right != null) stack.add(x.right);
      if (x.left != null) stack.add(x.left);
    }
    System.out.println();
    return false;
  }

  public void BFSTraverse(Node root) {
    Queue<Node> queue = new LinkedList<Node>();

    queue.add(root);
    while (!queue.isEmpty()) {
      Node x = queue.poll();
      System.out.print(x.data + " --> ");
      if (x.left != null) queue.add(x.left);
      if (x.right != null) queue.add(x.right);
    }
    System.out.println();
  }

  public boolean BFS(Node root, int key) {
    Queue<Node> queue = new LinkedList<Node>();
    queue.add(root);
    while (!queue.isEmpty()) {
      Node x = queue.poll();
      if (x.data == key) {
        return true;
      }
      if (x.left != null) queue.add(x.left);
      if (x.right != null) queue.add(x.right);
    }
    return false;
  }

  public Node add(int data) { // try to add 120
    Node newNode = new Node(data); // create newNode of data = 120
    Node current = this.root;
    Node prev = null;

    while (current != null) {
      prev = current;
      if (data == current.data) {
        System.out.println("The key: " + data + " already exists");
        return null;
      } else if (data < current.data) current = current.left; else current =
        current.right;
    }

    if (prev == null) this.root = newNode; else if (
      data < prev.data
    ) prev.left = newNode; else prev.right = newNode;
    return null;
  }

  public Node search(Node root, int data) {
    if (root == null) {
      return null;
    }
    if (root.data == data) {
      return root;
    }
    if (data < root.data) {
      return search(root.left, data);

    } else if (data > root.data) {
      return search(root.right, data);
    }
  }
}
