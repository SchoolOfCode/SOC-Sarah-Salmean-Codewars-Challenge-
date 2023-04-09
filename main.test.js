import {test, expect} from "@jest/globals";
import {filmNights} from "./main.js";

//👉 Write your tests below here:

test ("Calculating how long it takes to view the film", function() {
    const actual = filmNights();
    expect(actual).toBeCloseTo(138) 
    })

