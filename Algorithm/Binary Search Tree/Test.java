package algorithms.trees;

public class Test {

	public static void main(String[] args) {
		
			
		BinaryTree tree = new BinaryTree();
		

		tree.add(9);
		tree.add(16);
		tree.add(7);
		tree.add(11);
		tree.add(15);
		tree.add(100);
		tree.add(60);
		tree.add(120);
		tree.add(4);
		tree.add(8);
		
		System.out.println("Using DFS: ");
		tree.DFSTraverse(tree.root);
		
		System.out.println("Using BFS: ");
		tree.BFSTraverse(tree.root);
		


	
	}


}