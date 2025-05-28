//debug moode on/off
debugmode= false
if (debugmode==true){
  n_learning_trial=5 //This determine the number of learning trial you want in total
  n_direct_trial=5 //how many direct trial you want
  n_shortest_trial=5 //how many shortest path you want
  n_goaldir_trial=1 //how many goal directed planning you want
}else{
  n_learning_trial=128 //This determine the number of learning trial you want in total
  n_direct_trial=32 //how many direct trial you want
  n_shortest_trial=121 //how many shortest path you want
  n_goaldir_trial=1 //how many goal directed planning you want
}

//warningpage
warning=0 //this is to start the counter of total warning
warning_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5;color:red'>Warning, you are missing too many trials, make sure to press the key '1' when you see a blue cross flash and '2' when you see a green one. If you keep missing trials you will be disqualified.</p>",
checkfail=0 //this is to start the attentioncheck
checkthreshold=2 //this is to add the threshold for attentioncheck

var kickout_record=0
var kickout_total=2
var ac_colortotal=9

// Add custom CSS for buttons dynamically
const style = document.createElement('style');
style.innerHTML = `
  .custom-button {
    background-color: lightgreen; /* Set the background color */
    color: black; /* Set the text color */
    font-size: 20px; /* Make the font size bigger */
    padding: 10px 25px; /* Adjust padding for larger buttons */
    border: none; /* Remove borders */
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Change cursor to pointer when hovering */
  }
  .custom-button:hover {
    background-color: green; /* Darker green on hover */
    color: white; /* Change text color on hover */
  }
`;
document.head.appendChild(style); // Append the styles to the document head

//Text for instruction
instruct_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>In this experiment, you will observe pairs of objects. Your task is to memorize these pairs. Note that the pairs will repeat, and that the position of the object (left or right) in the pair does not matter. Objects are NOT paired in a meaningful way (for example based on what they are used for).<p style= 'font-size:25px;margin-top:100px'></p>\n",
instruct_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>A good strategy to remember the pairs is to try and come up with a story or image that connects the two objects. For example, if you saw the following pair of objects: \n </p><img src= '../static/images/GW-Tutorial/object_334.jpg' width='250' height='250' style='margin-right:50px'></img><img src= '../static/images/GW-Tutorial/object_268.jpg' width='250' height='250' style='margin-left:50px'><p style ='font-size: 30px;line-height:1.5'>you may imagine holding the briefcase while wearing the red robe, or you can come up with a story in which you have to pack the robe in the briefcase for a business trip.<br></p><br>",
instruct_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Let's practice this strategy, which you will use throughout the experiment. For each pair, try to come up with an image or story in your head that connects the two objects. You will have 1 second for each pair,so please work quickly. The story or image does not have to make sense.<br><p style= 'font-size:25px;margin-top:100px'></p>\n",

instructnames = ["instruct_1","instruct_2","instruct_3"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instruct={instruct_1,instruct_2,instruct_3} // IF you want to add or decrease number of page for instruct, just delete or add var here.

instruct_prac_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'><br><br><p style ='font-size: 30px;line-height:1.5'>Were you able to come up with a story or image connecting these items?<br><br>Once you think of one, press next to continue.</p><br>",
instruct_prac_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Great! Please continue to come up with a story or image for each trial.<br><br>For example, you might imagine kicking the fire hydrant while wearing the boot.</p><br>",

instructprac1names = ["instruct_prac_1","instruct_prac_2"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instructprac1={instruct_prac_1,instruct_prac_2} // IF you want to add or decrease number of page for instruct, just delete or add var here.

instruct_prac2_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'><br><br><p style ='font-size: 30px;line-height:1.5'>Were you able to come up with a story or image connecting these items?<br><br>Once you think of one, press next to continue.</p><br>",
instruct_prac2_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Great! Please continue to come up with a story or image for each trial.<br><br>For example, you might imagine trying to break open the piggy bank with the traffic cone.</p><br>",
instruct_prac2_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>While you are learning to remember the image pairs, you will also see a cross on the center of your screen like the one below:</p><img src= '../static/images/isi.png' width='150' height='150'><p style ='font-size: 30px;line-height:1.5'>To make sure that you are paying attention on each trial, we will have you do a simple color detection task in addition to learning the pairs. If the cross flashes <span style='color: blue;'>blue,</span> press the '1' key on your keyboard, if it flashes <span style='color: green;'>green,</span> press '2'.<br><br>Now we will do a short practice on these color changes. You will be unable to advance until you get enough of the color check trials correct.<p style= 'font-size:25px;margin-top:100px'></p><br>",

instructprac2names = ["instruct_prac2_1","instruct_prac2_2","instruct_prac2_3"]// IF you want to add or decrease number of page for instruct, just delete or add var name here.
instructprac2={instruct_prac2_1,instruct_prac2_2,instruct_prac2_3} // IF you want to add or decrease number of page for instruct, just delete or add var here.

//Text for direct memory instruction
instruct_dir_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>For the next part of this experiment, you will see an object that you studied earlier, with 3 objects below it. Use the '1', '2', and '3' buttons on your keyboard to select the object that was directly paired with the top object during the study phase. Use '1' to select the left object, '2' to select the middle object, and '3' to select the right object.</p><p style= 'font-size:25px;margin-top:100px'></p><br>",
dir_instructnames = ["instruct_dir_1"] //Same for above, if you want to delete or add, just decrease or add the var
dir_instruct={instruct_dir_1} //same for above

//Text for shortest path instruction
instruct_short_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>You may have noticed that the object pairs you studied in the study phase were connected to one another such that one object was often paired with more than just one other object.\nIn this phase, you will be presented with three objects on the screen.\nYour task is to choose which one of the side objects, left or right, you think is closer to the middle object based on how the objects were indirectly associated during the study phase.</p><br /><p style= 'font-size:25px;margin-top:100px'></p><br>",
instruct_short_2="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short1.png' width='1200' height='600'></div>"
instruct_short_3="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short2.png' width='1200' height='600'></div>"
instruct_short_4="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short3.png' width='1200' height='600'></div>"
instruct_short_5="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short4.png' width='1200' height='600'></div>"
instruct_short_6="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short5.png' width='1200' height='600'></div>"
instruct_short_7="<div style='margin-left:150px ;margin-right: 200px ;text-justify: auto'><img src= '../static/images/short6.png' width='1200' height='600'></div>"
instruct_short_8="<div style='margin-left:250px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>Press '1' on your keyboard if you think the center object is closer to the LEFT object, based on what you learned in the previous phase. Press '2' on your keyboard if you think the object that is closer to the center object is the RIGHT object.<br><br>It might seem difficult and overwhelming, but trust your instincts, and do your best!</p><br><p style= 'font-size:25px;margin-top:100px'></p><br>"
short_instructnames = ["instruct_short_1","instruct_short_2","instruct_short_3","instruct_short_4","instruct_short_5","instruct_short_6","instruct_short_7","instruct_short_8"]
short_instruct={instruct_short_1,instruct_short_2,instruct_short_3,instruct_short_4,instruct_short_5,instruct_short_6,instruct_short_7,instruct_short_8,} 

//Text for phase 3 instruction
instruct_mem_1="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>In this part of the task, you will be shown all the images that you have studied earlier. There will NOT be any novel images that you have not already seen.<br>We will ask you to arrange the images on the screen in a way you think is best reflective of the pair arrangement you saw in the learning part (remember that the same object can appear in multiple pairs). You can move the images on the screen by clicking on them with your mouse, one at the time, and dragging them to whatever you think is a suitable position within the white rectangular area. Make sure you don't place any images on top of each other (no overlap). </p><br><p style= 'font-size:25px;margin-top:100px'></p><br>",
instruct_mem_2="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>After placing the images on the screen, <strong>you will connect the images based on whether or not they were directly paired together during the learning phase.</strong> You can link the images together by first clicking on one image, followed by the image you want to connect it to. You don't need to drag/draw the line, just click on the two images you'd like to connect - and the line will appear. Note that if you want to make a new connection using the same object you had connected previously, you must click on that object again in order to draw a new line to another object. If you would like to remove a connection, use the same process&mdash;click one image followed by the image it is linked to, and the existing line will be removed.</p><p style= 'font-size:25px;margin-top:100px'></p><br>",
instruct_mem_3="<div style='margin-left:200px ;margin-right: 200px ;text-justify: auto'><p style ='font-size: 30px;line-height:1.5'>When you are satisfied with the position of all the images and their connections, click the 'Submit' button to finish the task!</p><p style= 'font-size:25px;margin-top:100px'></p>",
mem_instructnames = ["instruct_mem_1","instruct_mem_2","instruct_mem_3"]
mem_instruct={instruct_mem_1,instruct_mem_2,instruct_mem_3} 


// survey


let survey_questions = `
<form id="survey">

<p>Did the experiment go smoothly or were there problems? (Note: Your compensation will not depend on your answer below, so please be honest!!!) <span style="color: red;">*</span></p>
<label><input type="radio" name="smooth" value="high" required> It went smoothly</label><br>
<label><input type="radio" name="smooth" value="med"> There were minor bumps</label><br>
<label><input type="radio" name="smooth" value="low"> There were significant problems. I don't think my responses should be included in the data.</label>

<hr>

<p>Which of the following problems did you have? <span style="color: red;">*</span></p>
<label><input type="checkbox" name="problems" value="reload"> Sometimes a page wouldn't load and I would have to reload the page</label><br>
<label><input type="checkbox" name="problems" value="connection"> During the experiment I experienced problems with my internet connection</label><br>
<label><input type="checkbox" name="problems" value="none"> none--Everything ran smoothly</label>

<hr>

<p>Were you doing anything else while participating in this study? PLEASE BE HONEST--your compensation will not depend on your answer to this question. <span style="color: red;">*</span></p>
<textarea id="distraction" name="distraction" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Please include any strategies you used to help learn during the task. Please be as specific as possible. <span style="color: red;">*</span></p>
<textarea id="strategies" name="strategies" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Were some routes easier to learn than others? Please explain why in detail if so. <span style="color: red;">*</span></p>
<textarea id="easier" name="easier" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Have you participated in a similar study on another platform? If so, please provide the platform name (Mturk, Prolific, etc.) and your user ID for that platform. <br>PLEASE BE HONEST--your compensation will not depend on your answer to this question. <span style="color: red;">*</span></p>
<textarea id="similar" name="similar" rows="3" style="width: 70%;" required></textarea>

<hr>

<p>Is there anything you would like the experimenters to know? For instance, was the task too difficult, boring, etc?</p>
<textarea id="comments" name="comments" rows="3" style="width: 70%;"></textarea>
<br><br></form>`;


//learning phse

let unshuffled_imageList=['GW/gong.jpg','GW/barrel.jpg','GW/basket.jpg','GW/soldier.jpg','GW/camera.jpg','GW/paint.jpg','GW/wheelchair.jpg','GW/dustpan.jpg','GW/snail.jpg','GW/globe.jpg','GW/hat.jpg','GW/jukebox.jpg','GW/teeth.jpg']
let imageList = []

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let image_arr = [];

for (let i = 0; i < unshuffled_imageList.length; i++) {
  image_arr.push(i);
}
shuffle(image_arr);

for (let i = 0; i < unshuffled_imageList.length; i++) {
  imageList.push(unshuffled_imageList[image_arr[i]])
}

imageIndex= [[0,1], [1,2], [1,3], [2,10], [2,5], [3,4], [3,11], [5,6], [5,8], [6,7], [6,8], [6,12], [7,8], [7,9], [8,10], [10,11]]

list_left=[imageList[imageIndex[0][0]],imageList[imageIndex[1][0]],imageList[imageIndex[2][0]],imageList[imageIndex[3][0]],imageList[imageIndex[4][0]],imageList[imageIndex[5][0]],imageList[imageIndex[6][0]],imageList[imageIndex[7][0]],imageList[imageIndex[8][0]],imageList[imageIndex[9][0]],imageList[imageIndex[10][0]],imageList[imageIndex[11][0]],imageList[imageIndex[12][0]],imageList[imageIndex[13][0]],imageList[imageIndex[14][0]],imageList[imageIndex[15][0]]]
list_right=[imageList[imageIndex[0][1]],imageList[imageIndex[1][1]],imageList[imageIndex[2][1]],imageList[imageIndex[3][1]],imageList[imageIndex[4][1]],imageList[imageIndex[5][1]],imageList[imageIndex[6][1]],imageList[imageIndex[7][1]],imageList[imageIndex[8][1]],imageList[imageIndex[9][1]],imageList[imageIndex[10][1]],imageList[imageIndex[11][1]],imageList[imageIndex[12][1]],imageList[imageIndex[13][1]],imageList[imageIndex[14][1]],imageList[imageIndex[15][1]]]
learn_left=[]
learn_right=[]

let arr = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 8; j++) {
    arr.push(i);
  }
}

let randomizedArray = shuffle(arr);

randomizedArray = ensureNoConsecutiveDuplicates(randomizedArray)

for (var i = 0; i < randomizedArray.length; i++){
    learn_left.push(list_left[randomizedArray[i]])
    learn_right.push(list_right[randomizedArray[i]])
}

var correctNode = []
var correctDirectNodes = 0
var shortDirectNodes = 0
var farDirectNodes = 0

// Graph object
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  displayGraph() {
    console.log(this.adjacencyList);
  }

    // Function to find nodes that are directly connected to the center node (1 edge apart)
  getDirectNeighbors(centerNode) {
    return this.adjacencyList[centerNode] || [];
  }

  getSingleDirectNeighbor() {
    const nodeIndexMap = new Map();
    return (centerNode) => {
        const neighbors = this.adjacencyList[centerNode] || [];
        if (neighbors.length === 0) return null;
        if (!nodeIndexMap.has(centerNode)) {
            nodeIndexMap.set(centerNode, 0);
        }
        let index = nodeIndexMap.get(centerNode);
        const neighbor = neighbors[index];
        nodeIndexMap.set(centerNode, (index + 1) % neighbors.length);
        return neighbor;
    };
}

  initTriplet() {
      this.correctNodefunc = this.getSingleDirectNeighbor();
  }

  cycleThroughNeighbors(node) {
      const nextNeighbor = this.correctNodefunc(node);
      return nextNeighbor
  } 


  // Function to find all nodes that are not directly connected to the center node
  getNonDirectNeighbors(centerNode) {
    const directNeighbors = new Set(this.getDirectNeighbors(centerNode));
    const allNodes = Object.keys(this.adjacencyList).map(Number);

    // Non-direct neighbors are all nodes that are not direct neighbors and not the centerNode itself
    const nonDirectNeighbors = allNodes.filter(node => !directNeighbors.has(node) && node !== centerNode);
    
    return nonDirectNeighbors;
  }

  getNeighborsAtDistance(centerNode, distance) {
    // If distance is 0, return only the centerNode itself
    if (distance === 0) {
      return [centerNode];
    }

    // Initialize sets and queues for BFS
    const visited = new Set([centerNode]);  // Track visited nodes to avoid cycles
    const queue = [[centerNode, 0]];  // Queue for BFS, stores pairs [node, currentDistance]
    const result = new Set();  // Store the nodes found at the desired distance

    // BFS loop
    while (queue.length > 0) {
      const [currentNode, currentDistance] = queue.shift();

      // Get neighbors of the current node
      const neighbors = this.getDirectNeighbors(currentNode);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);

          // If we reached the desired distance, add the node to result
          if (currentDistance + 1 === distance) {
            result.add(neighbor);
          }

          // If still under the desired distance, keep exploring
          if (currentDistance + 1 < distance) {
            queue.push([neighbor, currentDistance + 1]);
          }
        }
      }
    }

    return Array.from(result);  // Return the neighbors found at the specified distance
}
  // Function to generate a triplet [directNeighbor, centerNode, randomNonDirectNeighbor]
  getTriplet(centerNode) {
    const directNeighbors = this.getDirectNeighbors(centerNode);
    const nonDirectNeighbors = this.getNonDirectNeighbors(centerNode);
    const shorterNeighbor = this.getNeighborsAtDistance(centerNode,2)
    const furtherNeighbor = this.getNeighborsAtDistance(centerNode,3).concat(this.getNeighborsAtDistance(centerNode,4))
    if (directNeighbors.length === 0 || nonDirectNeighbors.length === 0) {
      return null; // Return null if no valid triplet can be found
    }

    // Select a random direct neighbor (1 edge apart)

    const correctNodeOption = this.cycleThroughNeighbors(centerNode)

    // Select a random non-direct neighbor (not directly connected)
    const shorterNode = shorterNeighbor[Math.floor(Math.random() * shorterNeighbor.length)];
    const furtherNode = furtherNeighbor[Math.floor(Math.random() * furtherNeighbor.length)]
    while(furtherNode == shorterNode){
      furtherNode = furtherNeighbor[Math.floor(Math.random() * furtherNeighbor.length)]
    }
    
   
    if(Math.floor(Math.random() * 3 + 1) == 1) {
      directNodes = [correctNodeOption, centerNode, furtherNode, shorterNode]
    }else if (Math.floor(Math.random() * 3 + 1) == 2){
      directNodes = [shorterNode, centerNode, correctNodeOption, furtherNode];
    } else{
      directNodes = [furtherNode, centerNode, shorterNode, correctNodeOption]
    }
    correctDirectNodes = correctNodeOption
    shortDirectNodes = shorterNode
    farDirectNodes = furtherNode
  }

  // Helper function to perform BFS and find all nodes k edges apart from the starting node
  findNodesKEdgesApart(start, k) {
    const queue = [[start, 0]];  // [vertex, distance]
    const visited = new Set();
    visited.add(start);
    const result = new Set();

    while (queue.length > 0) {
      const [vertex, distance] = queue.shift();

      // If we've reached the distance k, add this vertex
      if (distance === k) {
        result.add(vertex);
      }

      // If we haven't reached k edges yet, continue exploring neighbors
      if (distance < k) {
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
          }
        });
      }
    }

    return Array.from(result); // Return the nodes that are k edges apart from the start
  }

  // Function to find triplets where one node is leftK edges away and another node is rightK edges away from the center node
  getCustomTriplets(leftK, rightK) {
    const triplets = [];

    for (const centerNode in this.adjacencyList) {
      const nodesLeftKEdgesApart = this.findNodesKEdgesApart(parseInt(centerNode), leftK);
      const nodesRightKEdgesApart = this.findNodesKEdgesApart(parseInt(centerNode), rightK);

      // Create triplets [nodeLeftK, centerNode, nodeRightK]
      nodesLeftKEdgesApart.forEach((nodeLeft) => {
        nodesRightKEdgesApart.forEach((nodeRight) => {
          if (Math.floor(Math.random() * 2 + 1) == 1){
          triplets.push([nodeLeft, parseInt(centerNode), nodeRight]);
          } else {triplets.push([nodeRight, parseInt(centerNode), nodeLeft])}
          correctNode.push(nodeLeft)
        });
      });
    }

    return triplets;
  }
  
  getPairsKEdgesApart(k) {
    const pairs = new Set();

    // Helper function to perform BFS and find vertices k edges apart
    const bfs = (start) => {
      const queue = [[start, 0]];  // [vertex, distance]
      const visited = new Set();
      visited.add(start);

      while (queue.length) {
        const [vertex, distance] = queue.shift();

        // If we've reached the distance k, add the pair to the set
        if (distance === k) {
          const pair = [Math.min(start, vertex), Math.max(start, vertex)];
          pairs.add(pair.toString());
          continue;
        }

        // If not at distance k, explore neighbors
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, distance + 1]);
          }
        });
      }
    };

    // Perform BFS from each vertex
    for (const vertex in this.adjacencyList) {
      bfs(parseInt(vertex));
    }

    // Convert the set back into an array of pairs
    return Array.from(pairs).map(pair => pair.split(',').map(Number));
  }
}

// Initialize the graph
const graph = new Graph();
for (let i = 1; i < 14; i++) {
  graph.addVertex(i);
}

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 11);
graph.addEdge(3, 6);
graph.addEdge(4, 5);
graph.addEdge(4, 12);
graph.addEdge(6, 7);
graph.addEdge(6, 9);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
graph.addEdge(7, 13);
graph.addEdge(8, 9);
graph.addEdge(8, 10);
graph.addEdge(9, 11);
graph.addEdge(11, 12);

// graph.displayGraph();

//Direct Memory phase
graph.initTriplet()
let directRight = []
let directMid = []
let directLeft = []
let directUp = []
let directCorrect = []
let directShort = []
let directFar = []
var directNodes = 0

for(let i = 1;i<14;i++){
  for(let j = 0;j<graph.getDirectNeighbors(i).length;j++){
    graph.getTriplet(i)
    directLeft.push(directNodes[0])
    directUp.push(directNodes[1])
    directMid.push(directNodes[2])
    directRight.push(directNodes[3])
    directCorrect.push(correctDirectNodes)
    directShort.push(shortDirectNodes)
    directFar.push(farDirectNodes)
  }
  
}

// Generate directarr as before
let directarr = [];
for (let i = 0; i < directLeft.length; i++) {
  directarr.push(i);
}
directarr = shuffle(directarr);
directarr = shuffle(directarr);
directarr = shuffle(directarr);

// Apply back-to-back constraints with reordering
let ordered_directarr = [];
let dirprevUp = null;
let dirprevCorrect = null;

for (let i = 0; i < directarr.length; i++) {
  let foundValid = false;

  for (let j = i; j < directarr.length; j++) {
    let idx = directarr[j];
    let up = directUp[idx];
    let correct = directCorrect[idx];

    // Constraint checks
    if (
      up === dirprevUp ||
      correct === dirprevCorrect ||
      up === dirprevCorrect ||
      correct === dirprevUp
    ) {
      continue;
    }

    // Swap valid trial to position i
    if (i !== j) {
      [directarr[i], directarr[j]] = [directarr[j], directarr[i]];
    }

    ordered_directarr.push(directarr[i]);
    dirprevUp = up;
    dirprevCorrect = correct;
    foundValid = true;
    break;
  }

  if (!foundValid) {
    console.warn(`Could not find a valid trial for position ${i}.`);
    break;
  }
}

// Now build room_direct arrays using ordered_directarr
let room_direct_left = [];
let room_direct_mid = [];
let room_direct_right = [];
let room_direct_up = [];
let room_direct_correct = [];
let room_direct_far = [];
let room_direct_short = [];

for (let i = 0; i < ordered_directarr.length; i++) {
  let idx = ordered_directarr[i];
  room_direct_up.push(imageList[directUp[idx] - 1]);
  room_direct_left.push(imageList[directLeft[idx] - 1]);
  room_direct_right.push(imageList[directRight[idx] - 1]);
  room_direct_mid.push(imageList[directMid[idx] - 1]);
  room_direct_correct.push(imageList[directCorrect[idx] - 1]);
  room_direct_short.push(imageList[directShort[idx] - 1]);
  room_direct_far.push(imageList[directFar[idx] - 1]);
}


//Shoretst Path judge phase

// One distance diff (Hard)
twothree = graph.getCustomTriplets(2,3)
let twothreecorrect = correctNode
correctNode = []
threefour = graph.getCustomTriplets(3,4)
let threefourcorrect = correctNode
correctNode = []
fourfive = graph.getCustomTriplets(4,5)
let fourfivecorrect = correctNode
correctNode = []
fivesix = graph.getCustomTriplets(5,6)
let fivesixcorrect = correctNode
correctNode = []

let onediff = twothree.concat(threefour,fourfive)

// Two distance diff (Medium)
twofour = graph.getCustomTriplets(2,4)
let twofourcorrect = correctNode
correctNode = []
threefive = graph.getCustomTriplets(3,5)
let threefivecorrect = correctNode
correctNode = []
let foursix = graph.getCustomTriplets(4,6)
let foursixcorrect = correctNode
correctNode = []

let twodiff = twofour.concat(threefive)

// Three distance diff (Easy)
twofive = graph.getCustomTriplets(2,5)
let twofivecorrect = correctNode
correctNode = []
threesix = graph.getCustomTriplets(2,5)
let threesixcorrect = correctNode
correctNode = []

let threediff = twofive.concat(threesix)

// Four distance diff (Very Easy)
twosix = graph.getCustomTriplets(2,6)
twosixcorrect = correctNode
correctNode = []

let fourdiff = twosix

//

function makeShuffledArray(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let twothree_arr = makeShuffledArray(twothree.length);
let threefour_arr = makeShuffledArray(threefour.length);
let fourfive_arr = makeShuffledArray(fourfive.length);
let fivesix_arr = makeShuffledArray(fivesix.length);

let twofour_arr = makeShuffledArray(twofour.length);
let threefive_arr = makeShuffledArray(threefive.length);
let foursix_arr = makeShuffledArray(foursix.length);

let twofive_arr = makeShuffledArray(twofive.length);
let threesix_arr = makeShuffledArray(threesix.length);

let twosix_arr = makeShuffledArray(twosix.length);


let shuffled_twothree = []
let shuffled_threefour = []
let shuffled_fourfive = []
let shuffled_fivesix = []

let shuffled_twofour = []
let shuffled_threefive = []
let shuffled_foursix = []

let shuffled_twofive = []
let shuffled_threesix = []

let shuffled_twosix = []


let shuffled_twothree_correct = []
let shuffled_threefour_correct = []
let shuffled_fourfive_correct = []
let shuffled_fivesix_correct = []

let shuffled_twofour_correct = []
let shuffled_threefive_correct = []
let shuffled_foursix_correct = []

let shuffled_twofive_correct = []
let shuffled_threesix_correct = []

let shuffled_twosix_correct = []


let combined_arr = []

for (let i = 0;i < 12;i++){
  shuffled_twothree.push(twothree[twothree_arr[i]])
  shuffled_twothree_correct.push(twothreecorrect[twothree_arr[i]])
  combined_arr.push(i)

  shuffled_threefour.push(threefour[threefour_arr[i]]);
  shuffled_threefour_correct.push(threefourcorrect[threefour_arr[i]]);
  combined_arr.push(i+12);

  shuffled_fourfive.push(fourfive[fourfive_arr[i]]);
  shuffled_fourfive_correct.push(fourfivecorrect[fourfive_arr[i]]);
  combined_arr.push(i+24);

  shuffled_fivesix.push(fivesix[fivesix_arr[i]]);
  shuffled_fivesix_correct.push(fivesixcorrect[fivesix_arr[i]]);
  combined_arr.push(i+36);
}

for (let i = 0; i < 12; i++) {
  shuffled_twofour.push(twofour[twofour_arr[i]]);
  shuffled_twofour_correct.push(twofourcorrect[twofour_arr[i]]);
  combined_arr.push(i+48);

  shuffled_threefive.push(threefive[threefive_arr[i]]);
  shuffled_threefive_correct.push(threefivecorrect[threefive_arr[i]]);
  combined_arr.push(i+60);

  shuffled_foursix.push(foursix[foursix_arr[i]]);
  shuffled_foursix_correct.push(foursixcorrect[foursix_arr[i]]);
  combined_arr.push(i+72);
}

for (let i = 0; i < 12; i++) {
  shuffled_twofive.push(twofive[twofive_arr[i]]);
  shuffled_twofive_correct.push(twofivecorrect[twofive_arr[i]]);
  combined_arr.push(i+84);

  shuffled_threesix.push(threesix[threesix_arr[i]]);
  shuffled_threesix_correct.push(threesixcorrect[threesix_arr[i]]);
  combined_arr.push(i+96);
}

for (let i = 0; i < 13; i++) {
  shuffled_twosix.push(twosix[twosix_arr[i]]);
  shuffled_twosix_correct.push(twosixcorrect[twosix_arr[i]]);
  combined_arr.push(i+108);
}

let cumulativediff = shuffled_twothree
.concat(shuffled_threefour)
.concat(shuffled_fourfive)
.concat(shuffled_fivesix)
.concat(shuffled_twofour)
.concat(shuffled_threefive)
.concat(shuffled_foursix)
.concat(shuffled_twofive)
.concat(shuffled_threesix)
.concat(shuffled_twosix);

let cumulativeCorrect = shuffled_twothree_correct
.concat(shuffled_threefour_correct)
.concat(shuffled_fourfive_correct)
.concat(shuffled_fivesix_correct)
.concat(shuffled_twofour_correct)
.concat(shuffled_threefive_correct)
.concat(shuffled_foursix_correct)
.concat(shuffled_twofive_correct)
.concat(shuffled_threesix_correct)
.concat(shuffled_twosix_correct);

// Step 1: Shuffle initial index list
let cumulativearr = [];
for (let i = 0; i < cumulativediff.length; i++) {
  cumulativearr.push(i);
}
cumulativearr = shuffle(cumulativearr);

// Step 2: Enforce constraints by reordering (swap-based)
let ordered_shortestarr = [];
let prevUp = null;
let prevCorrect = null;

for (let i = 0; i < cumulativearr.length; i++) {
  let foundValid = false;

  for (let j = i; j < cumulativearr.length; j++) {
    let trialIndex = cumulativearr[j];
    let top = cumulativediff[trialIndex][1];
    let correct = cumulativeCorrect[trialIndex];

    if (
      top === prevUp ||
      correct === prevCorrect ||
      correct === prevUp ||
      top === prevCorrect
    ) {
      continue;
    }

    // Swap valid trial to position i
    if (i !== j) {
      [cumulativearr[i], cumulativearr[j]] = [cumulativearr[j], cumulativearr[i]];
    }

    ordered_shortestarr.push(cumulativearr[i]);
    prevUp = top;
    prevCorrect = correct;
    foundValid = true;
    break;
  }

  if (!foundValid) {
    console.warn(`⚠️ Could not find valid trial for position ${i} under current constraints.`);
    break;
  }
}

// Step 3: Build final arrays using ordered_shortestarr
let upList = [];
let leftList = [];
let rightList = [];
let correctShortList = [];
let sorted_combined_arr = [];

for (let i = 0; i < ordered_shortestarr.length; i++) {
  let trialIndex = ordered_shortestarr[i];
  upList.push(cumulativediff[trialIndex][1]);
  leftList.push(cumulativediff[trialIndex][0]);
  rightList.push(cumulativediff[trialIndex][2]);
  correctShortList.push(cumulativeCorrect[trialIndex]);
  sorted_combined_arr.push(combined_arr[trialIndex]);
}

// Step 4: Convert to image paths
let room_shortest_up = upList.map(i => imageList[i - 1]);
let room_shortest_left = leftList.map(i => imageList[i - 1]);
let room_shortest_right = rightList.map(i => imageList[i - 1]);
let room_shortest_correct = correctShortList.map(i => imageList[i - 1]);
//Goal Directed Navigation:

var room_goaldir_left = []
var room_goaldir_right = []

let twoEdgePair = graph.getPairsKEdgesApart(2)
let threeEdgePair = graph.getPairsKEdgesApart(3)
let fourEdgePair = graph.getPairsKEdgesApart(4)
let fiveEdgePair = graph.getPairsKEdgesApart(5)

let goaldirList = graph.getPairsKEdgesApart(2).concat(graph.getPairsKEdgesApart(3),graph.getPairsKEdgesApart(4),graph.getPairsKEdgesApart(5))
goaldirIndex = []
for (let i = 0; i < goaldirList.length; i++) {
  goaldirIndex.push(i);
}
goaldirIndex = shuffle(goaldirIndex)

let shuffledList = []
for (let i = 0;i < 4; i++){
  shuffledList.push(goaldirList[goaldirIndex[i]])
  shuffledList.push(goaldirList[goaldirIndex[i+twoEdgePair.length]])
  shuffledList.push(goaldirList[goaldirIndex[i+twoEdgePair.length + threeEdgePair.length]])
  shuffledList.push(goaldirList[goaldirIndex[i+twoEdgePair.length + threeEdgePair.length + fourEdgePair.length]])
}

let shuffledIndex = []
for (let i = 0; i < shuffledList.length; i++) {
  shuffledIndex.push(i);
}

for (let i = 0; i<shuffledList.length; i++){
  if(Math.floor(Math.random() * 2 + 1) == 1){
    room_goaldir_left.push(shuffledList[shuffledIndex[i]][0])
    room_goaldir_right.push(shuffledList[shuffledIndex[i]][1])
  }else {
    room_goaldir_left.push(shuffledList[shuffledIndex[i]][1])
    room_goaldir_right.push(shuffledList[shuffledIndex[i]][0])
  }

}

function ensureNoConsecutiveDuplicates(arr) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
          for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] !== arr[i] && arr[j - 1] !== arr[i]) {
                  [arr[i], arr[j]] = [arr[j], arr[i]];
                  break;
              }
          }
      }
  }
  return arr;
}

//color for the plus sign
atcheckcolor=['blue','green']

//determinant for the time for the flash color
function colorStart(){
    colordetretime= Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
    return colordetretime
}

//time for the duration of the color being present
function colorStop(colordetretime){
    removecolor= 1500-colordetretime-100;
    return removecolor
}


//randomDelay for Direct Memory Test and Shortest Path Judgement
var randomDelay = Math.floor(Math.random() * (2500 - 100 + 1)) + 100;
