export interface BinaryTreeNodeAttachment {
    id: string;
}
export declare class BinaryTreeNode {
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    parent: BinaryTreeNode;
    leafIndex: number;
    private attachment;
    private hasEmptySpace;
    constructor();
    private isLeaf;
    findEmptyNode(): BinaryTreeNode;
    setAttachment(attachment: BinaryTreeNodeAttachment): void;
    updateEmptyNodeStatus(): void;
}
export default class Texture2DArrayScalableStorage {
    private readonly initialLevels;
    private treeRoot;
    private currentLevels;
    private attachmentsMap;
    constructor(initialLevels: number);
    private initTree;
    expandTree(): void;
    addAttachment(attachment: BinaryTreeNodeAttachment): number;
    removeAttachment(attachment: BinaryTreeNodeAttachment): void;
    private static createBinaryTree;
}
//# sourceMappingURL=Texture2DArrayScalableStorage.d.ts.map