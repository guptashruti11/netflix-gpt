class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

class BinarySearchTree {
public:
    Node* root;

    BinarySearchTree() {
        root = nullptr;
    }

    void insert(int data) {
        if (root == nullptr) {
            root = new Node(data);
        } else {
            insertNode(root, data);
        }
    }

    void insertNode(Node*& node, int data) {
        if (data < node->data) {
            if (node->left == nullptr) {
                node->left = new Node(data);
            } else {
                insertNode(node->left, data);
            }
        } else if (data > node->data) {
            if (node->right == nullptr) {
                node->right = new Node(data);
            } else {
                insertNode(node->right, data);
            }
        }
    }

    void inorder() {
        if (root != nullptr) {
            inorderNode(root);
        }
    }

    void inorderNode(Node* node) {
        if (node != nullptr) {
            inorderNode(node->left);
            std::cout << node->data << " ";
            inorderNode(node->right);
        }
    }
};