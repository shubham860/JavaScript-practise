const root = document.getRootNode();

// DFS

function dfs(elements){
    const childElements = elements.children;

    for(let i=0; i< childElements.length; i++){
        const child = childElements[i];
        console.log(child)
        dfs(child);
    }
}

// dfs(root);


// BFS

function bfs(elements){
    const childElements = elements.children;
    const queue = [];
    for(let i=0; i< childElements.length; i++){
        queue.push(childElements[i]);
    }

    if(queue.length > 0){
        let element = queue.shift();
        console.log(element);
        bfs(element)
    }else{
        return;
    }
}

bfs(root);