function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/t/ig, 'U');
    // console.log(dna.replace(/t/ig, 'U'));
  }
  DNAtoRNA('GCATtT');