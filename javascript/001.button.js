const sr_button = document.getElementsByClassName("buildingButton")[0]
const sm_button = document.getElementsByClassName("buildingButton")[1]
const sg_button = document.getElementsByClassName("buildingButton")[2]
const buttonArray = [sr_button,sm_button,sg_button]

const flooor = document.getElementsByClassName("chooseFloor")[0]
const floor1 = document.getElementsByClassName("floorNumber")[0]
const floor2 = document.getElementsByClassName("floorNumber")[1]
const floor3 = document.getElementsByClassName("floorNumber")[2]
const floor4 = document.getElementsByClassName("floorNumber")[3]
const floor5 = document.getElementsByClassName("floorNumber")[4]
const floorNoArray = [floor1,floor2,floor3,floor4,floor5]

const room = document.getElementsByClassName("chooseRoom")[0]
const room1 = document.getElementsByClassName("roomNo")[0]
const room2 = document.getElementsByClassName("roomNo")[1]
const roomArray = [room1,room2]

const sr_building_1 = document.getElementsByClassName("sr-building-1")[0]
const sr_building_2 = document.getElementsByClassName("sr-building-2")[0]
const sm_building_1 = document.getElementsByClassName("sm-building-1")[0]
const sm_building_2 = document.getElementsByClassName("sm-building-2")[0]
const sg_building_1 = document.getElementsByClassName("sg-building-1")[0]
const sg_building_2 = document.getElementsByClassName("sg-building-2")[0]

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",()=>{
        if (i == 0){ // for SR
            room.classList.add("opicityZero")
            flooor.classList.remove("opicityZero")
            sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sr_button.style.color = "white"
            sm_button.style.color = "black"
            sg_button.style.color = "black"
            sr_button.style.backgroundColor = "#DC3545"
            sg_button.style.backgroundColor = "white"
            sm_button.style.backgroundColor = "white"
            // Floor Part
            for (let i = 0; i < roomArray.length; i++){
                floorNoArray[i].addEventListener("click",()=>{
                    if (i == 0){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "white"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "#DC3545"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "101 - 106"
                        room2.innerHTML = "107 - 114"
                        // Pick Room
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"


                                    sr_building_1.style.backgroundColor = "#DC3545"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "orange"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }

                    }
                    else if(i == 1){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "white"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "orange"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "201 - 208"
                        room2.innerHTML = "209 - 218"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "#DC3545"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }                      
                        
                    }
                    else if(i == 2){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "white"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "#11CAF0"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "301 - 324"
                        room2.innerHTML = "325 - 349"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "#DC3545"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 3){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "white"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "#DC3545"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "401 - 416"
                        room2.innerHTML = "417 - 431"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "#DC3545"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 4){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "white"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "orange"

                        room1.innerHTML = "SR - 501"
                        room2.innerHTML = ""
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "#DC3545"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                })
            }
        }
        else if(i == 1){ // For SM
            room.classList.add("opicityZero")
            flooor.classList.remove("opicityZero")

            sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

            sm_button.style.color = "white"
            sr_button.style.color = "black"
            sg_button.style.color = "black"
            sr_button.style.backgroundColor = "white"
            sg_button.style.backgroundColor = "white"
            sm_button.style.backgroundColor = "orange"
            // Floor Part
            for (let i = 0; i < floorNoArray.length; i++){
                floorNoArray[i].addEventListener("click",()=>{
                    if (i == 0){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "white"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "#DC3545"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "103 - 110"
                        room2.innerHTML = "111 - 118"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "#DC3545"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "orange"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }

                    }
                    else if(i == 1){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "white"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "orange"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "204 - 212"
                        room2.innerHTML = "213 - 220"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "#DC3545"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "orange"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 2){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "white"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "#11CAF0"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "305 - 328"
                        room2.innerHTML = "329 - 352"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "#DC3545"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "orange"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 3){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "white"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "#DC3545"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "407 - 415"
                        room2.innerHTML = "416 - 423"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "#DC3545"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "orange"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 4){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "white"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "orange"

                        room1.innerHTML = "SR - 510"
                        room2.innerHTML = ""
                        
                    }
                })
            }
        }
        else{   // For SG
            room.classList.add("opicityZero")
            flooor.classList.remove("opicityZero")

            sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
            sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

            sg_button.style.color = "white"
            sm_button.style.color = "black"
            sr_button.style.color = "black"
            sr_button.style.backgroundColor = "white"
            sg_button.style.backgroundColor = "#11CAF0"
            sm_button.style.backgroundColor = "white"
            // Floor Part
            for (let i = 0; i < floorNoArray.length; i++){
                floorNoArray[i].addEventListener("click",()=>{
                    if (i == 0){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "white"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "#DC3545"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "102 - 114"
                        room2.innerHTML = "115 - 119"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "orange"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }

                    }
                    else if(i == 1){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "white"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "orange"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "202 - 211"
                        room2.innerHTML = "212 = 219"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "orange"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 2){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "white"
                        floor4.style.color = "black"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "#11CAF0"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "302 - 326"
                        room2.innerHTML = "327 - 350"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "orange"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 3){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "white"
                        floor5.style.color = "black"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "#DC3545"
                        floor5.style.backgroundColor = "white"

                        room1.innerHTML = "404 - 419"
                        room2.innerHTML = "420 - 434"
                        // Pick Roon
                        for (let i = 0; i < floorNoArray.length; i++) {
                            roomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                    room1.style.color = "white"
                                    room2.style.color = "black"
                                    room1.style.backgroundColor = "#DC3545"
                                    room2.style.backgroundColor = "white"

                                    sr_building_1.style.backgroundColor = "orange"
                                    sr_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"

                                }
                                else {
                                    room1.style.color = "black"
                                    room2.style.color = "white"
                                    room1.style.backgroundColor = "white"
                                    room2.style.backgroundColor = "orange"

                                    sr_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sr_building_2.style.backgroundColor = "orange"
                                    sm_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sm_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_1.style.backgroundColor = "rgb(191, 191, 191)"
                                    sg_building_2.style.backgroundColor = "rgb(191, 191, 191)"
                                }
                            })
                        }
                    }
                    else if(i == 4){
                        room.classList.remove("opicityZero")
                        floor1.style.color = "black"
                        floor2.style.color = "black"
                        floor3.style.color = "black"
                        floor4.style.color = "black"
                        floor5.style.color = "white"

                        floor1.style.backgroundColor = "white"
                        floor2.style.backgroundColor = "white"
                        floor3.style.backgroundColor = "white"
                        floor4.style.backgroundColor = "white"
                        floor5.style.backgroundColor = "orange"

                        room1.innerHTML = "SR - 503"
                        room2.innerHTML = ""
                        
                    }
                })
            }
        }
    })
}
