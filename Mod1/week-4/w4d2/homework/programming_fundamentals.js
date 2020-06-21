// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?

   const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(6000))

  //Ok, so now I am realizing that the code works when I put in an even number, is that what evenSum represent
  //Ok, so when I plug something in f2() does it go inside (limit) in line 17 and then goes down the code
