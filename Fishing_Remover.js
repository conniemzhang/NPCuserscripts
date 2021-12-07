// ==UserScript==
// @name         Fishing Junk Item Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://neopetsclassic.com/inventory/
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @grant        none
// ==/UserScript==

<!-- Dictionary value determines what happens to the item.
// 0 = Safety Deposit Box
// 1 = Donate
// 2 = Discard
// 3 = Nothing
-->

var junkItems = {
    'Giant Red Kelp':0,
    "Blandfish":0,
    "Breadfish":0,
    "Broken Fishing Pole":0,
    "Bucket of Sludge":0,
    "Butterfish":0,
    "Cheery Plant":0,
    "Cinder Block Sea Fungus":0,
    "Cubical Sea Fungus":0,
    "Dull Grey Pearl":0,
    "Enormous Fake Diamond":0,
    "Eyefish":0,
    "Fishing Made Easy":0,
    "Fractalpus":0,
    "Giant Brown Kelp":0,
    "Giant Giant Squid":0,
    "Giant Green Kelp":0,
    "Giant Red Kelp":0,
    "Grey Sea Fern":0,
    "Landfish":0,
    "Lesser Spotted Fish":0,
    "Madfish":0,
    "Old Rotten Left Boot":0,
    "Old Rotten Left Sandal":0,
    "Old Rotten Left Shoe":0,
    "Old Rotten Right Boot":0,
    "Old Rotten Right Sandal":0,
    "Old Rotten Right Shoe":0,
    "On Gelert Pond":0,
    "Petrified Bone":0,
    "Rockfish":0,
    "Rotting Driftwood":0,
    "Rusty Old Can":0,
    "Scrawnyfish":0,
    "Small Giant Squid":0,
    "Spongy Algae":0,
    "Tanglepus":0,
    "The Old Mynci and the Sea":0,
    "Waterfish":0,
    "Waterlogged Book":0,
}
function onItemView() {
    var item = document.getElementsByTagName("td")[1]
    var regex = RegExp('(?<=Item</b> : ).*(?=\n)', 'g')
    var itemName = item.outerHTML.match(regex)[0];
    var option = document.getElementsByName("itemaction")[0];
    var form = document.getElementsByName("item_form");
    if(junkItems[itemName] == undefined){
        return;
    }
    if(junkItems[itemName] == 0){
        option.value = 'deposit';
    }
    if(junkItems[itemName] == 1){
        option.value = 'donate';
    }
    if(junkItems[itemName] == 2){
        option.value = 'discard';
    }
    document.createElement('form').submit.call(form[0])
}
onItemView()
