// make a staircase of n size, where n is the input number

/*
INPUT: 4
OUTPUT:
   #
  ##
 ###
####
*/

// O(n) time | O(n) space
const staircase = n => {
    const staircase = buildInitial(n)
    console.log(staircase.join(""))
    for (let i = n - 2; i >= 0; i--) {
        staircase[i] = "#"
        console.log(staircase.join("")) // better time/space using .join()
    }
}

const buildInitial = n => {
    let spaces = []
    for (let i = n - 1; i > 0; i--) {
        spaces.push(" ")
    }
    spaces.push("#")
    return spaces
}

console.log(staircase(6))

/*
     #
    ##
   ###
  ####
 #####
######
*/
