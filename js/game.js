let gameBlocksArea = document.getElementById("gameBlocksArea");
document.querySelector(".game-control button").onclick = function() {
    let yourName = prompt("اكتب اسمك الاول (العربي افضل)");
    if (yourName == null || yourName == "") {
        document.getElementById("msg").classList.add("msg-show");
        setTimeout(function() {
            document.getElementById("msg").classList.remove("msg-show");
        }, 6000);
    } else {
        // gameBlocksArea.innerHTML = `
        // <div class="game-blocks">
        //       <div class="block" data-number="one">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (7).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="one">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (7).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- Tow -->
        //       <div class="block" data-number="two">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (8).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="two">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (8).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- three -->
        //       <div class="block" data-number="three">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (9).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="three">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (9).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- four -->
        //       <div class="block" data-number="four">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (10).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="four">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (10).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- Five -->
        //       <div class="block" data-number="five">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (11).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="five">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (11).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="six">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (12).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="six">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (12).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- Tow -->
        //       <div class="block" data-number="seven">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (13).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="seven">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (13).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- three -->
        //       <div class="block" data-number="eat">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (14).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="eat">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (14).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- four -->
        //       <div class="block" data-number="nigin">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (15).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="nigin">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (15).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <!-- Five -->
        //       <div class="block" data-number="ten">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (16).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //       <div class="block" data-number="ten">
        //           <div class="front face"></div>
        //           <div class="back face">
        //               <img src="imgs/ (16).jpg" alt="Image For Game" />
        //           </div>
        //       </div>
        //   </div>
        // `
        var blocksa = document.querySelectorAll(".block");
        document.querySelector(".name span").textContent =
            "اهلا بيك يا " + yourName;
        document.querySelector(".game-control").remove();
        setTimeout(function() {
            blocksa.forEach(function(e) {
                e.classList.add("is-flipped");
            });
        }, 100);
        setTimeout(function() {
            blocksa.forEach(function(e) {
                e.classList.remove("is-flipped");
            });
        }, 4100);
    }
};
let duration = 1000;

let blockContainer = document.querySelector(".game-blocks");

let cards = Array.from(blockContainer.children);

let order = [...Array(cards.length).keys()];
shuffle(order);
// Add Order Css Property To Game Blocks
cards.forEach((block, index) => {
    // Add CSS Order Property
    block.style.order = order[index];

    // Add Click Event
    block.addEventListener("click", function() {
        // Trigger The Flip Block Function
        flipBlock(block);
    });
});

function flipBlock(selectedBlock) {
    // Add Class is-flipped
    selectedBlock.classList.add("is-flipped");

    // Collect All Flipped Cards
    let allFlippedBlocks = cards.filter((flippedBlock) =>
        flippedBlock.classList.contains("is-flipped")
    );

    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
        // console.log('Two Flipped Blocks Selected');

        // Stop Clicking Function
        stopClicking();

        // Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}
// Stop Clicking Function
function stopClicking() {
    // Add Class No Clicking on Main Container
    blockContainer.classList.add("no-clicking");

    // Wait Duration
    setTimeout(() => {
        // Remove Class No Clicking After The Duration
        blockContainer.classList.remove("no-clicking");
    }, duration);
}
// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector(".wrong span");

    if (firstBlock.dataset.number === secondBlock.dataset.number) {
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");

        document.getElementById("success").play();
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
        }, duration);

        document.getElementById("fail").play();
    }
    if (triesElement.textContent >= 20) {
        document.querySelector(".fall-msg").style.display = "block";
    }
}
// Shuffle Function
function shuffle(array) {
    // Settings Vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        // Get Random Number
        random = Math.floor(Math.random() * current);

        // Decrease Length By One
        current--;

        // [1] Save Current Element in Stash
        temp = array[current];

        // [2] Current Element = Random Element
        array[current] = array[random];

        // [3] Random Element = Get Element From Stash
        array[random] = temp;
    }

    return array;
}