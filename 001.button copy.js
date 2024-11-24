const sr_button = document.getElementsByClassName("buildingButton")[0]
const sm_button = document.getElementsByClassName("buildingButton")[1]
const sg_button = document.getElementsByClassName("buildingButton")[2]
const buttonArray = [sr_button,sm_button,sg_button]

const flooor = document.getElementsByClassName("chooseFloor")[0]
const room = document.getElementsByClassName("chooseRoom")[0]

const sr_floor = document.getElementsByClassName("sr-floor-container")[0] 
const sm_floor = document.getElementsByClassName("sm-floor-container")[0] 
const sg_floor = document.getElementsByClassName("sg-floor-container")[0] 

const sr_floor_1 = document.getElementsByClassName("sr-floorNumber")[0]
const sr_floor_2 = document.getElementsByClassName("sr-floorNumber")[1]
const sr_floor_3 = document.getElementsByClassName("sr-floorNumber")[2]
const sr_floor_4 = document.getElementsByClassName("sr-floorNumber")[3]
const sr_floor_5 = document.getElementsByClassName("sr-floorNumber")[4]
const sr_floor_array = [sr_floor_1,sr_floor_2,sr_floor_3,sr_floor_4,sr_floor_5]

const sm_floor_1 = document.getElementsByClassName("sm-floorNumber")[0]
const sm_floor_2 = document.getElementsByClassName("sm-floorNumber")[1]
const sm_floor_3 = document.getElementsByClassName("sm-floorNumber")[2]
const sm_floor_4 = document.getElementsByClassName("sm-floorNumber")[3]
const sm_floor_5 = document.getElementsByClassName("sm-floorNumber")[4]
const sm_floor_array = [sm_floor_1,sm_floor_2,sm_floor_3,sm_floor_4,sm_floor_5]

const sg_floor_1 = document.getElementsByClassName("sg-floorNumber")[0]
const sg_floor_2 = document.getElementsByClassName("sg-floorNumber")[1]
const sg_floor_3 = document.getElementsByClassName("sg-floorNumber")[2]
const sg_floor_4 = document.getElementsByClassName("sg-floorNumber")[3]
const sg_floor_5 = document.getElementsByClassName("sg-floorNumber")[4]
const sg_floor_array = [sg_floor_1,sg_floor_2,sg_floor_3,sg_floor_4,sg_floor_5]

const sr_room = document.getElementsByClassName("sr-room")[0]
const sm_room = document.getElementsByClassName("sm-room")[0]
const sg_room = document.getElementsByClassName("sg-room")[0]

const sr_building_1 = document.getElementsByClassName("sr-building-1")[0]
const sr_building_2 = document.getElementsByClassName("sr-building-2")[0]
const sm_building_1 = document.getElementsByClassName("sm-building-1")[0]
const sm_building_2 = document.getElementsByClassName("sm-building-2")[0]
const sg_building_1 = document.getElementsByClassName("sg-building-1")[0]
const sg_building_2 = document.getElementsByClassName("sg-building-2")[0]

const sr_room_1 = document.getElementsByClassName("sr-room")[1]
const sr_room_2 = document.getElementsByClassName("sr-room")[2]
const srRoomArray = [sr_room_1,sr_room_2]

const sm_room_1 = document.getElementsByClassName("sm-room")[1]
const sm_room_2 = document.getElementsByClassName("sm-room")[2]
const smRoomArray = [sm_room_1,sm_room_2]

const sg_room_1 = document.getElementsByClassName("sg-room")[1]
const sg_room_2 = document.getElementsByClassName("sg-room")[2]
const sgRoomArray = [sg_room_1,sg_room_2]

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",()=>{
        if (i == 0){ // for SR
            flooor.classList.remove("opicityZero")
            sr_floor.classList.remove("display-none")
            sm_floor.classList.add("display-none")
            sg_floor.classList.add("display-none")
            room.classList.add("display-none")

            sr_building_1.style.backgroundColor = "#BFBFBF"
            sr_building_2.style.backgroundColor = "#BFBFBF"
            sm_building_1.style.backgroundColor = "#BFBFBF"
            sm_building_2.style.backgroundColor = "#BFBFBF"
            sg_building_1.style.backgroundColor = "#BFBFBF"
            sg_building_2.style.backgroundColor = "#BFBFBF"

            for (let i = 0; i < sr_floor_array.length; i++){
                sr_floor_array[i].addEventListener("click",()=>{
                    room.classList.remove("opicityZero")
                    room.classList.remove("display-none")
                    sr_room.classList.remove("display-none")
                    sm_room.classList.add("display-none")
                    sg_room.classList.add("display-none")
                    if (i == 0) {
                        sr_room_1.innerHTML = "101 - 106"
                        sr_room_2.innerHTML = "107 - 114"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; srRoomArray.length; i++) {
                            srRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sr_building_1.style.backgroundColor = "#DC3545"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else if (i == 1){
                                sr_building_1.style.backgroundColor = "#BFBFBF"
                                sr_building_2.style.backgroundColor = "#DC3545"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 1) {
                        sr_room_1.innerHTML = "201 - 208"
                        sr_room_2.innerHTML = "209 - 218"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; srRoomArray.length; i++) {
                            srRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sr_building_1.style.backgroundColor = "#DC3545"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else if (i == 1){
                                sr_building_1.style.backgroundColor = "#BFBFBF"
                                sr_building_2.style.backgroundColor = "#DC3545"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 2) {
                        sr_room_1.innerHTML = "301 - 324"
                        sr_room_2.innerHTML = "325 - 349"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; srRoomArray.length; i++) {
                            srRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sr_building_1.style.backgroundColor = "#DC3545"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else if (i == 1){
                                sr_building_1.style.backgroundColor = "#BFBFBF"
                                sr_building_2.style.backgroundColor = "#DC3545"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 3) {
                        sr_room_1.innerHTML = "401 - 416"
                        sr_room_2.innerHTML = "417 - 431"

                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; srRoomArray.length; i++) {
                            srRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sr_building_1.style.backgroundColor = "#DC3545"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else if (i == 1){
                                sr_building_1.style.backgroundColor = "#BFBFBF"
                                sr_building_2.style.backgroundColor = "#DC3545"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else {
                        sr_room_1.innerHTML = "SR - 501"
                        sr_room_2.innerHTML = "no class"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; srRoomArray.length; i++) {
                            srRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sr_building_1.style.backgroundColor = "#DC3545"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else if (i == 1){
                                sr_building_1.style.backgroundColor = "#BFBFBF"
                                sr_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                })
            }
        }

        else if(i == 1){ // For SM
            flooor.classList.remove("opicityZero")
            sm_floor.classList.remove("display-none")
            sr_floor.classList.add("display-none")
            sg_floor.classList.add("display-none")
            room.classList.add("display-none")

            sr_building_1.style.backgroundColor = "#BFBFBF"
            sr_building_2.style.backgroundColor = "#BFBFBF"
            sm_building_1.style.backgroundColor = "#BFBFBF"
            sm_building_2.style.backgroundColor = "#BFBFBF"
            sg_building_1.style.backgroundColor = "#BFBFBF"
            sg_building_2.style.backgroundColor = "#BFBFBF"

            for (let i = 0; i < sr_floor_array.length; i++){
                sm_floor_array[i].addEventListener("click",()=>{
                    room.classList.remove("opicityZero")
                    room.classList.remove("display-none")
                    sr_room.classList.add("display-none")
                    sm_room.classList.remove("display-none")
                    sg_room.classList.add("display-none")
                    if (i == 0) {
                        sm_room_1.innerHTML = "103 - 110"
                        sm_room_2.innerHTML = "111 - 118"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; smRoomArray.length; i++) {
                            smRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#198754"
                                }
                                else if (i == 1){
                                sm_building_1.style.backgroundColor = "#198754"
                                sm_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 1) {
                        sm_room_1.innerHTML = "204 - 212"
                        sm_room_2.innerHTML = "213 - 220"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; smRoomArray.length; i++) {
                            smRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#198754"
                                }
                                else if (i == 1){
                                sm_building_1.style.backgroundColor = "#198754"
                                sm_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 2) {
                        sm_room_1.innerHTML = "305 - 328"
                        sm_room_2.innerHTML = "329 - 352"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; smRoomArray.length; i++) {
                            smRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#198754"
                                }
                                else if (i == 1){
                                sm_building_1.style.backgroundColor = "#198754"
                                sm_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 3) {
                        sm_room_1.innerHTML = "407 - 415"
                        sm_room_2.innerHTML = "416 - 423"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; smRoomArray.length; i++) {
                            smRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#198754"
                                }
                                else if (i == 1){
                                sm_building_1.style.backgroundColor = "#198754"
                                sm_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else {
                        sm_room_1.innerHTML = "SR - 510"
                        sm_room_2.innerHTML = "no class"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; smRoomArray.length; i++) {
                            smRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#198754"
                                }
                                else if (i == 1){
                                sm_building_1.style.backgroundColor = "#BFBFBF"
                                sm_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                })
            }
        }

        else{   // For SG
            flooor.classList.remove("opicityZero")
            sg_floor.classList.remove("display-none")
            sr_floor.classList.add("display-none")
            sm_floor.classList.add("display-none")
            room.classList.add("display-none")

            sr_building_1.style.backgroundColor = "#BFBFBF"
            sr_building_2.style.backgroundColor = "#BFBFBF"
            sm_building_1.style.backgroundColor = "#BFBFBF"
            sm_building_2.style.backgroundColor = "#BFBFBF"
            sg_building_1.style.backgroundColor = "#BFBFBF"
            sg_building_2.style.backgroundColor = "#BFBFBF"

            for (let i = 0; i < sr_floor_array.length; i++){
                sg_floor_array[i].addEventListener("click",()=>{
                    room.classList.remove("opicityZero")
                    room.classList.remove("display-none")
                    sr_room.classList.add("display-none")
                    sm_room.classList.add("display-none")
                    sg_room.classList.remove("display-none")
                    if (i == 0) {
                        sg_room_1.innerHTML = "102 - 114"
                        sg_room_2.innerHTML = "115 - 119"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; sgRoomArray.length; i++) {
                            sgRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#FFC008"
                                }
                                else if (i == 1){
                                sg_building_1.style.backgroundColor = "#FFC008"
                                sg_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 1) {
                        sg_room_1.innerHTML = "202 - 211"
                        sg_room_2.innerHTML = "212 - 219"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; sgRoomArray.length; i++) {
                            sgRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#FFC008"
                                }
                                else if (i == 1){
                                sg_building_1.style.backgroundColor = "#FFC008"
                                sg_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 2) {
                        sg_room_1.innerHTML = "302 - 326"
                        sg_room_2.innerHTML = "327 - 350"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; sgRoomArray.length; i++) {
                            sgRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#FFC008"
                                }
                                else if (i == 1){
                                sg_building_1.style.backgroundColor = "#FFC008"
                                sg_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            })
                        }
                    }
                    else if (i == 3) {
                        sg_room_1.innerHTML = "404 - 419"
                        sg_room_2.innerHTML = "420 - 434"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; sgRoomArray.length; i++) {
                            sgRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#FFC008"
                                }
                                else if (i == 1){
                                sg_building_1.style.backgroundColor = "#FFC008"
                                sg_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            }) 
                        }
                    }
                    else {
                        sg_room_1.innerHTML = "SR - 503"
                        sg_room_2.innerHTML = "no class"
                        sr_building_1.style.backgroundColor = "#BFBFBF"
                        sr_building_2.style.backgroundColor = "#BFBFBF"
                        sm_building_1.style.backgroundColor = "#BFBFBF"
                        sm_building_2.style.backgroundColor = "#BFBFBF"
                        sg_building_1.style.backgroundColor = "#BFBFBF"
                        sg_building_2.style.backgroundColor = "#BFBFBF"
                        for (let i = 0; sgRoomArray.length; i++) {
                            sgRoomArray[i].addEventListener("click",()=>{
                                if (i == 0) {
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#FFC008"
                                }
                                else if (i == 1){
                                sg_building_1.style.backgroundColor = "#BFBFBF"
                                sg_building_2.style.backgroundColor = "#BFBFBF"
                                }
                                else{

                                }
                            }) 
                        }
                    }
                })
            }
        }
    })
}
