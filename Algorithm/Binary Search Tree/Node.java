package algorithms.trees;

public class Node{
	public int data;
	// Node -> is a Node Function 
	public Node left;
	public Node right;

	// Node Function
	public Node (int dataRoot){
		this.data = dataRoot;
		this.left = null;
		this.right = null;
	}

// if Node Function Don't have a data.
	public Node(){
		this.left = null;
		this.right = null;
	}



}