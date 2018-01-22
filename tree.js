
// var myself = this;


// function tree (size, levels, iteration, angles, decay, random){
//     //Declaration
//     var length = size;

//     //Argument parsing for decay
//     if (decay){
//         length = size / Math.pow(2,  iteration);
//     }

//     //Argument parsing for random
//     if (random){
//         angles = angles.map(angle => (angle + (Math.random() * 180 - 90)));
//     }

//     //Activation function definition
//     //This moves the sprite per run
//     function activate (angle){
//         myself.turn(angle);
//         myself.forward(length);
//         tree(size, levels-1, iteration+1, angles, decay, random);
//         myself.forward(-length);
//         myself.turn(-angle);
//         //Meaningless return
//         return 0;
//     }

//     //Initial run
//     if (iteration == 0){
//         myself.setHeading(0);
//         activate(0);
//         //Meaningless return
//         return 0;
//     }

//     //Stopping point
//     else if (levels == 0){
//         //Meaningless return
//         return 0;
//     }

//     //Creates a tree for each angle
//     angles.forEach(activate);

//     //Meaningless return
//     return 0;
// };


// tree(100, 12, 0, [30,-30], true, true);


var myself = this;


function tree (size, levels, iteration, angles, decay, random){
    //Declaration
    var length = size;

    //Argument parsing for decay
    if (decay && random){
        length = length - length * .8;  
    }
    if (decay && !random){
        length = size / Math.pow(2,  iteration);
    }

    //Argument parsing for random
    if (random){
        angles = angles.map(angle => (Math.random() * 140 - 70));
    }

    //Activation function definition
    //This moves the sprite per run
    function activate (angle){
        myself.turn(angle);
        myself.forward(length);
        tree(size, levels-1, iteration+1, angles, decay, random);
        myself.forward(-length);
        myself.turn(-angle);
        //Meaningless return
        return 0;
    }

    //Initial run
    if (iteration == 0){
        myself.setHeading(0);
        activate(0);
        //Meaningless return
        return 0;
    }

    //Stopping point
    else if (levels == 0){
        //Meaningless return
        return 0;
    }

    //Creates a tree for each angle
    angles.forEach(activate);

    //Meaningless return
    return 0;
};


tree(sizeIn, levelsIn, 0, anglesIn.asArray(), decayIn, randomIn);

