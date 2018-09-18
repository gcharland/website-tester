"use strict" // Tag that makes the entire code work the "modern" way

let yesOrNo = (question) => (confirm(question)) ? showYes() : showNo();

let showYes = () => alert("You said yes");
let showNo = () => alert("You said no");

yesOrNo("Do you?");
