def DFS(tree, root, goals):
    # init list of nodes was visted
    visited = dict()

    # init list of nodes will be passed throught, start with head node
    opens = [root]

    # init list of nodes was has been passed
    closed = list()
    isDone = False
    while not isDone:
        if len(opens) <= 0:
            break

        # current node
        node = opens[0]
        closed.append(node)
        if visited.get(node, False) == True:
            break
        else:
            visited[node] = True
        
        if node in goals:
            isDone = True
            break

        opens.pop(0)
        childNodes = tree.get(node)
        if(childNodes):
            opens[:0] = childNodes
    
    print('\nDFS')

    if(isDone):
        print(' => '.join(closed))
    else:
        print(f'Not found [{", ".join(goals)}] in this tree')