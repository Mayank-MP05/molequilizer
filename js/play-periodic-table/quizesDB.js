let quizesDB = [
  {
    quizData: ["B", "Al", "Ga", "In", "Ti"],
    hindiHint: `
    <strong>Be</strong>ta&nbsp;<strong>Ma</strong>nge&nbsp;<strong>Ca</strong>r
    <strong>S</strong>coter <strong>B</strong>ap <strong>Ra</strong>zi
  `,
    englishHint: "<strong>B A G I T</strong>",
  },
  {
    quizData: ["C", "Si", "Ge", "Sn", "Pb"],
    hindiHint: `
    <strong>C</strong>hemistry <strong>Si</strong>r
    <strong>G</strong>iv<strong>e</strong>s
    <strong>S</strong>a<strong>n</strong>ki
    <strong>P</strong>ro<strong>b</strong>lems
  `,
    englishHint: `
    Cute&nbsp;<strong>Si</strong>sters&nbsp;<strong>Ge</strong>t&nbsp;<strong>S</strong>mall&nbsp;(<strong>TIN</strong>y)&nbsp;<strong>P</strong>ro<strong>b</strong>lems
  `,
  },
  {
    quizData: ["Ni", "P", "As", "Sb", "Bi"],
    hindiHint: `
    <strong>N</strong>ana <strong>P</strong>atekar
    <strong>A</strong>i<strong>s</strong>hwariya
    <strong>S</strong>a<strong>B</strong> <strong>Bi</strong>khari
  `,
    englishHint: `
    <em><strong>N</strong>ew&nbsp;</em><strong>P</strong><em>olice&nbsp;</em><strong>As</strong><em>signs&nbsp;</em><strong>S</strong><em>u</em><strong>b</strong><em>ordinate&nbsp;</em><strong>Bi</strong><em>kram&nbsp;</em>on
    duty
  `,
  },
  {
    quizData: ["He","Ne", "Ar", "Kr", "Xe", "Rn"],
    hindiHint: `<strong>He</strong> <strong>Ne</strong>ver <strong>Ar</strong>gue;
              <strong>K</strong>al <strong>Xe</strong>ro
              <strong>R</strong>u<strong>n</strong> pe out hua`,
    englishHint: `              
    <em><strong>He</strong>ro&nbsp;</em><strong>Ne</strong
              ><em>ver&nbsp;</em
              >Ar<em>rived;&nbsp;</em>K<em>i</em>r<em>an&nbsp;</em>Xe<em>roxed&nbsp;</em>from&nbsp;<em
                >R</em
              ><em>oha</em>n`,
  },
    {
    quizData: ["Sc" ,"Ti" , "V" , "Cr", "Mn"],
    hindiHint: `<strong>Sc</strong>ience <strong>Ti</strong>(ea)cher
              <strong>V</strong>ineeta <strong>Cr</strong>iplani
              <strong>M</strong>a<strong>n</strong> Fenko
              (<strong>FeCo</strong>) <strong>Ni</strong> Kyun
              (<strong>Cu</strong>) <strong>Z</strong>aa<strong>n</strong> hai?`,
    englishHint: `              
    <strong>Sc</strong>ience <strong>Ti</strong>(ea)cher
              <strong>V</strong>ineeta <strong>Cr</strong>iplani (and)
              <strong>M</strong>a<strong>n</strong>ager <strong>Fe</strong>roz
              <strong>Co</strong>uld <strong>N</strong>ot <strong>Cu</strong>t
              <strong>Z</strong>i<strong>n</strong>c`,
  },
  {
    quizData: ["Fe", "Co", "Ni", "Cu", "Zn"],
    hindiHint: `<strong>Sc</strong>ience <strong>Ti</strong>(ea)cher
              <strong>V</strong>ineeta <strong>Cr</strong>iplani
              <strong>M</strong>a<strong>n</strong> Fenko
              (<strong>FeCo</strong>) <strong>Ni</strong> Kyun
              (<strong>Cu</strong>) <strong>Z</strong>aa<strong>n</strong> hai?`,
    englishHint: `              
    <strong>Sc</strong>ience <strong>Ti</strong>(ea)cher
              <strong>V</strong>ineeta <strong>Cr</strong>iplani (and)
              <strong>M</strong>a<strong>n</strong>ager <strong>Fe</strong>roz
              <strong>Co</strong>uld <strong>N</strong>ot <strong>Cu</strong>t
              <strong>Z</strong>i<strong>n</strong>c`,
  },
  {
    quizData: ["Y", "Zr" ,"Nb" ,"Mo", "Tc"],
    hindiHint: `<strong>Y</strong>e <strong>Z</strong>a<strong>r</strong>a
              <strong>N</strong>awaa<strong>b</strong> <strong>M</strong>aut
              <strong>T</strong>ak Rooh <strong>R</strong>a<strong>h</strong>egi
              <strong>P</strong>a<strong>d</strong>haai
              <strong>A</strong>a<strong>g</strong>e Chho<strong>d</strong>o`,
    englishHint: `              
     <em><strong>Y</strong>es,&nbsp;</em><strong>Z</strong><em>e</em
              ><strong>r</strong><em>o&nbsp;</em><strong>N</strong><em>o</em
              ><strong>b</strong><em>ody.&nbsp;</em><strong>Mo</strong
              ><em>st&nbsp;</em><strong>T</strong><em>ea</em><strong>c</strong
              ><em>hers&nbsp;</em><strong>R</strong><em>echecked&nbsp;</em
              ><strong>R</strong><em>o</em><strong>h</strong><em>an’s&nbsp;</em
              ><strong>P</strong><em>apers&nbsp;</em><strong>Ag</strong
              ><em>ain to&nbsp;</em><strong>C</strong><em>onfirm</em>`,
  },
  {
    quizData: ["  Ru"," Rh" ,"Pd" ,"Ag", "Cd"],
    hindiHint: `<strong>Y</strong>e <strong>Z</strong>a<strong>r</strong>a
              <strong>N</strong>awaa<strong>b</strong> <strong>M</strong>aut
              <strong>T</strong>ak Rooh <strong>R</strong>a<strong>h</strong>egi
              <strong>P</strong>a<strong>d</strong>haai
              <strong>A</strong>a<strong>g</strong>e Chho<strong>d</strong>o`,
    englishHint: `              
     <em><strong>Y</strong>es,&nbsp;</em><strong>Z</strong><em>e</em
              ><strong>r</strong><em>o&nbsp;</em><strong>N</strong><em>o</em
              ><strong>b</strong><em>ody.&nbsp;</em><strong>Mo</strong
              ><em>st&nbsp;</em><strong>T</strong><em>ea</em><strong>c</strong
              ><em>hers&nbsp;</em><strong>R</strong><em>echecked&nbsp;</em
              ><strong>R</strong><em>o</em><strong>h</strong><em>an’s&nbsp;</em
              ><strong>P</strong><em>apers&nbsp;</em><strong>Ag</strong
              ><em>ain to&nbsp;</em><strong>C</strong><em>onfirm</em>`,
  },
  {
    quizData: ["  Lu ","Hf", "Tu"," W", "Re"],
    hindiHint: `<strong>L</strong>a <strong>H</strong>a<strong>fT</strong>a
              <strong>W</strong>arna <strong>Re</strong> Us
              (<strong>Os</strong>) <strong>Ir</strong>on rod se
              <strong>P</strong>i<strong>t</strong>ega <strong>Au</strong>r
              <strong>H</strong>ospital J<strong>A</strong>eeg<strong>a</strong>`,
    englishHint: `              
    <em><strong>La</strong>xman’s&nbsp;</em><strong>H</strong
              ><em>al</em><strong>f</strong> <strong>Ta</strong
              ><em>ken,&nbsp;</em><strong>W</strong><em>asim&nbsp;</em
              ><strong>Re</strong><em>ached&nbsp;</em><strong>O</strong
              ><em>ut&nbsp;</em><strong>Ir</strong><em>on Plate&nbsp;</em
              ><strong>Au</strong><em>dibly (for)&nbsp;</em><strong>H</strong
              ><em>oney</em>`,
  },
  {
    quizData: ["Os", "Ir" ,"Pt", "Au", "Hg"],
    hindiHint: `<strong>L</strong>a <strong>H</strong>a<strong>fT</strong>a
              <strong>W</strong>arna <strong>Re</strong> Us
              (<strong>Os</strong>) <strong>Ir</strong>on rod se
              <strong>P</strong>i<strong>t</strong>ega <strong>Au</strong>r
              <strong>H</strong>ospital J<strong>A</strong>eeg<strong>a</strong>`,
    englishHint: `              
    <em><strong>La</strong>xman’s&nbsp;</em><strong>H</strong
              ><em>al</em><strong>f</strong> <strong>Ta</strong
              ><em>ken,&nbsp;</em><strong>W</strong><em>asim&nbsp;</em
              ><strong>Re</strong><em>ached&nbsp;</em><strong>O</strong
              ><em>ut&nbsp;</em><strong>Ir</strong><em>on Plate&nbsp;</em
              ><strong>Au</strong><em>dibly (for)&nbsp;</em><strong>H</strong
              ><em>oney</em>`,
  },
  {
    quizData: ["Ac", "Rf", "Db" ,"Sg"],
    hindiHint: `<strong>Ak</strong>kountant <strong>R D</strong>
              <strong>S</strong>harma ki <strong>B</strong>ook Mein
              <strong>H</strong>ain <strong>M</strong>a<strong>t</strong>hs ke
              <strong>D</strong>arawane <strong>S</strong>awaal`,
    englishHint: `              
    <em><strong>Ak</strong>t</em><em>ually,&nbsp;</em
              ><strong>R D<em>&nbsp;</em>S</strong><em>harma&nbsp;</em
              ><strong>B</strong><em>ook&nbsp;</em><strong>H</strong><em>a</em
              ><strong>s</strong><em>&nbsp;</em><strong>M</strong><em>a</em
              ><strong>t</strong><em>h</em>&nbsp;<strong><em>D</em></strong
              ><em>ifficult&nbsp;</em><strong>S</strong><em>ums</em>`,
  },
  {
    quizData: ["Bh", "Hs" ,"Mt" ,"Ds"],
    hindiHint: `<strong>Ak</strong>kountant <strong>R D</strong>
              <strong>S</strong>harma ki <strong>B</strong>ook Mein
              <strong>H</strong>ain <strong>M</strong>a<strong>t</strong>hs ke
              <strong>D</strong>arawane <strong>S</strong>awaal`,
    englishHint: `              
    <em><strong>Ak</strong>t</em><em>ually,&nbsp;</em
              ><strong>R D<em>&nbsp;</em>S</strong><em>harma&nbsp;</em
              ><strong>B</strong><em>ook&nbsp;</em><strong>H</strong><em>a</em
              ><strong>s</strong><em>&nbsp;</em><strong>M</strong><em>a</em
              ><strong>t</strong><em>h</em>&nbsp;<strong><em>D</em></strong
              ><em>ifficult&nbsp;</em><strong>S</strong><em>ums</em>`,
  },
];
