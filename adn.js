function showARNfromADN(copiedADN) {
    copiedADN = copiedADN.toUpperCase();
    let regex = /(q|w|e|r|z|u|i|o|p|s|d|f|h|j|k|l|y|x|v|b|n|m)/gim;
    if (copiedADN.match(regex) === null) {
      let one, two, three, four, five, six, nonCopiedADN, ARN;
      one = copiedADN.replace(/G/gm, "g");
      two = one.replace(/T/gm, "t");
      three = two.replace(/t/gm, "a");
      four = three.replace(/A/gm, "t");
      five = four.replace(/g/gm, "c");
      six = five.replace(/C/gm, "G");
      nonCopiedADN = six.toUpperCase();
      ARN = nonCopiedADN.replace(/T/gim, "U");
      console.log(copiedADN);
      console.log(nonCopiedADN);
      console.log(ARN);
    } else {
      console.log("type in azotic bases");
    }
  }