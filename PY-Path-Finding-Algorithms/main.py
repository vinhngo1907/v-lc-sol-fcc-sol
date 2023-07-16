from json import loads
from bfs import BFS
from dfs import DFS
from hc import HC

# Load tree data from file
filePath = open('./data.json')
data = filePath.read()
dataJSON = loads(data)
tree = dataJSON['tree']

# List of goals of BFS, DFS algorithms
goals = dataJSON['goals']

hill_climb = dataJSON['hill-climb']
# list of goals of HC algorithm
goals_HC = dataJSON['hill-climb']['goals']
# root node
root = dataJSON['root']

if __name__=='__main__':
    BFS(tree, root, goals)
    DFS(tree, root, goals)
    HC(hill_climb, root, goals_HC)
